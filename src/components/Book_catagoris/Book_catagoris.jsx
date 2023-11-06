import { useContext } from "react";
import { MyContext } from "../Router/AuthProvider";
import { Link } from "react-router-dom";


const Book_catagoris = () => {
    const {cataogris}=useContext(MyContext)

    return (
        <div className="lg:w-[80%] mx-auto mt-[100px]">
            <div className="flex justify-center">
                <h1 className="text-4xl font-extrabold ">Our 
                Books <span className="text-green-400">Categories</span></h1>
              
            </div>  <hr className="mt-9 border-4 border-l-pink-400 border-r-pink-400 border-green-400"/>
          <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mt-[70px]">
                {
                    cataogris?.map(data=>{
                        return(
                            <div key={data._id} className="w-[250px] p-5 border border-t-4 border-t-green-400 rounded-md flex flex-col">
                                <div>
                                    <img className="h-[200px]" src={data.img} alt=""  />
                                </div>
                                <div className="">
                                    <h1 className="text-2xl font-bold pb-4">{data.catagory}</h1>
                                <Link to={`/sameBook/${data.catagory}`}>
                                    <button className="btn w-full bg-green-400 text-white">See Books</button>
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