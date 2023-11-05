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
                element:<All_Books></All_Books>,
                
            },
            {
                path:'/bbooks',
                element:<Private_Router><Borrowed_Books></Borrowed_Books></Private_Router> 
            },
            {
                path:'/samebook/:catagory',
                element:<Catagory_R_books></Catagory_R_books>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,    
                loader:({params})=>fetch(`http://localhost:5000/allbooks/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<Book_Details></Book_Details>,
           
                
            }
        ]
    }
])