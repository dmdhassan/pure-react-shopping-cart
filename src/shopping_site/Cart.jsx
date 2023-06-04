import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ item, onAddOne, onRemoveOne }) => {
    return ( 
        <div className='d-flex justify-content-between border-bottom'>
            <div className='d-flex py-2'>
                <div className='border mr-2 d-flex justify-content-center align-items-center p-2'>
                    image
                </div>
                <div>
                    <p><strong>{item.name}</strong></p>
                    <p>{item.description}</p>
                </div>

            </div>
            <div className='items-right d-flex flex-column justify-content-between align-items-center'>
                <span>$ {item.price}</span>
                <div>
                    <button className='btn btn-outline-secondary py-1' onClick={onRemoveOne}>-</button>
                    <span className='btn btn-outline-secondary py-2'>{item.count}</span>
                    <button className='btn btn-outline-secondary py-1' onClick={onAddOne}>+</button>
                </div>

                <span>${item.price * item.count}</span>
            </div>
        </div>
     );
}

Cart.propTypes = {
    item: PropTypes.object.isRequired,
    onAddOne: PropTypes.func.isRequired
}
 
export default Cart;