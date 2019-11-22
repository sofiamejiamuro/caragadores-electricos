import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCvlezkz9TUlYvBmtABFVxecmnYEXVpB9o",
    authDomain: "cargadores-electricos.firebaseapp.com",
    databaseURL: "https://cargadores-electricos.firebaseio.com",
    projectId: "cargadores-electricos",
    storageBucket: "cargadores-electricos.appspot.com",
    messagingSenderId: "1051525415252",
    appId: "1:1051525415252:web:dac6a338f060e68b42c8c1",
    measurementId: "G-3HNXJVNSS3"
  };

  class Firebase {
      construcctor () {
          app.initializeApp(firebaseConfig);
      }
  }

  export default Firebase;