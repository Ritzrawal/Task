import firebase from 'firebase/app';
import 'firebase/storage';
//initilizing the firebase
  var config = {
    apiKey: "AIzaSyAwWVCfmhMYoMxm-2l8UaZPp0kq5hzHlK4",
    authDomain: "codechallange-9470d.firebaseapp.com",
    databaseURL: "https://codechallange-9470d.firebaseio.com",
    projectId: "codechallange-9470d",
    storageBucket: "codechallange-9470d.appspot.com",
    messagingSenderId: "354379975620"
  };
  firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}
