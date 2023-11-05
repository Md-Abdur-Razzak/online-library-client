import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Catagory_R_details from "./Catagory_R_details";


const Catagory_R_books = () => {
    const {catagory}=useParams()
    const [relativeBook,setRelativeBooks]=useState([])
    const [separateBooks,setSeparateBooks]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/allbooks')
        .then(res=>setRelativeBooks(res.data))
    },[])
    useEffect(()=>{
       const filteringData = relativeBook?.filter(cat=>cat.catagory == catagory)
       setSeparateBooks(filteringData);
    },[catagory,relativeBook])

    return (
        <div>
           <div>
                {
                    separateBooks?.map(item=><Catagory_R_details item={item}></Catagory_R_details>)
                }
           </div>
        </div>
    );
};

export default Catagory_R_books;