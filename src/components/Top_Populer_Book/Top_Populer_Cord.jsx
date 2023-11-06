import { Rating } from '@smastrom/react-rating';


const Top_Populer_Cord = () => {
    return (
        <div className="  rounded-md border border-t-4 border-green-400">
        <div>
            <img className="h-[200px] w-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k5RpMN80rL5c2wjUsz-YLUxYAST4G4vVvg&usqp=CAU" alt="" />
        </div>
        <div className="text-xl font-bold  flex flex-col ">
  
            <div  className="pl-2">
                <h1>{'Children'}</h1>  
                <div>
                <h1>{"raju"}</h1>
            
                </div>
                <div className="w-[150px] flex items-center gap-4">
                    <Rating readOnly value={5}></Rating>
                    <h1>{5}</h1>
                </div>  
            </div>
       
          
            <button className="btn w-full bg-green-400 text-white">
                see Book
            </button>
        
           
        </div>

    </div>
    );
};

export default Top_Populer_Cord;