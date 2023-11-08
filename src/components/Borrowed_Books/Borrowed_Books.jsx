import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../Router/AuthProvider";

import axios from "axios";
import Loder from "../Loder/Loder"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Borrowed_Books = () => {

    const {user}=useContext(MyContext)
    const[bookStore,setBookStore]=useState([])
    const[borrowBook,setBorradBook]=useState([])
  
  const [lode,setLode]=useState(true)
useEffect(()=>{
  axios.get(`https://libary-mang-server.vercel.app/borroBooks`)
  .then(res=>{
      setBorradBook(res.data)
      setLode(false)
  })
},[])
   useEffect(()=>{
    const filtarinData = borrowBook?.filter(book=>book.email == user?.email)
    setBookStore(filtarinData)
  

   },[user?.email,borrowBook])
     
  if (lode) {
    return <Loder></Loder>
   }
   const handelReturn = (id,deletId) =>{
        const data = {deletId}
      
    axios.post(`https://libary-mang-server.vercel.app/return/${id}`,data)
    .then(res=>{
     if (res.data.deletedCount>0) {
        const filter = bookStore?.filter(data=>data._id !==id)
        setBookStore(filter)
        toast.success("Return Book Successfuly")
     }
    })
}
    return (
        <div  className="md:w-[90%] h-[100vh]  mx-auto mt-[100px]">
            <div>
              {
                bookStore?.length==0&& <div className="flex justify-center mt-[50px]"><img className="w-[300px]" src="https://i.ibb.co/s6h9xQZ/7486754.png" alt=""  /></div>
              }
            </div>
   
           <div>
           <div className="overflow-x-auto ">
  <table className="table border border-green-500  dark:text-white ">
    {/* head */}
    <thead >
      {
        bookStore?.length==0?"":
        <tr className="text-green-500 text-xl border border-green-500">
  
        <th>book img</th>
        <th>Name</th>
        <th>Categories</th>
        <th>Borrowed Date</th>
        <th>Return Date</th>
        <th>Return Book</th>
      </tr>
      }
    </thead>
    <tbody >
      {/*  const {img,name,catagory,borrowDate,returnDate,_id,id}=item */}
                {bookStore.length==0?"":
                  bookStore?.map(d=>{
                    return(
                      <tr key={d._id} className="border-green-500">
                    
                      <td  className="text-center">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={d.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        
                        </div>
                      </td>
                      <td>
                       {d.name}
                       
                      </td>
                      <td>{d.catagory}</td>
                      <th>
                        <td>{d.borrowDate}</td>
                      </th>
                      <th>
                        <td>{d.returnDate}</td>
                      </th>
                      <th>
                        <td onClick={()=>handelReturn(d._id , d.id)} className="btn bg-green-400 text-white">Return Book</td>
                      </th>
                    </tr>
                    )
                  })
                }
     
     
    </tbody>
    {/* foot */}
 
    
  </table>
</div>
           </div>
        </div>
    );
};

export default Borrowed_Books;