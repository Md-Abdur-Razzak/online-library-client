import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

export const MyContext = createContext(null)
const AuthProvider = ({children}) => {
    const userserRegistraton = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singWithEmailAndPassword = (email,password)=>{
       
        return signInWithEmailAndPassword(auth,email,password)
    }
const passingData = {
    userserRegistraton,
    singWithEmailAndPassword
}
    return (
       <MyContext.Provider value={passingData}>
        {children}
       </MyContext.Provider>
    );
};

export default AuthProvider;