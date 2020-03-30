var app_firebase = {};
(function(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDupjZc3vPcc7bDdS7yzpgCLgmxDIV05hU",
        authDomain: "cscanonapp.firebaseapp.com",
        databaseURL: "https://cscanonapp.firebaseio.com",
        projectId: "cscanonapp",
        storageBucket: "cscanonapp.appspot.com",
        messagingSenderId: "236634907399",
        appId: "1:236634907399:web:00868cfb827c102b129ba2",
        measurementId: "G-RKN05T5772"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  app_firebase = firebase;
})()