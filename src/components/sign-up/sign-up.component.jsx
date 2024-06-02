import {  useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import InputForm from "../form-input/form-input.component"
import './sign-up.styles.scss'
import Button from "../button/button.component"


const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const SignUpForm = () => {

const [formFields,setFormFields]=useState(defaultFormFields)

const {displayName,
       email,
       password,
       confirmPassword
}
=formFields

const changeHandler=(event)=>{
 const {name,value}=event.target

 setFormFields({...formFields,[name]:value})

}

const clearforFields=()=>{
    setFormFields(defaultFormFields)
  }
const handleSubmit= async (event)=>{

  event.preventDefault()

  if(password !== confirmPassword){
    alert('Password do not matched')
    return
  }
  
  try {
      const {user}=await createAuthUserWithEmailAndPassword(email,password)
      await createUserDocumentFromAuth(user,{displayName})
      clearforFields()
    
  } catch (error) {
    console.log('User creation encountered an error',error.message);
  }
}
  return (
    <div className="sign-up-container">
    <h2>Don't have an Account?</h2>
    <span>Sign Up with Your Email and Password</span>
    <form onSubmit={handleSubmit} >
    
    <InputForm label={'Display Name'} required type="text"  name="displayName" value={displayName} onChange={changeHandler}/>

    <InputForm label={'Email'} required type="email"  name="email" value={email} onChange={changeHandler}/>

    <InputForm label={'Password'} required type="password"  name="password" value={password} onChange={changeHandler}/>

    <InputForm label={'Confirm Password'} required type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
    
    <Button type="submit">SIGN UP</Button>
    </form>
    </div>
  )
}

export default SignUpForm