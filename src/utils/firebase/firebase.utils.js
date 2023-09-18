import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAMgMvn6SlZi8JZr4PhpSPtrS2q2AtM-uQ",
    authDomain: "crwon-clothing-db-cf322.firebaseapp.com",
    projectId: "crwon-clothing-db-cf322",
    storageBucket: "crwon-clothing-db-cf322.appspot.com",
    messagingSenderId: "862047340373",
    appId: "1:862047340373:web:e37f19c337a2c0b42811dc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;
}