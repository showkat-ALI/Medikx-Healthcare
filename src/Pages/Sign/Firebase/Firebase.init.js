import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const firebaseInitialaizer= ()=>{
    return initializeApp(firebaseConfig);
}
export default firebaseInitialaizer;