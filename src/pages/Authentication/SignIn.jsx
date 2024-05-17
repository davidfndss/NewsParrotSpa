import { AuthContainer, Section, ErrorSpan } from "./SignInStyled.jsx"
import { Input } from "../../components/Input/Input.jsx"
import { Button } from "../../components/Button/Button.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInSchema } from "../../schemas/signInSchema.js"
import { signInUser } from "../../services/userServices.js"
import { useNavigate, Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useState } from "react"
import 'ldrs/ring2'

const SignIn = function() {
  const { register: registerSignIn, handleSubmit: handleSubmitSignIn, formState: { errors: errorsSignIn } } = useForm({ resolver: zodResolver(signInSchema) })

  const navigate = useNavigate()

  async function signIn(data) {
    try {
      const response = await signInUser(data)
      Cookies.set("token", response.data.token, { expires: 1 })
      Cookies.set("id", response.data.user.id, { expires: 1 })
      navigate("/")
    } catch (err) {
      setCatchedError(err.response.data.message)
    }
  }

  const [ catchedError, setCatchedError ] = useState("")

  return (
    <AuthContainer>
      <Section type="signin"> 
        <form onSubmit={handleSubmitSignIn(signIn)}>
          <div>
            <h2>Olá, bem vindo de volta!</h2>
          </div>
          <div id="inputArea">
            <label htmlFor="email">E-mail:<Input id="email" type="email" {...registerSignIn("email")}  placeholder="E-mail" name="email" /></label>
            
            <label htmlFor="password">Senha:<Input id="password" type="password" {...registerSignIn("password")}  placeholder="Senha" name="password" /></label>
            
            <div id="errorsArea">
              { errorsSignIn.email ? <ErrorSpan>{errorsSignIn.email.message}</ErrorSpan> : null}
              { errorsSignIn.password ? <ErrorSpan>{errorsSignIn.password.message}</ErrorSpan> : null}
              { catchedError ? <ErrorSpan>{catchedError}</ErrorSpan> : null}
            </div>
          </div>

          <div id="btnArea">
            <p> Não possui conta ainda? <Link to="/signup">Criar conta</Link></p>
            <Button text="Entrar" />
          </div>
        </form>
      </Section>
      
      <Section id="background">
        <img src="/img/parrot-background.jpg"></img>
      </Section>
    </AuthContainer>
  )
}

export { SignIn }