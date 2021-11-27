import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
const firebaseInitapp=()=>{
    initializeApp(firebaseConfig)
}
export default firebaseInitapp;