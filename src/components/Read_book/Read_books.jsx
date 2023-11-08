import { useLoaderData } from "react-router-dom";


const Read_books = () => {
    const data = useLoaderData()
   const {content,img,name}=data || {}
    return (
        <div className="w-[80%] mx-auto dark:text-white">
           <div>
                <img className="h-[400px] w-full" src={img} alt=""  />
           </div>
           <div className="">
            <h1 className="flex justify-center text-3xl font-extrabold mt-5">{name}</h1>
              <h1 className="text-justify mt-3">  {content} </h1>
           </div>
       
        </div>
    );
};

export default Read_books;