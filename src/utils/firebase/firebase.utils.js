import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider,signInWithPopup,signInWithRedirect,createUserWithEmailAndPassword } from "firebase/auth";
import { doc,getDoc,setDoc,getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDDMRLC2DZudeA6Ty3PKqfuhyhHCy_sHhM",
    authDomain: "clothing-db-759e2.firebaseapp.com",
    projectId: "clothing-db-759e2",
    storageBucket: "clothing-db-759e2.appspot.com",
    messagingSenderId: "123884038997",
    appId: "1:123884038997:web:d8bd79e266708055ef1ddc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider= new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth= getAuth()
  export const signInWithGooglePopup= ()=> signInWithPopup(auth,googleProvider)
  export const signInwithGoogleRedirect= ()=> signInWithRedirect(auth,googleProvider)


  export const db= getFirestore()
  export const createUserDocumentFromAuth=  async(userAuth,additionalInformation={}) =>{

    const userDocRef= doc(db,'users',userAuth.uid)
    const userSnapShot= await getDoc(userDocRef)

    if(!userSnapShot.exists()){

    const {email,displayName}=userAuth
    const createdAt= new Date()
        try {
            await setDoc(userDocRef,{
                email,
                displayName,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef
  }

  export const createAuthUserWithEmailAndPassword= async (email,password)=>{
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth,email,password)
  }



