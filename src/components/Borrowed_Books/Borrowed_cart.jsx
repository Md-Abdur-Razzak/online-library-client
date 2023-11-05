

const Borrowed_cart = ({item}) => {
    const {img,name,catagory,borrowDate,returnDate}=item
    
    return (
        <div>
            <div className="p-3 w-[250px] rounded-md border border-t-4 border-green-400">
            <div>
                <img className="h-[200px] w-[300px]" src={img} alt="" />
            </div>
            <div className="text-xl font-bold  flex flex-col">
                <h1>{name}</h1>
               <h1>{catagory}</h1>
             
               <h1>{borrowDate}</h1>
               <h1>{returnDate}</h1>
                <button className="btn bg-green-400 text-white">Return</button>
             
                
            </div>

        </div>
        </div>
    );
};

export default Borrowed_cart;