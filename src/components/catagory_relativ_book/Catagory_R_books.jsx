import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Catagory_R_details from "./Catagory_R_details";
import Loder from "../Loder/Loder";


const Catagory_R_books = () => {
    const {catagory}=useParams()
    const [relativeBook,setRelativeBooks]=useState([])
    const [separateBooks,setSeparateBooks]=useState([])
    const [lode,setLode]=useState(true)
    useEffect(()=>{
        axios.get('http://localhost:5000/allbooks2')
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
    if(lode){
        return <Loder></Loder>
    }
return (
        <div className="w-[80%] mx-auto mt-[100px]">
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {
                    separateBooks?.map(item=><Catagory_R_details key={item._id} item={item}></Catagory_R_details>)
                }
           </div>
        </div>
    );
};

export default Catagory_R_books;