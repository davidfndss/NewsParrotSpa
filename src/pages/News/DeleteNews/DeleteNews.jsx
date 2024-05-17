import { deleteNewsService } from "../../../services/newsServices.js"
import { useNavigate, useParams } from "react-router-dom" 
import { useEffect } from "react"
import Swal from 'sweetalert2'


function DeleteNews() {
  const navigate = useNavigate()
  const { id } = useParams()

  const deleteNews = async () => {
    try {
       await deleteNewsService(id)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    Swal.fire({
      title: "Você deseja realmente apagar sua notícia?",
      showDenyButton: true,
      showConfirmButton: true,
      icon: "warning",
      confirmButtonText: `Deletar`,
      confirmButtonColor: "#d33",
      denyButtonText: `Cancelar`,
      denyButtonColor: `#3085d6`,
    }).then((result) => {
     if (result.isConfirmed) { // if the user confirm to delete the news
        deleteNews()
        navigate("/")
        Swal.fire({
          title: "Notícia deletada com sucesso!",
        });
      }

      if (result.isDenied) navigate(-1)

    });

  }, [])
  
  return
}

export { DeleteNews }