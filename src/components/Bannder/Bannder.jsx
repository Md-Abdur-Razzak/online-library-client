import banner from '../../assets/bannder-removebg-preview.png'

const Bannder = () => {
    return (
        <div className='banner bg-[#bfedde] mt-3 lg:h-[650px] '>
        <div className=''>
        <div className='lg:flex  md:justify-evenly lg:items-center  '>
             <div className=' lg:w-[40%] p-4  w-[90%] mx-auto mt-4'>
                 <h1 className='font-extrabold md:text-6xl text-4xl py-7 lg:text-left text-center space-y-9'>Welcome to the <span className='text-blue-500'>online</span> <span  className='text-green-500'>Library </span></h1>
                 <p className='text-justify text-2xl pb-12 py-6 font-bold'>
                    Master Your Library
                    Efficient Management, Boundless Knowledge
                    Elevate Your Library Experience
                </p>
                  <div className='flex md:justify-start justify-center'>
                     <button className='btn bg-green-500 text-white'>Expolore Now</button> 
                 </div>             
             </div>
             <div  className='mt-[33px]'>
                 <img className='xl:h-[500px] lg:h-[400px]' src={banner}alt="" />
             </div>
             
        </div>
        </div>
      
     </div>
    );
};

export default Bannder;