import { useEffect, useState } from "react";
import firebaseInitapp from "../firebase/firebaseinit";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut ,
     onAuthStateChanged} from "firebase/auth";



firebaseInitapp();
const useFirebase=()=>{
    const [user, setUser] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const singIngoogle=async()=>{
        try{
            setisLoading(true)
            const res= await signInWithPopup(auth, googleProvider)
           return res
        }catch(err){
                setUser(null)
        }
       
    }



    
    useEffect(() => {
       const unsubcribe= onAuthStateChanged(auth, (user) => {
           setisLoading(true)
            if (user) {
             setUser(user)
              
            } else {
             setUser(null)
            }
            setisLoading(false)
          });
          return ()=> unsubcribe
    }, [])

    const logout=async()=>{
        try{
            setisLoading(true)
            const res= await signOut(auth)
            setUser(null)
            setisLoading(false)
        }catch(err){

        }
    }

    return{singIngoogle,user,logout,isLoading ,setUser,setisLoading}
}
export default useFirebase;