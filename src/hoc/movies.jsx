import React from 'react';
import WithTooltip from './withTooltip';

const Movie = ({showTooltip}) => {
    return ( 
        <>
            <div>Movie</div>
            {
                showTooltip && <div>Tip</div>
            }
        </>
     );
}
 

 
export default WithTooltip(Movie);