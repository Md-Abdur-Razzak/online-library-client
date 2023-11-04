import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const MyContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setCurrentUser]=useState(null)
    const [loder,setLoder]=useState(true)
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
const passingData = {
    userserRegistraton,
    singWithEmailAndPassword,
    user,
    loder,
    logOut,
    googleAthntocation,
    githubAthntocation
}
    return (
       <MyContext.Provider value={passingData}>
        {children}
       </MyContext.Provider>
    );
};

export default AuthProvider;