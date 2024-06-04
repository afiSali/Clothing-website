import { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropDown = () => {
const {cartItems}= useContext(CartContext)
const navigate = useNavigate()

const navigateHandler=()=>{
  navigate('/checkout')
}
console.log("cartItems",cartItems.name);

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map((item)=> <CartItem  key={item.id} cartItem={item}/>)}
        </div>
        <Button onClick={navigateHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown