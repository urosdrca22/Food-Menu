import './HeaderCartButton.css'
import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {
    return (
        <button className='cart-button'>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>
                3
            </span>
        </button>
    );
};

export default HeaderCartButton;