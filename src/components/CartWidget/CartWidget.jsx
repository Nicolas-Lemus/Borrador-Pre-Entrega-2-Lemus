import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';


const CartWidget = () => {
    return (
        <div className='cart'>
            <FontAwesomeIcon className='icon' icon={faCartShopping}/>
            <span>0</span>
        </div>
    )
}
export default CartWidget