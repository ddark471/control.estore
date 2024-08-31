import {useMutation} from "@tanstack/react-query"
import axios from "axios"
import { logIn } from "../services/logIn"
import { credentials } from "../interfaces"
import { useNavigate } from "react-router-dom"

export const useLogIn = () => {
    const navigate = useNavigate();
    const {mutate, data, error} = useMutation({
        mutationFn: ({username, password}: credentials) => logIn({username, password}),
        onSuccess: (data: any) => {
            if(data?.token) navigate("/home")
        },
        onError: (error: any) => console.error(error)
    })
    return {mutate, data, error}
}