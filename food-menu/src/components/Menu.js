import React, { useState, useContext } from 'react';

import MenuItem from './MenuItem';


const Menu = (props) => {
    
    const { items } = props;

    
    return (
        <div className='container'>
            {items.map((item) => {
                const {id, img, title, desc, price, amount} = item;
                return (
                    <MenuItem
                        key={id} id={id} img={img} title={title} desc={desc} price={price} amount={amount}
                    />
                );
            })}
        </div>
    );
};

export default Menu;