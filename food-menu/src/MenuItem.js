import React from 'react';


const MenuItem = (props) => {
    return (
        <div className='card'>
            <div className='card__body'>
                <img src={props.img} alt={props.title} className='card__image' />
                    <h3 className='card__title'>{props.title}</h3>
                <p className='card__description'>{props.desc}</p>
            </div>
                <button className='card__price'>${props.price}</button>
        </div>
    );
};

export default MenuItem;
