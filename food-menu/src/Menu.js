import React from 'react';
import MenuItem from './MenuItem';
import items from './data'


const Menu = () => {
    
    return (

        <div className='container'>
            {items.map((item) => {
                const {img, title, desc, price} = item;
                return (
                    <MenuItem
                        img={img} title={title} desc={desc} price={price}
                    />
                );
            })}
        </div>
    );
};

export default Menu;