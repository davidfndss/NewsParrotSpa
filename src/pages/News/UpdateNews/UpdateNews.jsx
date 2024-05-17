import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateNewsService, getNewsByIdService } from "../../../services/newsServices.js"
import { newsSchema } from "../../../schemas/newsSchema.js"
import { useNavigate, useParams } from "react-router-dom" 
import { useState, useEffect } from "react"
import { Section } from "./UpdateNewsStyled.jsx"
import { Button } from "../../../components/Button/Button.jsx"

function UpdateNews() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(newsSchema)});
  const navigate = useNavigate()
  const { id } = useParams()
  
  const [ news, setNews ] = useState()
  
  useEffect(() => {
    const findNews = async () => {
      try {
        const response = await getNewsByIdService(id)
        setNews(response.data.news)
      } catch (err) {
        console.error(err.message)
      }
    }

    findNews()
  }, [])
  
   

  async function updateNews(data) {
    try {
      const response = await updateNewsService(data, id)
      navigate("/")
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
      return <label htmlFor={name}> {labelContent} <textarea {...inputProps} /></label>
    }
    
  }

  if (news) {
    return (
      <Section>
        <form onSubmit={handleSubmit(updateNews)}>
          <h2>Atualize a sua notícia</h2>
          <article>
            <Input name="title" initialValue={news.title} labelContent="Título: " />
            <Input name="text" initialValue={news.text} labelContent="Descrição: " isTextArea="true"/>
            <Input name="banner" initialValue={news.banner} labelContent="Link da Imagem: " />
          </article>
          { errors.title ? <span>{errors.title.message}</span> : null}
          { errors.text ? <span>{errors.text.message}</span> : null}
          { errors.banner ? <span>{errors.banner.message}</span> : null}
          <Button type="submit" text="Enviar"></Button>
        </form>
      </Section>
    )
  }
  
}

export { UpdateNews }