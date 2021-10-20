import  { useState,useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";

import firebaseInitialaizer from '../Pages/Sign/Firebase/Firebase.init';

firebaseInitialaizer()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


const useFirebase = () => {
    const[user,setUser]=useState({})
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    const[name,setName]= useState("")
    const[err,setErr]=useState("")
    const[loading,setLoading]=useState(true)
    const signinWithgoogle = ()=>{

        return signInWithPopup(auth, googleProvider)
        .finally(()=>setLoading(false))
        .catch(error=>setErr(error.message))

    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (loggeduser) => {
            if (loggeduser) {
              setUser(loggeduser)
            }
            else{
                setUser({})
            }
            setLoading(false)
        })
        return ()=>unsubscribe 
    },[])
// sign in with email
const signinwithEmail = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(res => setUser(res.user))
    .catch(error => setErr(error.message))

}
// get email
const getEmail = (e)=>{
    setEmail(e?.target?.value)

}
// get password
const getPassword = (e)=>{
    setPassword(e?.target?.value)

}
// get name
const getName = (e)=>{
    setName(e?.target?.value)

}

// sign up
const signupWithEmail= (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        updateUserProfile()
        alert("user created please log in")
    })
    .catch(error=>{
        setErr(error.message)
    })


}
// update user profile
const updateUserProfile = ()=>{
    updateProfile(auth.currentUser, {
        displayName:name 
      }).then(() => {
      
      }).catch((error) => {
        setErr(error.message)
      });
}
// log out
const logOut = ()=>{
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
          setErr(error.message)
      });
}
return {
    getName,
    signupWithEmail,
    getEmail,
    getPassword,
    signinwithEmail,
    logOut,
    signinWithgoogle,
    user,
    err,
    loading
}
}

export default useFirebase;