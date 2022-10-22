// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDeCQT8wDXYMGKDeMDI72zWpaNLINPHEJc",
	authDomain: "dharani-catering.firebaseapp.com",
	projectId: "dharani-catering",
	storageBucket: "dharani-catering.appspot.com",
	messagingSenderId: "1066565859767",
	appId: "1:1066565859767:web:f34ea80bf19a161b579032",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
