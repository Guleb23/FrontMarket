import axios from "axios"

const api = axios.create({
    baseURL: "https://guleb23-apiformarket-81d6.twc1.net/api",
    withCredentials: false,
})

export default api
