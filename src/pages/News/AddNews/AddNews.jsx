import { useEffect, useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Section } from "./AddNewsStyled.jsx"
import { Button } from "../../../components/Button/Button.jsx"
import { zodResolver } from "@hookform/resolvers/zod"
import { addNewsService } from "../../../services/newsServices.js"
import { newsSchema } from "../../../schemas/newsSchema.js"
import { useNavigate } from "react-router-dom" 
import { UserContext } from "../../../Context/UserContext.jsx"
import Swal from 'sweetalert2'

function AddNews() {
   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(newsSchema)});
  const navigate = useNavigate()
  const { loggedUserInfo } = useContext(UserContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está logado
    if (loggedUserInfo.username) {
      setIsLoggedIn(true);
    } else {
      navigate("/signin");
    }
  }, [loggedUserInfo, navigate]);

  async function registerNews(data) {
    try {
      const response = await addNewsService(data)
      navigate("/")
    } catch (err) {
      console.error(err)
      Swal.fire("deu erro")
    }
  }

  if (!isLoggedIn) {
    // Se o usuário não estiver logado, não renderize o formulário
    return null;
  }

  return (
    <Section>
      <form onSubmit={handleSubmit(registerNews)}>
        <h2>Adicionar uma notícia</h2>
        <div>
          <label htmlFor="title">Título: <input {...register("title")} id="title" /></label>
          { errors.title ? <span>{errors.title.message}</span> : null}
          <label htmlFor="text">Descrição: <textarea {...register("text")}  id="text" /></label>
          { errors.text ? <span>{errors.text.message}</span> : null}
          <label htmlFor="banner">Link da Imagem: <input {...register("banner")}  id="banner" /></label>
           { errors.banner ? <span>{errors.banner.message}</span> : null}
        </div>
        <Button type="submit" text="Enviar"></Button>
      </form>
    </Section>
  )
}

export { AddNews }
