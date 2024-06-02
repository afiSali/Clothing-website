import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
const Navigation= ()=>{
const {currentUser}=useContext(UserContext)




    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                     <div>SHOP</div>
                </Link>
                {currentUser ? (<Link className="nav-link" to="/auth" onClick={signOutUser}>
                    SIGN OUT
                </Link>)
                :
                (<Link className="nav-link" to="/auth">
                    SIGN IN
                </Link>
              )}
               
            </div>
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation