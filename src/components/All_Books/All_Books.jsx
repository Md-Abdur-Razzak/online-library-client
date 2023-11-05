import { useLoaderData } from "react-router-dom";
import AllBooks_cart from "./AllBooks_cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Loder from "../Loder/Loder";


const All_Books = () => {
 
    const [allBooks,setAllbooks]=useState([])
    const [lode,setLode]=useState(true)
    useEffect(()=>{
        axios.get(`http://localhost:5000/allbooks`)
        .then(res=>{
            setAllbooks(res.data)
            setLode(false)

        })
},[])
if (lode) {
    return <Loder></Loder>
}
   const handelFiltering = ()=>{
        const quantityFiltering = allBooks?.filter(data=>data.quantity>0)
        setAllbooks(quantityFiltering)
        
   }

    return (
        <div className="w-[80%] mx-auto mt-[100px]">
            <div>
                
                <button onClick={handelFiltering} className="btn bg-green-400 text-white">
                available quantity books
                </button>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
            {
                allBooks?.map(item=><AllBooks_cart key={item._id} item={item}></AllBooks_cart>)
            }
          </div>
        </div>
    );
};

export default All_Books;