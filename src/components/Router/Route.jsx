import { createBrowserRouter } from "react-router-dom";
import Main_Layout from "../Main_Layout/Main_Layout";
import Home from "../Home/Home";
import Login from "../UserVarified/Login";
import Registration from "../UserVarified/Registration";
import Add_Product from "../Add_product/Add_Product";
import All_Books from "../All_Books/All_Books";
import Borrowed_Books from "../Borrowed_Books/Borrowed_Books";
import Private_Router from "./Private_Router";
import Catagory_R_books from "../catagory_relativ_book/Catagory_R_books";
import Book_Details from "../book_Details/Book_Details";
import Update from "../update/Update";
import PageNotFound from "../PageNot/PageNotFound";
import Read_books from "../Read_book/Read_books";

export const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<Main_Layout></Main_Layout>,
        errorElement:<PageNotFound></PageNotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/addbook',
                element:<Private_Router><Add_Product></Add_Product></Private_Router> 
            },
            {
                path:'/allbooks',
                element:<Private_Router> <All_Books></All_Books> </Private_Router> ,
                
            },
            {
                path:'/bbooks',
                element:<Private_Router><Borrowed_Books></Borrowed_Books></Private_Router> ,
              
            },
            {
                path:'/samebook/:catagory',
                element:<Catagory_R_books></Catagory_R_books>
            },
            {
                path:'/update/:id',
                element:<Private_Router><Update></Update></Private_Router>   ,  
                loader:({params})=>fetch(`https://libary-mang-server-side.vercel.app/allbooks/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<Private_Router> <Book_Details></Book_Details> </Private_Router> ,
           
                loader:({params})=>fetch(`https://libary-mang-server-side.vercel.app/allbooks/${params.id}`)
            },
            {
                path:'/read/:id',
                element:<Read_books></Read_books>,
                loader:({params})=>fetch(`https://libary-mang-server-side.vercel.app/allbooks/${params.id}`)
            }
        ]
    }
])