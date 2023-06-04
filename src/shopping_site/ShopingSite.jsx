import React, { useContext, useState } from 'react';
import items from '../static-data.js'
import ItemsPage from './ItemsPage';
import CartsPage from './CartsPage.jsx';


function summarizeCart(cart) {
    const groupedItem = cart.reduce((summary, item) => {
        summary[item.id] = summary[item.id] || {
            ...item,
            count: 0
        }

        summary[item.id].count++;
        return summary;
    }, {})

    return Object.values(groupedItem);
}

function calculateTotal(cart) {
    const total = cart.reduce((total, item) => {
        total += item.price

        return Math.round(total);
    }, 0);

    return total;
}


const ShoppingSite = () => {
    const [activeTab, setActiveTab] = useState("items");
    const [cartItems, setCartItems] = useState([]);

    function handleAddToCart (item) {
        setCartItems(prevCart => [...prevCart, item]);
    }

    function handleRemoveItem (item) {
        const index = cartItems.findIndex(i => i.id == item.id);

        if (index >= 0) {
            setCartItems(prevCart => {
                const copy = [...prevCart];
                copy.splice(index, 1);
                return copy;
            });
        };
    };

    return (
        <div className='container-fluid my-4'>
            <Nav 
                activeTab={activeTab}
                onTabChange={setActiveTab}
                totalAmount={calculateTotal(cartItems)}
                totalItem={summarizeCart(cartItems).length}

            />
            <MainContent 
                activeTab={activeTab}
                cartItems={summarizeCart(cartItems)}
                onAddToCart={handleAddToCart}
                onRemoveItem={handleRemoveItem}

            />
        </div>
    );
}


const Nav = ({ activeTab, onTabChange, totalAmount, totalItem }) => {
    const itemClass = tab => {
        if (tab == activeTab) return "nav-item border border-primary font-weight-bold"
        return "nav-item font-weight-bold"
    }

    return (
        <div className="nav d-flex justify-content-between border-bottom border-bottom-3 border-secondary py-2 mb-2">
            <ul className="nav">
                <li className={itemClass("items")} onClick={() => onTabChange("items")}>
                    <a className="nav-link" href="#">Items</a>
                </li>
                <li className={itemClass("cart")} onClick={() => onTabChange("cart")}>
                    <a className="nav-link" href="#">Cart</a>
                </li>
            </ul>
            <span className=''>{totalItem > 0 && `${totalItem} item(s) ($${totalAmount})`}</span>
        </div>
    );
}

const MainContent = ({ activeTab, cartItems, onAddToCart, onRemoveItem }) => {
    switch (activeTab) {
        case "items": 
            return <ItemsPage items={items} onAddToCart={onAddToCart}/>

        case "cart":
            return <CartsPage items={cartItems} onAddOne={onAddToCart} onRemoveOne={onRemoveItem} />

        default:
    }
}
 
export default ShoppingSite;