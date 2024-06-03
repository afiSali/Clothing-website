import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"
const Navigation= ()=>{
const {currentUser}=useContext(UserContext)
const {isCartOpen}=useContext(CartContext)



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
               <CartIcon />
            </div>
            { isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation