import { useContext } from "react";
import { MyContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import Loder from "../Loder/Loder";


const Private_Router = ({children}) => {
   const { user,loder}=useContext(MyContext)
   
   if (loder) {
    return <Loder></Loder>
   }
   if(user){
    return children
   }
   return <Navigate to={'/login'}></Navigate>
};

export default Private_Router;