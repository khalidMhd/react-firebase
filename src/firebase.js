import firebase from "firebase";
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxrei09KEV5K6aK6O82nHDbiEdUEXUiEs",
    authDomain: "react-crud-93736.firebaseapp.com",
    databaseURL: "https://react-crud-93736-default-rtdb.firebaseio.com",
    projectId: "react-crud-93736",
    storageBucket: "react-crud-93736.appspot.com",
    messagingSenderId: "517973365080",
    appId: "1:517973365080:web:9a49f69bf4b55b4286552d"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();