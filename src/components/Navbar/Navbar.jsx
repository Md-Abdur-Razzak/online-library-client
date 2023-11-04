import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo (4).png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 dark:text-white sticky inset-0 z-10  rounded-none border  bg-opacity-30  text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
    
      
        <div className="navbar-start ">
        <div className="dropdown md:px-12">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >Home</NavLink>
            <NavLink
            to={"/addbook"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""}
            >Add Book</NavLink>
         
            
            <NavLink
            to={"/allbooks"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >All Books</NavLink>
            <NavLink
            to={"/bbooks"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >Borrowed Books</NavLink>
             <NavLink
            to={"/registration"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >Registration</NavLink>

          </ul>
        </div>
            <div className='md:flex flex-col justify-center items-center'>
                <img className="w-[100px]"  src={logo} />
                <h1 className='text-2xl font-extrabold max-[426px]:text-sm'>LibraWiseReads</h1>
            </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-xl font-bold flex items-center gap-5 px-1">
        <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >Home</NavLink>
            <NavLink
            to={"/addbook"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""}
            >Add Book</NavLink>
            <NavLink
    
            to={"/allbooks"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >All Books</NavLink>
            <NavLink
            to={"/bbooks"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >Borrowed Books</NavLink>
             <NavLink
            to={"/registration"}
            className={({ isActive, isPending }) =>
            isActive
            ? " text-white bg-green-700 btn"
            : isPending
            ? "pending"
            : ""
            }
            >Registration</NavLink>
          
        </ul>
      </div>
      <div className="navbar-end md:px-12">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            
               <img className='w-14 border border-blue-400  rounded-full' src={'https://i.ibb.co/VDMnSyz/iconlog.jpg'} alt="" />
            
         
            </div>
           
        
        </label>
          <Link to={'/login'}>
          <button className='btn bg-green-700 text-white'>
            login
           </button> 
            </Link>        
          
        </div>
        
           
         
         
    
      </div>
    );
};

export default Navbar;