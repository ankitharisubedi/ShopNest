// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIW2FBZodj3zUqp7-9PuY_sDJtRmOCgYM",
  authDomain: "react-shop-78c63.firebaseapp.com",
  projectId: "react-shop-78c63",
  storageBucket: "react-shop-78c63.firebasestorage.app",
  messagingSenderId: "1098953388928",
  appId: "1:1098953388928:web:56ae0db190ef76c1988765"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters( {
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async( userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    //if user data exist
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }
        catch(error){
            console.log(error.message)
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
