
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loder from "../Loder/Loder";


const Book_catagoris = () => {
    const [catagory,setCataogris]=useState([])
    const [loder,setloder]=useState(true)
    useEffect(()=>{
        fetch('https://libary-mang-server.vercel.app/catagory')
         .then(res=>res.json())
         .then(data=>{
            setCataogris(data)
            setloder(false)
        })
     },[])
if(loder){
    return <Loder></Loder>
}
    return (
        <div className="w-[90%] lg:w-[80%] dark:text-white  mx-auto mt-[100px]">
            <div className="flex justify-center">
                <h1 className="md:text-4xl text-2xl font-extrabold ">Our 
                Books <span className="text-green-400">Categories</span></h1>
              
            </div>  <hr className="mt-9 border-4 border-l-pink-400 border-r-pink-400 border-green-400"/>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-[70px]">
                {
                    catagory?.map(data=>{
                        return(
                            <div key={data._id} className="dark:bg-[#070721]  p-5 border border-t-4 border-t-green-400 rounded-md flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-[200px]" src={data.img} alt=""  />
                                </div>
                                <div className="">
                                    <h1 className="text-2xl font-bold pb-4">{data.catagory}</h1>
                                <Link to={`/sameBook/${data.catagory}`}>
                                    <button className="btn w-full bg-green-400   text-white">See Books</button>
                                </Link>
                                </div>
                            </div>
                        )
                    })
                }
          </div>
        </div>
    );
};

export default Book_catagoris;