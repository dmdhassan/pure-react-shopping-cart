import React, { useReducer, useRef } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'add': 
            return [
                ...state,
                {
                    id: state.length,
                    name: action.name
                }
            ]
        case 'remove': 
            return state.filter((item, index) => index != action.index)
        case 'clear': 
            return []

        default:
            return state
    }
}

const ShopingList = () => {
    const inputRef = useRef();
    const [ items, dispatch ] = useReducer(reducer, []);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: 'add',
            name: inputRef.current.value
        })

        inputRef.current.value = '';
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch({
                            type: 'remove',
                            index
                        })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch({
                type: 'clear'
            })}>
                Clear
            </button>
        </>
     );
}
 
export default ShopingList;