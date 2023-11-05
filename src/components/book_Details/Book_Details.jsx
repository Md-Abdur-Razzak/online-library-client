import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const Book_Details = () => {
    const singleData = useLoaderData()
    const {img,name,quantity,Aname,catagory,des,rating,_id}=singleData || {}
    return (
        <div className='mt-[100px]'>
          <div className='lg:w-[90%] md:w-[90%] w-[99%] md:p-0 p-9  mx-auto justify-evenly  md:flex md:gap-20'>
            <div><img className='h-[350px] md:w-[500px] rounded-md w-[100%]' src={img} alt="" /></div>
            <div className='space-y-4'>
           <div className='flex gap-2 text-2xl md:mt-0 mt-9 text-white  font-bold items-center '>
            <h2 className="p-2 md:px-5 bg-[#0d0d3f] rounded-full">{catagory}</h2>
            <p className='p-2 md:px-5 bg-[hotpink] rounded-full'>{Aname}</p>
           </div>

            <h2 className="text-3xl font-bold">{name}</h2>
    
            <h2 className="text-3xl font-bold">{quantity}</h2>
           
            <div className='md:w-[400px] w-[95%] justify-center'>
            <p className='text-xl text-justify '>{des}</p>
            </div> 
            
            <div className="rating flex items-center">
           <Rating readOnly style={{maxWidth:'120px'}} value={`${rating}`}/>
            <h1 className='text-3xl font-bold ml-2'>{rating}</h1>
          </div>
      
        <button className='btn bg-blue-500 text-white'>Read</button>
        <button className='btn bg-blue-500 text-white'>Borrow</button>
            </div>
          </div>
        </div>
    );
};

export default Book_Details;