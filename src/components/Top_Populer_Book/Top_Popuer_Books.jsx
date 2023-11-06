
import Top_Populer_Cord from './Top_Populer_Cord';

const Top_Popuer_Books = () => {
    return (
        <div className='w-[80%] mx-auto mt-[120px]'>
             
             <div className="flex justify-center">
                <h1 className="text-4xl font-extrabold ">Top Popular  
                Books <span className="text-green-400">Books</span></h1>
              
            </div><hr className="mt-9 border-4 border-l-pink-400 border-r-pink-400 border-green-400"/>

            <div className='mt-[100px]'>
                <Top_Populer_Cord></Top_Populer_Cord>
            </div>
        </div>
    );
};

export default Top_Popuer_Books;