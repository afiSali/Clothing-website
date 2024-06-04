import { useContext } from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context'


const CheckOutItem = ({cartItem}) => {
const {name,price,quantity, imageUrl}= cartItem

const {clearItem,addItemToCart,removeItemToCart}=useContext(CartContext)

const addItemHandler=()=> addItemToCart(cartItem)
const removedItemHandler=()=> removeItemToCart(cartItem)
const handleItemClear=()=> clearItem(cartItem)

  return (
    <div className='checkout-item-container'>
     <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
     </div>
     <span className='name'>{name}</span>

     <span className='quantity'>
        <div className='arrow' onClick={removedItemHandler}>&#10094;</div>
           <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
     </span>

     <span className='price'>{price}</span>
     <div className='remove-button' onClick={handleItemClear}>&#10005;</div>
    </div>
  )
}

export default CheckOutItem