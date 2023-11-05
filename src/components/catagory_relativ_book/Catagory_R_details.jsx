import { Link } from "react-router-dom";


const Catagory_R_details = ({item}) => {

    const {img,name,quantity,Aname,catagory,des,rating,_id}=item
    return (
        <div className="p-3 w-[250px] rounded-md border border-t-4 border-green-400">
            <div>
                <img className="h-[200px] w-[300px]" src={img} alt="" />
            </div>
            <div className="text-xl font-bold  flex flex-col">
                <h1>{name}</h1>
                <div>
                <h1>{Aname}</h1>
                <h1>{catagory}</h1>
                </div>
                <h1>{rating}</h1>
                <Link to={`/details/${_id}`}>
                    <button className="btn bg-green-400 text-white">Details</button>
                </Link>
                
            </div>

        </div>
    );
};

export default Catagory_R_details;