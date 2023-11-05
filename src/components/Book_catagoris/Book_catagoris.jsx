import { useContext } from "react";
import { MyContext } from "../Router/AuthProvider";


const Book_catagoris = () => {
    const {cataogris}=useContext(MyContext)
    console.log(cataogris);
    return (
        <div className="lg:w-[80%] mx-auto mt-[100px]">
          <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2">
                {
                    cataogris?.map(data=>{
                        return(
                            <div key={data._id} className="w-[250px] p-5 border border-t-4 border-t-green-400 rounded-md">
                                <div>
                                    <img className="h-[200px]" src={data.img} alt=""  />
                                </div>
                                <div className="flex flex-col">
                                    <h1>{data.catagory}</h1>
                                    <button className="btn bg-green-400 text-white">See Books</button>
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