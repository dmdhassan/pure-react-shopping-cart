import React from 'react';
import Cart from './Cart';


const CartsPage = ({ items, onAddOne, onRemoveOne }) => {
    let itemsInCart = items.length;
    return ( 
        <div>
                {itemsInCart ? (
                    items.map(item => (
                        <div key={item.id}>
                            <Cart 
                                item={item} 
                                onAddOne={() => onAddOne(item)} 
                                onRemoveOne={() => onRemoveOne(item)} 
                            />
                        </div>
                    ))
                ) :
                <div>
                    <h3>Your cart is empty</h3>
                    <p>Why not add some expensive shit in it</p>
                </div>
                }
        </div>
     );
}
 
export default CartsPage;