import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase/firebase.utils"



const SignIn = () => {

const logGoogleUser= async ()=>{
    const {user}= await signInWithGooglePopup()
    const userDocRef=await createUserDocumentFromAuth(user)
}


  return (
    <div>
        <button onClick={logGoogleUser}>SignIn page</button>
        </div>
  )
}

export default SignIn