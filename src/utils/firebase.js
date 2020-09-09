import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEfsuI1jZLMSBKVG0KiMLEwo8LXkEdYCA",
  authDomain: "talent2020ci-t-wocan.firebaseapp.com",
  databaseURL: "https://talent2020ci-t-wocan.firebaseio.com",
  projectId: "talent2020ci-t-wocan",
  storageBucket: "talent2020ci-t-wocan.appspot.com",
  messagingSenderId: "185005441684",
  appId: "1:185005441684:web:006d913e9d242d4d772a81",
  measurementId: "G-3L1X8PJP7R",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
