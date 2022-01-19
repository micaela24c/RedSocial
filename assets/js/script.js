
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDOU_2PB7bBegaKcc9RrILiDiiV4KpoO7I",
    authDomain: "hoycomien-575d7.firebaseapp.com",
    projectId: "hoycomien-575d7",
    storageBucket: "hoycomien-575d7.appspot.com",
    messagingSenderId: "146790859369",
    appId: "1:146790859369:web:b985329bb4386fdd7458f8",
    measurementId: "G-LGHHC1ZN6F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
