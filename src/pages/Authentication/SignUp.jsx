import { AuthContainer, Section, InputValidationDiv, ErrorSpan } from "./SignUpStyled.jsx"
import { Input } from "../../components/Input/Input.jsx"
import { Button } from "../../components/Button/Button.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "../../schemas/signUpSchema.js"
import { signUpUser, checkUsernameService, checkEmailService } from "../../services/userServices.js"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { useState } from "react"
import 'ldrs/ring2'
import { z } from "zod"

const SignUp = function() {

  const { register: registerSignUp, handleSubmit: handleSubmitSignUp, formState: { errors: errorsSignUp } } = useForm({ resolver: zodResolver(signUpSchema) })

  const navigate = useNavigate()


  async function signUp(data) {
    try {
      const response = await signUpUser(data)
      Cookies.set("token", response.data.token, { expires: 1 })
      Cookies.set("id", response.data.user.id, { expires: 1 })
      navigate("/")
    } catch (err) {
      console.error(err.message)
    }
  }

  const [ isUsernameAvailable, setIsUsernameAvailable ] = useState("")
  const [ usernameCheckLoading, setUsernameCheckLoading ] = useState(false)
  const [ isEmailAvailable, setIsEmailAvailable ] = useState("")
  const [ emailCheckLoading, setEmailCheckLoading ] = useState(false)

  return (
    <AuthContainer>
      <Section id="background">
        <img src="/img/parrot-background-2.jpg"></img>
      </Section>
      
      <Section type="signup">
        <form onSubmit={handleSubmitSignUp(signUp)}>
          <h2>Olá, seja bem vindo ao News Parrot</h2>
          
          <div id="inputArea">
            <label htmlFor="username">Nome de usuário:  
              <InputValidationDiv>
                <Input type="text" onInput={ async (e) => {
                  setUsernameCheckLoading(true)
                  const mySchema = z.string().min(3)
                  let usernameValidation
                  try {
                    usernameValidation = mySchema.parse(e.target.value)
                  } catch {
                    usernameValidation = false
                  }
  
                  if (!usernameValidation){
                    setIsUsernameAvailable(false)
                    setUsernameCheckLoading(false)
                  } else {
                    try {
                      const response = await checkUsernameService(e.target.value)
                      setIsUsernameAvailable(response.data.usernameAvailable)
                    } catch (err) {
                      return { message: err.message }
                    } finally {
                      setUsernameCheckLoading(false)
                    }
                  }
                }} {...registerSignUp("username")} placeholder="Nome de usuário" name="username" id="username" />
                {usernameCheckLoading && <i className="bi"><l-ring-2
                  size="20"
                  stroke="5"
                  stroke-length="0.25"
                  bg-opacity="0.1"
                  speed="0.8"
                  color="black" 
                ></l-ring-2></i>}
                {isUsernameAvailable && !usernameCheckLoading && <i className="bi bi-check-circle-fill"></i>}
                {isUsernameAvailable === "" && !usernameCheckLoading && <i className="bi"> </i>}
                {isUsernameAvailable === false && !usernameCheckLoading && <i className="bi bi-x-circle-fill"></i>}
              </InputValidationDiv>
            </label>
  
            <label htmlFor="email">E-mail:
              <InputValidationDiv>
                 <Input 
                   type="text" 
                   onInput={ async (e) => {
                    setEmailCheckLoading(true)
                    const mySchema = z.string().email()
                    let emailValidation
                    try {
                      emailValidation = mySchema.parse(e.target.value)
                    } catch {
                      emailValidation = false
                    }

                    if (!emailValidation) {
                      setIsEmailAvailable(false)
                      setEmailCheckLoading(false)
                    } else {
                      try {
                        const response = await checkEmailService(e.target.value)
                        setIsEmailAvailable(response.data.emailAvailable)
                      } catch (err) {
                        return { message: err.message }
                      } finally {
                        setEmailCheckLoading(false)
                      }
                    }
                 }} 
                   {...registerSignUp("email")} 
                   placeholder="E-mail" 
                   name="email"
                   id="email"
                   />
                {emailCheckLoading && 
                  <i className="bi">
                    <l-ring-2
                    size="20"
                    stroke="5"
                    stroke-length="0.25"
                    bg-opacity="0.1"
                    speed="0.8"
                    color="black" 
                    ></l-ring-2>
                  </i>}
                {isEmailAvailable && !emailCheckLoading && <i className="bi bi-check-circle-fill"></i>}
                {isEmailAvailable === "" && !emailCheckLoading && <i className="bi"> </i>}
                {isEmailAvailable === false && !emailCheckLoading && <i className="bi bi-x-circle-fill"></i>}
              </InputValidationDiv>
            </label>

            <label htmlFor="password">Senha: 
              <Input type="password" {...registerSignUp("password")} placeholder="Senha" name="password" id="password" />
            </label>

            <label htmlFor="confirmPassword">Confirme a Senha: 
              <Input type="password" {...registerSignUp("confirmPassword")} placeholder="Confirmar senha" name="confirmPassword" />
            </label>
          </div>

          <div id="errorsArea">
            { errorsSignUp.username ? <ErrorSpan>{errorsSignUp.username.message}</ErrorSpan> : null}
            { errorsSignUp.email ? <ErrorSpan>{errorsSignUp.email.message}</ErrorSpan> : null}
            { errorsSignUp.password ? <ErrorSpan>{errorsSignUp.password.message}</ErrorSpan> : null}
            { errorsSignUp.confirmPassword ? <ErrorSpan>{errorsSignUp.confirmPassword.message}</ErrorSpan> : null}
          </div> 
         
          <Button type="submit" text="Registrar" />
        </form> 
      </Section>
    </AuthContainer>
  )
}

export { SignUp }