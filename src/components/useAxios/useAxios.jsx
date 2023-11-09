

import axios from "axios";


const gobalAxios = axios.create({
    baseURL:"https://libary-mang-server-side.vercel.app",


})
const useAxios = () => {
  
   return gobalAxios
};
export default useAxios