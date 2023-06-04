import React from "react";


function withTooltip(Component) {
    return function WithTooltip() {
        const [showTooltip, setShowTooltip] = React.useState(false);

        function toggleTooltip() {
            setShowTooltip(!showTooltip);
        }
        return (
            <div onMouseOver={toggleTooltip} onMouseOut={toggleTooltip}>
                <Component showTooltip={showTooltip}/>
            </div>
        )
    }
}

export default withTooltip;