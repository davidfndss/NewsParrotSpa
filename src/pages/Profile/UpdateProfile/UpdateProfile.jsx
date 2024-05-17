import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UpdateUserSchema } from "../../../schemas/UpdateUserSchema.js"
import { useNavigate, useParams } from "react-router-dom" 
import { useState, useContext } from "react"
import { Section } from "../../News/UpdateNews/UpdateNewsStyled.jsx"
import { Button } from "../../../components/Button/Button.jsx"
import { UserContext } from "../../../Context/UserContext.jsx"
import { updateUserService } from "../../../services/userServices.js"


function UpdateProfile() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(UpdateUserSchema)});
  const navigate = useNavigate()
  const { username } = useParams()
  const { loggedUserInfo } = useContext(UserContext)

  if (!loggedUserInfo.username) navigate("/signin")

  async function updateUser(data) {
    try {
      const id = loggedUserInfo.id
      const response = await updateUserService(data, id)
      navigate(`/profile/${username}`)
    } catch (err) {
      console.error(err.message)
    }
  }

  const Input = ({name, initialValue, labelContent, isTextArea}) => {
    const [ value, setValue ] = useState(initialValue)
    const inputProps = {
      value,
      ...register(String(name)),
      id: String(name),
      onChange: (e) => {
        setValue(e.target.value)
      }
    }

    if (!isTextArea) {
      return (
        <label htmlFor={name}> {labelContent} <input {...inputProps} /></label>
      )
    } else {
      return <label htmlFor={name}> {labelContent} <textArea {...inputProps} /></label>
    }

  }

  if (loggedUserInfo) {
    return (
      <Section>
        <form onSubmit={handleSubmit(updateUser)}>
          <h2>Atualize o seu perfil</h2>
          <article>
            <Input name="name" initialValue={loggedUserInfo.name} labelContent="Nome: " />
            { errors.name ? <span>{errors.name.message}</span> : null}
            <Input name="avatar" initialValue={loggedUserInfo.avatar} labelContent="Link da Imagem de perfil: " />
            { errors.avatar ? <span>{errors.avatar.message}</span> : null}
            <Input name="background" initialValue={loggedUserInfo.background} labelContent="Link da Imagem de plano de fundo: " />
            { errors.background ? <span>{errors.background.message}</span> : null}
          </article>
          
          
          
          <Button type="submit" text="Enviar"></Button>
        </form>
      </Section>
    )
  }
}

export { UpdateProfile }