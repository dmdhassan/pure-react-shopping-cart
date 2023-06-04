import React, {useState} from 'react';

const AudioControls = () => {
    const [ controls, setControls ] = useState({
        volume: 50,
        trebble: 50,
        mid: 50,
        bass: 50
    })

    const increment = (property) => {
        if (controls[property] < 100) {
            const newControls = {...controls}
            newControls[property] = controls[property] + 1
            setControls(newControls)
        }

    }

    const decrement = (property) => {
        if (controls[property] > 0) {
            const newControls = {...controls}
            newControls[property] = controls[property] - 1
            setControls(newControls)
        }
    }

    return ( 
        <div>
            <div>
                <button onClick={() => decrement("volume")}> - </button> <span>Volume {controls.volume}</span> <button onClick={() => increment("volume")}> + </button>
            </div>
            <div>
                <button onClick={() => decrement("trebble")}> - </button> <span>Trebble {controls.trebble}</span> <button onClick={() => increment("trebble")}> + </button>
            </div>
            <div>
                <button onClick={() => decrement("mid")}> - </button> <span> Mid {controls.mid}</span> <button onClick={() => increment("mid")}> + </button>
            </div>
            <div>
                <button onClick={() => decrement("bass")}> - </button> <span> Bass {controls.bass}</span> <button onClick={() => increment("bass")}> + </button>
            </div>
        </div>
     );
}
 
export default AudioControls;