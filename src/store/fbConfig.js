import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBtfa0_Y_dQRODBj5TfGyOQUYD07CwR6bo",
    authDomain: "ninja-test-3ef68.firebaseapp.com",
    projectId: "ninja-test-3ef68",
    storageBucket: "ninja-test-3ef68.appspot.com",
    messagingSenderId: "985797094954",
    appId: "1:985797094954:web:f94f5f87cee72c2968dd53"
  };


  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;