import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3000/api/',
  baseURL: 'https://shaw-and-partners-backend-6c4x.onrender.com/api/',
})

export default api
