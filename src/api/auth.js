import axios from "@/api/axios";

const register = credentials => {
  return axios.post('/register', credentials)
}

const login = credentials => {
  return axios.post('/login', credentials)
}

const deleteUser = id => {
  return axios.delete('/users/' + id + '/')
}

const updateUser = (id, credentials) => {
  return axios.put('/users/' + id + '/', credentials)
}

export default {
  register,
  login,
  deleteUser,
  updateUser
}