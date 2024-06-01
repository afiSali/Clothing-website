import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider,signInWithPopup,signInWithRedirect } from "firebase/auth";
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

  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth= getAuth()
  export const signInWithGooglePopup= ()=> signInWithPopup(auth,provider)
  
  export const db= getFirestore()
  export const createUserDocumentFromAuth=  async(userAuth) =>{

    const userDocRef= doc(db,'users',userAuth.uid)
    const userSnapShot= await getDoc(userDocRef)

    if(!userSnapShot.exists()){

    const {email,displayName}=userAuth
    const createdAt= new Date()
        try {
            await setDoc(userDocRef,{
                email,
                displayName,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef
  }



