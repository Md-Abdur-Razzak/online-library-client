import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.config";


const AllBooks_cart = ({item}) => {
    const {_id,img,name,quantity,Aname,catagory,des,rating}=item
    return (
        <div className="rounded-md border border-t-4 border-green-400">
           <div>
            <img className="h-[200px] w-full" src={img} alt=""  />
            <div>
            </div>
               <div className="p-2 mt-3">
               <span className="p-2 bg-green-400 rounded-md "> {catagory}</span>
                <h2 className="mt-2">{name}</h2>
                <h2>By {Aname}</h2>
                <h2> Quantity : {quantity}</h2>
                <div className="flex gap-2">
                    <Rating className="w-[70px]" readOnly value={rating}></Rating>
                    <h2>{rating}</h2>
                </div>
               </div>
           </div>

                <Link to={`/update/${_id}` }>
                    <button className="btn w-full bg-green-400 text-white flex-1">update</button>
                </Link>
        </div>
    );
};

export default AllBooks_cart;