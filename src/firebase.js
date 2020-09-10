import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyABvwln5lbHI9mlUzfw2Nxxs3HnIZQaXuA",
  authDomain: "chalenge-29f90.firebaseapp.com",
  databaseURL: "https://chalenge-29f90.firebaseio.com",
  projectId: "chalenge-29f90",
  storageBucket: "chalenge-29f90.appspot.com",
  messagingSenderId: "303236910915",
  appId: "1:303236910915:web:366e4dc24245f6e289a9f6",
  measurementId: "G-LMHQTXBL4M"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCTubXn10JlJ3FWiUyXqvNussL4A1YYFOQ",
//   authDomain: "clone-53190.firebaseapp.com",
//   databaseURL: "https://clone-53190.firebaseio.com",
//   projectId: "clone-53190",
//   storageBucket: "clone-53190.appspot.com",
//   messagingSenderId: "856096592065",
//   appId: "1:856096592065:web:85fdb11a397aa852acc440",
//   measurementId: "G-NHF9VKC8HH"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};