import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../Router/AuthProvider";
import google from "../../assets/g-removebg-preview.png"
import github from "../../assets/GitHub-Mark-removebg-preview.png"


const Google_github = () => {
    const {googleAthntocation,githubAthntocation}=useContext(MyContext)
    const location1 = useLocation()
    const navigate = useNavigate()
    const HandelGogole = ()=>{
        googleAthntocation()
        .then((res)=>{
            navigate(location1?.state? location1.state :"/")
        })
    }
    const HandelGithab = ()=>{
        githubAthntocation()
        .then((res)=>{
            navigate(location1?.state? location1.state :"/")
        })
    }
    
    return (
        <div className=''>
        <div className='flex justify-center gap-2 items-center'>
            <h1 className='h-1 w-[100%] bg-blue-400'></h1>
           <h1>OR</h1>
           <h1 className='h-1 w-[100%] bg-blue-400'></h1>
           
        </div>
      <div className='flex gap-2 justify-center mb-3 mt-2'>
      <div className='w-[60px]   border-blue-400' onClick={HandelGogole}>
            <img className='rounded-full border' src={google} alt="" />
        </div>
        <div  className='w-[60px] border-blue-400' onClick={HandelGithab}>
            <img className='rounded-full border' src={github} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Google_github;