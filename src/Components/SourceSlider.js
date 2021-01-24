import React, { useState, useEffect } from 'react';

function SourceSlider(props) {
    
    const [source, setSource] = useState(0);

    useEffect(() => {
        setSource(props.value)
    }, [props.value]);

    function sliderInput(e) {
        e.preventDefault();
        setSource(e.target.value);
    }

    return (
        <input type="range" min="-1" max="1" className="slider" value={source} onInput={sliderInput} step="0.5" />
    );
}

export default SourceSlider;