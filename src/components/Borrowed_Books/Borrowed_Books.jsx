import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../Router/AuthProvider";
import Borrowed_cart from "./Borrowed_cart";
import axios from "axios";
import Loder from "../Loder/Loder"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Borrowed_Books = () => {
    const borrowBook = useLoaderData()
    const {user}=useContext(MyContext)
    const[bookStore,setBookStore]=useState([])
  
  const [lode,setLode]=useState(true)

   useEffect(()=>{
    const filtarinData = borrowBook?.filter(book=>book.email == user?.email)
    setBookStore(filtarinData)
    setLode(false)

   },[user?.email,borrowBook])
     
  if (lode) {
    return <Loder></Loder>
   }
   const handelReturn = (id,deletId) =>{
        const data = {deletId}
        console.log(data);
    axios.post(`http://localhost:5000/return/${id}`,data)
    .then(res=>{
     if (res.data.deletedCount>0) {
        const filter = bookStore?.filter(data=>data._id !==id)
        setBookStore(filter)
        toast.success("Return Book Successfuly")
     }
    })
}
    return (
        <div  className="w-[60%] mx-auto mt-[100px]">
            <div>
              {
                bookStore?.length==0&& <div className="flex justify-center mt-[50px]"><img className="w-[300px]" src="https://i.ibb.co/s6h9xQZ/7486754.png" alt=""  /></div>
              }
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    bookStore.map(item=><Borrowed_cart key={item._id} item={item} handelReturn={handelReturn}></Borrowed_cart>)
                }
           </div>
        </div>
    );
};

export default Borrowed_Books;