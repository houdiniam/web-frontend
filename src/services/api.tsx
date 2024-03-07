import axios from "axios";

export const api = axios.create({
    baseURL: "https://web-json-api.onrender.com/",
})