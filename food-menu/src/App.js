import React from 'react';
import AbstractModalHeader from 'react-bootstrap/esm/AbstractModalHeader';
import Header from './Header';
import Menu from './Menu';


function App() {
  
  return (
    <React.Fragment>
      <Header />
      <div>
        <h1 className='title'>Meals</h1>
        <div className='underline'></div>
        <Menu />
      </div>
    </React.Fragment>
    
  );
}

export default App;
