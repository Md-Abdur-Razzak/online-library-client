import { useLoaderData } from "react-router-dom";
import AllBooks_cart from "./AllBooks_cart";
import { useEffect, useState } from "react";


const All_Books = () => {
    const allBooksdata = useLoaderData()
    const [allBooks,setAllbooks]=useState(allBooksdata)
   const handelFiltering = ()=>{
        const quantityFiltering = allBooksdata?.filter(data=>data.quantity>0)
        setAllbooks(quantityFiltering)
        
   }

    return (
        <div className="w-[80%] mx-auto mt-[100px]">
            <div>
                <button onClick={handelFiltering} className="btn bg-green-400 text-white">
                    filter quantity
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