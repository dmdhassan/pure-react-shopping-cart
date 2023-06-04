import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import './css/Item.css'

const ItemsPage = ({ items, onAddToCart }) => {
    return ( 
       <div>
            {items.map(item => (
                <Item 
                    key={item.id} 
                    item={item}
                    onAddToCart={() => onAddToCart(item)}
                />
            ))}
       </div>
     );
}

ItemsPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
}
 
export default ItemsPage;