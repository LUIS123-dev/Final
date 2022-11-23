import { initializeApp } from "firebase/app";

let btnLogin = document.getElementById ('btnLogin');
let inpurEmail = document.getElementById ('inputEmail');
let inputPassword = document.getElementById ('inputPassword');



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIygPdvNfHrQOWEAxrrXePn2ey9UYCG5g",
    authDomain: "login-f90fb.firebaseapp.com",
    projectId: "login-f90fb",
    storageBucket: "login-f90fb.appspot.com",
    messagingSenderId: "563923538964",
    appId: "1:563923538964:web:1d74663c8791abad274301"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);












btnLogin.addEventListener('click', function(){
    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function(result){
        alert("Usuário Conectado!");


        console.log("Sucess!")

    })
});