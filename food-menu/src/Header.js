import React from 'react'
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <header className='header'>
            <h1>React Menu</h1>
            <HeaderCartButton />
        </header>
    );
};

export default Header;