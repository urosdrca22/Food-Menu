import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart'
import items from './data'
import CartProvider from './store/CartProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [menuItems, setMenuItems] = useState(items);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <div>
        <h1 className='title'>Meals</h1>
        <div className='underline'></div>
        <Menu items={menuItems}  />
      </div>
    </CartProvider>
  );
}

export default App;
