import { useContext } from 'react';

import './HeaderCartButton.css'
import CartIcon from './CartIcon';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext); 

    const numOfCartItems = cartCtx.items.length

    return (
        <button className='cart-button' onClick={props.onClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>
                {numOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;