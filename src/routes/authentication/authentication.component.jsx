import SignInForm from "../../components/sign-in/sign-in.component"
import SignUpForm from "../../components/sign-up/sign-up.component"
 import './authentication.styles.scss'


const Authentication = () => {






  return (
    <div className="auth_container">
        <SignInForm />
        <SignUpForm />
    </div>
  )
}

export default Authentication