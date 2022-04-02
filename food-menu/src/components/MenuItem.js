import React, { useContext } from 'react';
import CartContext from '../store/cart-context';


const MenuItem = (props) => {
    const { item, onAdd } = props;
    const cartCtx = useContext(CartContext);

    const addToCartHandler = item => {
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            price: props.price,
            amount: props.amount
        });
    };
    
    return (
        <div className='card'>
            <div className='card__body'>
                <img src={props.img} alt={props.title} className='card__image' />
                    <h3 className='card__title'>{props.title}</h3>
                <p className='card__description'>{props.desc}</p>
            </div>
                <button onClick={addToCartHandler} className='card__price'>${props.price}</button>
        </div>
    );
};

export default MenuItem;
