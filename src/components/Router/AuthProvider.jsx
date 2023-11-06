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
                console.log('currentUser',users);
                const tokenEmail = users?.email || user?.email
                const email = {tokenEmail}
              setCurrentUser(users)
              if (users) {
                axios.post(`http://localhost:5000/jwt`,email,{withCredentials:true})
                .then(res=>console.log(res.data))
              }
             else{
                      axios.post(`http://localhost:5000/clearCoki`,email,{withCredentials:true})
                 .then(res=>console.log(res.data))
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