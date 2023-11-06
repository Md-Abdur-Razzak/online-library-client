import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const MyContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setCurrentUser]=useState(null)
    const [loder,setLoder]=useState(true)
    const [cataogris,setCataogris]=useState([])
    const userserRegistraton = (email,password)=>{
        setLoder(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singWithEmailAndPassword = (email,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
        
     const googleAthntocation = () =>
     {
                setLoder(true)
                const provider = new GoogleAuthProvider()
                return signInWithPopup(auth,provider)
    }
       
    const githubAthntocation = () =>
    {
                setLoder(true)
                const provider = new GithubAuthProvider()
                return signInWithPopup(auth,provider)
    }
    useEffect (()=>{
            const unsubcribe= onAuthStateChanged(auth,(users)=>{
               
                const tokenEmail = users?.email || user?.email
                const email = {tokenEmail}
              setCurrentUser(users)
              if (users) {
                axios.post(`http://localhost:5000/jwt`,email,{withCredentials:true})
                .then(res=>console.log())
              }
             else{
                      axios.post(`http://localhost:5000/clearCoki`,email,{withCredentials:true})
                 .then(res=>console.log())
             }
              setLoder(false)
            })
            return ()=>{
                unsubcribe ()
            }
        },[user?.email])
    
        const logOut = ()=>{
            return signOut(auth)
        }
        // --------------fatching Data cataogris--------------------
      
const passingData = {
    userserRegistraton,
    singWithEmailAndPassword,
    user,
    loder,
    logOut,
    googleAthntocation,
    githubAthntocation,
   
}
    return (
       <MyContext.Provider value={passingData}>
        {children}
       </MyContext.Provider>
    );
};

export default AuthProvider;