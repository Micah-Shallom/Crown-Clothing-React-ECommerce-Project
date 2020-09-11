import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDiYtuc1cYeDzhArd4OhofOVwbBTj11XZg",
  authDomain: "crown-db-2b533.firebaseapp.com",
  databaseURL: "https://crown-db-2b533.firebaseio.com",
  projectId: "crown-db-2b533",
  storageBucket: "crown-db-2b533.appspot.com",
  messagingSenderId: "9297113033",
  appId: "1:9297113033:web:55f147b4ee843e42a00218",
  measurementId: "G-604LF5SYRF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;