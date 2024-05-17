import { useState, useEffect } from "react"
import { Card } from "../../components/Cards/Card.jsx"
import { HomeHeader, HomeBody, AddBtn, LoadMoreNewsBtn } from "./HomeStyled.jsx"
import { getAllNews, getTopNews } from "../../services/newsServices.js"
import { Link } from "react-router-dom"
import { LoadingSection } from "../../components/LoadingSection/LoadingSection.jsx"
import { getLoggedUserInfoService } from "../../services/getLoggedUserInfoService.js"

function Home() {
  const [ newsList, setNewsList ] = useState([])
  const [ topNews, setTopNews ] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ loggedUser, setLoggedUser ] = useState({})
  const [ nextUrl, setNextUrl ] = useState()

  async function findNews() {
    try {
      let newsResponse
      if ( nextUrl ) {
        newsResponse = await getAllNews(nextUrl)
        const newsResponseShifted = newsResponse.data.results
        newsResponseShifted.shift()
        setNewsList( previous => [...previous, ...newsResponseShifted])
      } else {
        newsResponse = await getAllNews()
        const newsResponseShifted = newsResponse.data.results
        newsResponseShifted.shift()
        setNewsList(newsResponseShifted)
      }

      setNextUrl(newsResponse.data.nextUrl)

      const topNewsResponse = await getTopNews()
      setTopNews(topNewsResponse.data.news)
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        const response = await getLoggedUserInfoService();
        setLoggedUser(response);
      })();
    } catch (err) {
      console.error(err);
    }
    findNews();
  }, []);


  if (loading) {
    return <LoadingSection />;
  } else {
    return (
      <>
        <HomeHeader>
          <Card 
            top="true"
            id={topNews.id}
            title={topNews.title}
            text={topNews.text}
            banner={topNews.banner}
            showGoBtn="true"
          />
        </HomeHeader>
        <HomeBody> 
          {loggedUser && ( 
            <AddBtn>
              <Link to="/news/add">
                <i className="bi bi-newspaper"></i>
              </Link>
            </AddBtn>
          )}
          {newsList.map((item) => {
            return <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              showGoBtn="true"
            />;
          })}
        </HomeBody>  
        <LoadMoreNewsBtn onClick={findNews}><i className="bi bi-arrow-down-square-fill"></i></LoadMoreNewsBtn>
      </> 
    );
  }
}

export { Home };
