import axios from "axios";

export const reqResAPI = axios.create({
    baseURL: 'https://reqres.in/api'
})