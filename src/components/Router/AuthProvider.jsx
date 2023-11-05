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
            const unsubcribe= onAuthStateChanged(auth,(user)=>{
                console.log('currentUser',user);
              setCurrentUser(user)
              setLoder(false)
            })
            return ()=>{
                unsubcribe ()
            }
        },[])
    
        const logOut = ()=>{
            return signOut(auth)
        }
        // --------------fatching Data cataogris--------------------
        useEffect(()=>{
           fetch('http://localhost:5000/catagory')
            .then(res=>res.json())
            .then(data=>setCataogris(data))
        },[])
const passingData = {
    userserRegistraton,
    singWithEmailAndPassword,
    user,
    loder,
    logOut,
    googleAthntocation,
    githubAthntocation,
    cataogris
}
    return (
       <MyContext.Provider value={passingData}>
        {children}
       </MyContext.Provider>
    );
};

export default AuthProvider;