// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5ic_EBO8Wll52xtlWnN-QdUicQSO_1CM",
    authDomain: "todo-3178c.firebaseapp.com",
    projectId: "todo-3178c",
    storageBucket: "todo-3178c.appspot.com",
    messagingSenderId: "67462860135",
    appId: "1:67462860135:web:01badb6afb05ee509773c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

getCities(db);