
import AllBooks_cart from "./AllBooks_cart";
import { useContext, useEffect, useState } from "react";

import Loder from "../Loder/Loder";

import useAxios from "../useAxios/useAxios";
import Footer from "../Footer/Fotter"





const All_Books = () => {
 
 
    const [allBooks,setAllbooks]=useState([])
    const [lode,setLode]=useState(true)
    const creatAxious = useAxios()
    useEffect(()=>{
        creatAxious.get(`/allbooks`)
        .then(res=>{
            setAllbooks(res.data)
            setLode(false)

        })
},[creatAxious])
if (lode ) {
    return <Loder></Loder>
}
   const handelFiltering = ()=>{
        const quantityFiltering = allBooks?.filter(data=>data.quantity>0)
        setAllbooks(quantityFiltering)
        
   }

    return (
        <div>
            <div className="w-[80%] dark:text-white mx-auto mt-[100px]">
            <div className="flex items-center gap-4">
               
                <button onClick={handelFiltering} className="btn bg-green-400 text-white">
                <i className="fa-solid fa-filter text-pink-500" ></i>
                available  books
                </button>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
            {
                allBooks?.map(item=><AllBooks_cart key={item._id} item={item}></AllBooks_cart>)
            }
          </div>
     
        </div>
        <Footer></Footer>
        </div>
    );
};

export default All_Books;