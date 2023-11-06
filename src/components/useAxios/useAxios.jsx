import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../Router/AuthProvider";
import { useNavigate } from "react-router-dom";

const gobalAxios = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true
})
const useAxios = () => {
    const {logOut}=useContext(MyContext)
    // const navigate = useNavigate()
    gobalAxios.interceptors.response.use(response=>{
        return response
    },(error)=>{
        if(error.response.status == 401 || error.response.status == 403){
            logOut()
           
        }
    })
   return gobalAxios
};

export default useAxios;