import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const updateBook = useLoaderData()
  const {img,name,quantity,Aname,catagory,des,rating,_id}=updateBook
    console.log(updateBook);
    const handelUpdate = (e) =>{
        e.preventDefault()
        const from = e.target
        const name = from.pName.value
        const catagory = from.BrandName.value
        const Aname = from.pPrice.value
        // const quantity = from.quantity.value
        // const des = from.pDetails.value
        const rating=from.Rating.value
        const img = from.pImg.value
        const prodectsAllDetails = {name,catagory,Aname,des,rating,img,quantity}
   
      axios.post(`http://localhost:5000/bookUpdate/${_id}`,prodectsAllDetails)
      .then(res=>{
            if (res.data.modifiedCount>0) {
              
            toast.success("Book Update  Successfully")
            from.reset()  
            }
            
        
      })
    

    }
    return (
        <div>
        <div className="form-control">
       
         <div className="hero min-h-screen bg-base-200 dark:bg-black">
<div className="hero-content w-[50%] max-[769px]:w-[90%] flex-col ">
 <div className="text-center ">
   <h1 className="text-5xl font-bold">Update Book </h1>
   
 </div>
 <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
   <form onSubmit={handelUpdate} className="card-body">
    <div className='md:flex justify-between md:gap-4'>
    <div className="form-control w-full">
       <label className="label">
         <span className="label-text">Book Name</span>
       </label>
       <input type="text" placeholder="Book Name" name='pName' defaultValue={name} className="input input-bordered  " required />
     </div>
     <div className="form-control  w-full">
       <label className="label">
         <span className="label-text">Category Name</span>
       </label>
       <select  className="select select-primary w-full max-w-xs " defaultValue={catagory} name='BrandName' required>
           <option disabled selected>Category Name </option>
           <option>Sports</option>
           <option>Kinds</option>
           <option>History</option>
           <option>Cooking</option>
           
       </select>
      
     </div>
    </div>
    <div className='md:flex justify-between md:gap-4'>
    <div className="form-control w-full">
       <label className="label">
         <span className="label-text">Auth Name</span>
       </label>
       <input type="text" placeholder="Auth Name" defaultValue={Aname} name='pPrice' className="input input-bordered w-full" required />
     </div>
    {/* <div className="form-control w-full">
       <label className="label">
         <span className="label-text">Book quantity</span>
       </label>
       <input type="text" placeholder="quantity" name='quantity' defaultValue={quantity} className="input input-bordered w-full" required />
     </div> */}
     {/* <div className="form-control w-full">
       <label className="label">
         <span className="label-text">Details</span>
       </label>
       <input type="text" placeholder="Book Details" name='pDetails' defaultValue={des} className="input input-bordered w-full" required />
     
     </div> */}
    </div>
    <div className='md:flex justify-between md:gap-4'>
    
     <div className="form-control w-full">
       <label className="label">
         <span className="label-text">Rating</span>
       </label>
       <input type="text" placeholder="Rating" name='Rating' defaultValue={rating} className="input input-bordered w-full" required />
     
     </div>
    </div>
     <div className="form-control mt-3  ">
     <div className="form-control">
       <label className="label">
         <span className="label-text">PhotoURL</span>
       </label>
       <input type="text" placeholder="PhotoURL" name='pImg' defaultValue={img} className="input input-bordered" required />
     
     </div>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary">Update</button>
     </div>
   </form>
 </div>
</div>
</div>
         </div>
     </div>
    );
};

export default Update;