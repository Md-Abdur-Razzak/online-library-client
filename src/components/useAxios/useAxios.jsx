import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../Router/AuthProvider";


const gobalAxios = axios.create({
    baseURL:"https://libary-mang-server.vercel.app",

})
const useAxios = () => {
  
   return gobalAxios
};

export default useAxios;