import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, onAddToCart }) => {
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
            <div className=''>
                <p>$ {item.price}</p>
                <button type="button" className="btn btn-outline-warning" onClick={onAddToCart}>Add to cart</button>
            </div>
        </div>
     );
}


Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
}
 
export default Item;