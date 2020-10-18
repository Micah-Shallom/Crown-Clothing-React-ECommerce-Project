import firebase from 'firebase/app';
import 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }else{
    return userRef;
  }
};

//Trying to pass my shopdata into firebase hence the need to create a collection/query reference on firestore first using the below function. This particular block of code is responsible for creating a collection reference,creating document keys for each looped array of data as well as setting each document reference to its corresponding object. Its a very smart piece of code.
export const addCollectionAndDocuments = async (collectionKey , objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    
    batch.set(newDocRef , obj);
  });

  return await batch.commit();
};

export const convertCollectionsToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title , items} = doc.data();

    return {
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    };
  })
  return transformedCollection.reduce((accumilator,collection) => {
    accumilator[collection.title.toLowerCase()] = collection
    return accumilator
  },{})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;