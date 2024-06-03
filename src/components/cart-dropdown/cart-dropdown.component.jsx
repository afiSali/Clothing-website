import { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'

const CartDropDown = () => {
const {cartItems}= useContext(CartContext)

console.log("cartItems",cartItems.name);

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map((item)=> <CartItem  key={item.id} cartItem={item}/>)}
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown