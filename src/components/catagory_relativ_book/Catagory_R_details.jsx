import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const Catagory_R_details = ({item}) => {

    const {img,name,quantity,Aname,catagory,des,rating,_id}=item
    return (
        <div className=" rounded-lg border border-t-4 border-green-400">
            <div>
                <img className="h-[200px] w-[300px]" src={img} alt="" />
            </div>
            <div className="text-xl font-bold  flex flex-col">  
             
                <div className="p-2">
                <h1 className="p-1 bg-green-200 rounded-lg text-center w-[100px]">{catagory}</h1>
                <h1>{name}</h1>
                <h1>{Aname}</h1>
                <div className="flex items-center gap-4">
                    <Rating className="w-[120px]" readOnly value={rating}></Rating>
                    <h1>{rating}</h1>
                </div>
                </div>
                
                <Link to={`/details/${_id}`}>
                    <button className="btn w-full bg-green-400 text-white">Details</button>
                </Link>
                
            </div>

        </div>
    );
};

export default Catagory_R_details;