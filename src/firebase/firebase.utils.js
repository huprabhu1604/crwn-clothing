import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVGyyhMpsMZDyU2RiPVb0-p_VFBkAjayw",
    authDomain: "crwn-db-fd2bf.firebaseapp.com",
    projectId: "crwn-db-fd2bf",
    storageBucket: "crwn-db-fd2bf.appspot.com",
    messagingSenderId: "833128123460",
    appId: "1:833128123460:web:8d0212612885291015c011",
    measurementId: "G-M533V3XGLD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error Created", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;