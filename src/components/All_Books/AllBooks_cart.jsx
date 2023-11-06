import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const AllBooks_cart = ({item}) => {
    const {_id,img,name,quantity,Aname,catagory,des,rating}=item
    return (
        <div className="  rounded-md border border-t-4 border-green-400">
            <div>
                <img className="h-[200px] w-[300px]" src={img} alt="" />
            </div>
            <div className="text-xl font-bold  flex flex-col ">
                <h1 className="p-3 bg-green-300 text-center" >{catagory}</h1>
                <div  className="pl-2">
                    <h1>{name}</h1>  
                    <div>
                    <h1>{Aname}</h1>
                
                    <h1>{quantity}</h1>
                    </div>
                    <div className="w-[150px] flex items-center gap-4">
                        <Rating readOnly value={rating}></Rating>
                        <h1>{rating}</h1>
                    </div>  
                </div>
           
                <Link to={`/update/${_id}`}>
                    <button className="btn w-full bg-green-400 text-white">update</button>
                </Link>
               
            </div>

        </div>
    );
};

export default AllBooks_cart;