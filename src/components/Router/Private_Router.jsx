import { useContext } from "react";
import { MyContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loder from "../Loder/Loder";


const Private_Router = ({children}) => {
   const { user,loder}=useContext(MyContext)
   const location = useLocation()
   
   if (loder) {
    return <Loder></Loder>
   }
   if(user){
    return children
   }
   return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Private_Router;