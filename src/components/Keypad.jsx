import React, { useReducer, useRef } from 'react';


const reducer = (state, action) => {
    return action
}

const Keypad = () => {
    const keyword = "Muhammadu";
    let message;
    const [ word, dispatch ] = useReducer(reducer, '')

    const check = (input) => {
        return keyword.indexOf(input) != 0;
    }

    if (check(word) != 0) {
        message = 'Incorrect PIN'
        return dispatch('');
    }


    const handleChange  = (e) => {
        dispatch(e.target.value);
    }

    return ( 
        <div>
            <p>The Keyword is: {keyword} </p>
            <input type="text" value={word} onChange={handleChange}/>
            <p>{message}</p>
        </div>
     );
}
 
export default Keypad;