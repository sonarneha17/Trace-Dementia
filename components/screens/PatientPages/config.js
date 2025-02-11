
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCcV87j7YZ3eNRxZVUOfuHXKas-cS8XKf8",
    authDomain: "reactnativefirebase-df48b.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
    projectId: "reactnativefirebase-df48b",
    storageBucket: "reactnativefirebase-df48b.appspot.com",
    messagingSenderId: "89986147282",
    appId: "1:89986147282:web:be2cf9819cead492779e0b",
    measurementId: "G-MD2CGYRVZ4"
};


const app = initializeApp(firebaseConfig);    
        
//initialize firestore
export const db = getFirestore(app);