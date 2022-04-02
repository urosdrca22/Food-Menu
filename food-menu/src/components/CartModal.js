import React from 'react';
import ReactDOM from 'react-dom';

import './CartModal.css'


const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.onClose}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className='modal'>
                <div>{props.children}</div>
        </div>
    );
};

const CartModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))};
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))};
        </React.Fragment>
    );
};

export default CartModal;