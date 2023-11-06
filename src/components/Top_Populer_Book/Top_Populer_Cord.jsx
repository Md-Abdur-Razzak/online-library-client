import { Rating } from '@smastrom/react-rating';


const Top_Populer_Cord = ({item}) => {
    const {bookName,auth,img,rating}=item
    return (
        <div className="  rounded-md border border-t-4 border-green-400">
        <div>
            <img className="h-[200px] w-full" src={img}alt="" />
        </div>
        <div className=" pt-3 font-bold  flex flex-col ">
  
            <div  className="pl-2">
                <h1>{bookName}</h1>  
                <div>
                <h1>By {auth}</h1>
            
                </div>
                <div className="w-[150px]  flex items-center gap-4">
                    <Rating readOnly value={rating}></Rating>
                    <h1>{rating}</h1>
                </div>  
            </div>
       
          
            <button className="btn w-full mt-3 bg-green-400 text-white">
                see Book
            </button>
        
           
        </div>

    </div>
    );
};

export default Top_Populer_Cord;