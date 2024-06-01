import SignUpForm from "../components/sign-up/sign-up.component"
import { 
    createUserDocumentFromAuth,
    signInWithGooglePopup, 
       
       }
    from "../utils/firebase/firebase.utils"



const SignIn = () => {



const logGoogleUser= async ()=>{
    const {user}= await signInWithGooglePopup()
    const userDocRef=await createUserDocumentFromAuth(user)
}



  return (
    <div>
        <h3>Sign In Page</h3>
        <button onClick={logGoogleUser}>SignIn with Popup</button>
        <SignUpForm />
    </div>
  )
}

export default SignIn