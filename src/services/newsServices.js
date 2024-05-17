import axios from "axios"
import { authService } from "./authService.js"

const baseUrl = "https://newsparrotapi.onrender.com"

const getAllNews = (nextUrl) => {
  if (nextUrl) {
    const response = axios.get(`${baseUrl}${nextUrl}`)
    return response
  } else {
    const response = axios.get(`${baseUrl}/news`)
    return response
  }
}

const getTopNews = () => {
  const response = axios.get(`${baseUrl}/news/top`)
  return response
}

const getNewsByIdService = (id) => {
  const { headers } = authService()
  const response = axios.get(`${baseUrl}/news/${id}`, headers)
  return response
}

const searchNewsByTitle = (title) => {
  const response = axios.get(`${baseUrl}/news/search?title=${title}`)
  return response
}

const searchNewsByUser = (id) => {
  const { headers } = authService()
  const response = axios.get(`${baseUrl}/news/search-by-user/${id}`, headers)
  return response
}

const addNewsService = (data) => {
  const { token } = authService()
  const response = fetch(`${baseUrl}/news/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  return response
}

const updateNewsService = (data, id) => {
  const { token } = authService()
  const response = fetch(`${baseUrl}/news/update/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  return response
}

const deleteNewsService = ( id) => {
  const { token } = authService()
  const response = fetch(`${baseUrl}/news/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  return response
}

const likeNewsService = (id) => {
  const { token } = authService()
  const response = fetch(`${baseUrl}/news/like/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  return response
}

const addCommentService = (data, id) => {
  const { token } = authService()
  const response = fetch(`${baseUrl}/news/${id}/comment`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })

  return response
}

const deleteCommentService = ( newsId, commentId ) => {
  const { token } = authService()
  const response = fetch(`${baseUrl}/news/${newsId}/comment/${commentId}/delete`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  return response
}

export { getAllNews, getTopNews, getNewsByIdService, searchNewsByTitle, searchNewsByUser, addNewsService, updateNewsService, likeNewsService, addCommentService, deleteCommentService, deleteNewsService }