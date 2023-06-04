import React, {useReducer, useState} from 'react';


function reducer (state, action) {
    switch (action) {
        case 0:
            return 0
        case 1:
            return 1
        case 2:
            return 2
        case 3:
            return 3
    

        default:
            return state
            
    }
    
}

const Room = () => {
    const [ level, dispatch ] = useReducer(reducer, 0);
    const decode = {
        0: 'off',
        1: 'low',
        2: 'medium',
        3: 'high'
    }


    function handleChange() {
        if (level < 3) {
            dispatch(level+1)

        } else {
            dispatch(0)
        }
    }

    return (
        <div>
            <p>level == {decode[level]} </p>
            <p><button onClick={() => dispatch(0)}>Off</button> <button onClick={handleChange}> &#128161;&#x1F4A1; </button></p>
        </div>
    )
       
}
 
export default Room;