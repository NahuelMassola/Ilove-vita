import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzETUA15MBrBPsOZbYN3i_tdm2Q4wBNhA",
  authDomain: "i-love-vita.firebaseapp.com",
  projectId: "i-love-vita",
  storageBucket: "i-love-vita.appspot.com",
  messagingSenderId: "330191713304",
  appId: "1:330191713304:web:600f1d7dac84928428ff6d",
  measurementId: "G-PDSVWJMF3X"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


