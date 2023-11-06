
import { useEffect, useState } from 'react';
import Top_Populer_Cord from './Top_Populer_Cord';
import axios from 'axios';

const Top_Popuer_Books = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/topBook")
        .then(res=>setBooks(res.data))
    },[])
    console.log(books);
    return (
        <div className='w-[80%] mx-auto mt-[120px]'>
             
             <div className="flex justify-center">
                <h1 className="text-4xl font-extrabold ">Top Popular  
                Books <span className="text-green-400">Books</span></h1>
              
            </div><hr className="mt-9 border-4 border-l-pink-400 border-r-pink-400 border-green-400"/>

            <div className='mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    books?.map(item=><Top_Populer_Cord key={item._id} item={item}></Top_Populer_Cord>)
                }
               
            </div>
        </div>
    );
};

export default Top_Popuer_Books;