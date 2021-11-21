import firebase from "firebase/compat/app";
// import "firebase/auth";

// import firebase from "firebase";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCdGrVdDzF29O7SH7lSgjZKCuwOn3C4vSg",
  authDomain: "otp-autho-8c61a.firebaseapp.com",
  projectId: "otp-autho-8c61a",
  storageBucket: "otp-autho-8c61a.appspot.com",
  messagingSenderId: "518348052323",
  appId: "1:518348052323:web:0bf2ca5a35d693d929e556",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
