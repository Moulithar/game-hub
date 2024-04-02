import axios from "axios"

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "95a3e0d55d7944cc95f1532d1463f5cc"
    }
})