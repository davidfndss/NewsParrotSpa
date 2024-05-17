import { useParams } from "react-router-dom"
import { searchNewsByTitle } from "../../services/newsServices.js"
import { useState, useEffect } from "react"
import { Card } from "../../components/Cards/Card.jsx"
import { SearchBody } from "./SearchStyled.jsx"
import 'ldrs/ring2'
import { LoadingSection } from "../../components/LoadingSection/LoadingSection.jsx"

function Search() {
  let [ loading, setLoading ] = useState(false)
  
  const { title } = useParams()
  let [ searchNews, setSearchNews] = useState([])

  async function search() {
    setLoading(true)
    try {
      const news = await searchNewsByTitle( title )
      setSearchNews(news.data.results || [])
    } catch (err) {
      console.error("Erro ao pesquisar notícias:", err.message)
      setSearchNews([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    search()
  }, [title])

  if (loading) {
    return <LoadingSection />
  } else {
    return (
      <>
        <SearchBody>
            <span>
              { 
                searchNews.length 
                  ? `Encontramos ${searchNews.length} ${
                      searchNews.length > 1 ? "resultados": "resultado"
                    } para: ${title}` 
                  : `Não encontramos resultados para: ${ title }`
              }
            </span>
          { 
            searchNews.length === 0 ? null : searchNews.map((item) => {
              return <Card
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}
            />
            })
          } 
        </SearchBody>
      </> 
    )
  }
}

export { Search }