import icon from "../../assets/logo (4).png"
const Fotter = () => {
    return (
       <div className='mt-[100px] bg-green-400 lg:h-[400px] md:h-[900px] '>
            
            <div className='md:flex md:justify-between flex-wrap  w-[80%] bg-red pt-[100px] mx-auto text-white'>
                <div className='md:w-[300px] flex flex-col justify-center items-center gap-3 '>
                    <img className='w-9' src={icon} alt="" />
                    <p className='text-justify'>
                    A library is a repository of knowledge, a place where information and wisdom are preserved, organized, and made accessible to the public. It serves as a sanctuary for learning and intellectual exploration</p>
                    <div className='flex gap-2 text-3xl font-bold'>
                        <h1> <i className="fa-brands fa-facebook" ></i> </h1>
                        <h1><i className="fa-brands fa-twitter"></i> </h1>
                       
                    </div>
                </div>
                <div className=''>
                    <h1 className='pt-4 text-2xl'>Resources</h1>
                  <div className='pt-4 '>
                    <h1 className=''>Add Product</h1>
                    <h1  className='mt-2'>Brads</h1>
                    <h1  className='mt-2'>Contact</h1>
                    <h1 className='mt-2'>To salers Product</h1>
                  </div>
                </div>
                <div>
                    <h1 className=' pt-4 text-2xl'>Populer Books</h1>
                    <h1  className='mt-2'>The Rainbow Fish</h1>
                    <h1  className='mt-2'>Coaching Hockey for Dummies</h1>
                    <h1  className='mt-2'>Salt in His Shoes</h1>
                    <h1  className='mt-2'>The Art of Winning an Unfair Game</h1>
                    <h1  className='mt-2'>Skinnytaste Simple</h1>
                </div>
                
               
            </div>
            <hr className='' />
            <div className='flex justify-center text-[#918987] mt-3 md:text-xl'>
                Copyright © 2023 LibraWiseReads. All Rights Reserved.
            </div>
       </div>
    );
};

export default Fotter;