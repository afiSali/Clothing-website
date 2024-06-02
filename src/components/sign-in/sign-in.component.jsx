import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth, signInWithGooglePopup ,SignInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import InputForm from "../form-input/form-input.component"
import './sign-in.styles.scss'
import Button from "../button/button.component"


const defaultFormFields={
    email:'',
    password:'',
}


const SignInForm = () => {
const [formFields,setFormFields]=useState(defaultFormFields)

const {
       email,
       password,
} =formFields

const changeHandler=(event)=>{
 const {name,value}=event.target

 setFormFields({...formFields,[name]:value})

}

const clearforFields=()=>{
  setFormFields(defaultFormFields)
}
const handleSubmit= async (event)=>{

  event.preventDefault()

 
  
  try {
    const {user}=await SignInAuthUserWithEmailAndPassword(email,password)
    clearforFields()
    
  } catch (error) {
    console.log(error);
  }
}

const signInWithGoogle= async ()=>{
  await signInWithGooglePopup()
}


  return (
    <div className="sign-in-container">
    <h2>Already have an Account?</h2>
    <span>Sign In with Your Email and Password</span>
    <form onSubmit={handleSubmit} >
    

    <InputForm label={'Email'} required type="email"  name="email" value={email} onChange={changeHandler}/>

    <InputForm label={'Password'} required type="password"  name="password" value={password} onChange={changeHandler}/>

    <div className="button_containers">
        <Button type="submit">SIGN IN</Button>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
    </div>
    </form>
    </div>
  )
}

export default SignInForm