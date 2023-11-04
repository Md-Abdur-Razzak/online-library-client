import { createBrowserRouter } from "react-router-dom";
import Main_Layout from "../Main_Layout/Main_Layout";
import Home from "../Home/Home";
import Login from "../UserVarified/Login";

export const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<Main_Layout></Main_Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])