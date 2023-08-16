importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebaseConfig.initializeApp({
    apiKey: "AIzaSyDoweugobnMC23GZ0GASvTdYMTU8lARm1g",
    authDomain: "pushnotifweb-ca575.firebaseapp.com",
    projectId: "pushnotifweb-ca575",
    storageBucket: "pushnotifweb-ca575.appspot.com",
    messagingSenderId: "655766889663",
    appId: "1:655766889663:web:0fb3fb7d1cbd0f0a91520a",
    measurementId: "G-RR1NCM2NGQ",
   });

   const messaging = firebaseConfig.messaging(); 