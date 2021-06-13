import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDpnvdZIn19UQa7eO1iO1YcC_PgOk9P1BU',
    authDomain: 'crwn-db-cf3fb.firebaseapp.com',
    projectId: 'crwn-db-cf3fb',
    storageBucket: 'crwn-db-cf3fb.appspot.com',
    messagingSenderId: '526309690695',
    appId: '1:526309690695:web:9cdef851b82dd1a75f9062',
    measurementId: 'G-J2YEP1D8M0',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;