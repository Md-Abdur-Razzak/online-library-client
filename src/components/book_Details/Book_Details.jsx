import { Rating } from "@smastrom/react-rating";
import { data } from "autoprefixer";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MyContext } from "../Router/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const Book_Details = () => {
    const singleData = useLoaderData()
    const {user}=useContext(MyContext)
    const userName = user?.displayName || "";
    const email = user?.email
    const {img,name,quantity,Aname,catagory,des,rating,_id}=singleData || {}
   
    const handelBorrowBtn = ()=>{
      axios.get(`http://localhost:5000/s?email=${email}&id=${_id}`)
      .then(res=>{
       if (res.data.id) {
        toast.error("Alrady book borrowed ")
       }else{
          document.getElementById('my_modal_3').showModal()
       }
      })
    
    }
    const handelRetunBorrwBook = (e)=>{
       e.preventDefault()
     
       const borrowDate = new Date().toLocaleDateString('en-GB');
       
       const returnDate = e.target.datevalue.value
       const submiteData = {borrowDate,userName,email,returnDate,img,name,quantity,catagory,id:_id}
       axios.post(`http://localhost:5000/borrowBook`,submiteData)
       .then(res=>{
        toast.success("Borrowed successfuly")
        document.getElementById('my_modal_3').close()
       })
     }
    return (
        <div className='mt-[100px]'>
          <div className='lg:w-[90%] md:w-[90%] w-[99%] md:p-0 p-9  mx-auto justify-evenly  md:flex md:gap-20'>
            <div><img className='h-[350px] md:w-[500px] rounded-md w-[100%]' src={img} alt="" /></div>
            <div className='space-y-4'>
           <div className='flex gap-2 text-2xl md:mt-0 mt-9 text-white  font-bold items-center '>
            <h2 className="p-2 md:px-5 bg-green-500 rounded-full">{catagory}</h2>
           
           </div>

            <h2 className="text-2xl font-bold">Name : {name}</h2>
            <h2 className="text-xl font-bold">Auth : {Aname}</h2>

    
            <h2 className="text-xl font-bold">quantity : {quantity}</h2>
           
            <div className='md:w-[400px] w-[95%] justify-center'>
            <p className='text-xl text-justify '>{des}</p>
            </div> 
            
            <div className="rating flex items-center">
           <Rating readOnly style={{maxWidth:'120px'}} value={`${rating}`}/>
            <h1 className='text-3xl font-bold ml-2'>{rating}</h1>
          </div>
      
       <Link to={`/read/${_id}`}> <button  className='btn bg-green-500  text-white'>Read</button> </Link>
        <button   onClick={()=>handelBorrowBtn()} disabled={quantity<=0?true:false} className='btn bg-blue-500 text-white ml-4 '>Borrow</button>
            </div>
          </div>
          {/* model */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
            <form onSubmit={handelRetunBorrwBook}>
                <div className="form-control ">
                    <label className="label">
                    <span className="label-text">Return Book Date</span>
                    </label>
                    <input type="date" name='datevalue' placeholder="date" required className="input input-bordered w-[100%] " />
                 <button  className="btn mt-3 bg-green-400 text-white">submit</button>
                </div>
             
            </form>
            </div>
            </dialog>
        </div>
    );
};

export default Book_Details;