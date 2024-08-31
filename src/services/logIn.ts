import axios, { AxiosResponse } from "axios";
import { credentials } from "../interfaces";

interface Idata {
    token: string;
}

export const logIn = async ({username, password}: credentials)=> {
    
    try{
        const response = await axios.post("https://fakestoreapi.com/auth/login", {username, password})
        return response.data 
    }   catch(err){
        console.error(err)
        throw err;
    }
}