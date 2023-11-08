import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Catagory_R_details from "./Catagory_R_details";
import Loder from "../Loder/Loder";
import Footer from "../Footer/Fotter"


const Catagory_R_books = () => {
    const {catagory}=useParams()
    const [relativeBook,setRelativeBooks]=useState([])
    const [separateBooks,setSeparateBooks]=useState([])
    const [findeone,setFindeOne]=useState(null)
    const [lode,setLode]=useState(true)
    useEffect(()=>{
        axios.get('https://libary-mang-server.vercel.app/allbooks2')
        .then(res=>{
            setRelativeBooks(res.data)
          setLode(false)
        })
    },[])



useEffect(()=>{
       const filteringData = relativeBook?.filter(cat=>cat.catagory == catagory)
       setSeparateBooks(filteringData);
       setLode(false)
},[catagory,relativeBook])

useEffect(()=>{
       const find = relativeBook?.find(cat=>cat.catagory == catagory)
       setFindeOne(find?.catagory);
       setLode(false)
},[catagory,relativeBook])
    if(lode){
        return <Loder></Loder>
    }
   
return (
       <div>
        <div className="bg-green-300 h-[150px] text-5xl font-extrabold flex justify-center items-center">
                {findeone}
        </div>
             <div className="w-[80%] mx-auto mt-[60px] dark:text-white">
            
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    separateBooks?.map(item=><Catagory_R_details key={item._id} item={item}></Catagory_R_details>)
                }
           </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Catagory_R_books;