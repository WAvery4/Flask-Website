import React, { useState, useEffect } from 'react';

function SourceSlider(props) {
    
    const [source, setSource] = useState(0);

    // updates source sliders after data from backend loads in
    useEffect(() => {
        setSource(props.value)
    }, [props.value]);

    // updates source sliders and overall political leaning
    function sliderInput(e) {
        e.preventDefault();
        props.onChange(Math.sign(e.target.value-source), props.id);
        setSource(e.target.value);
    }

    return (
        <input type="range" min="-1" max="1" className="slider" value={source} onInput={sliderInput} step="0.5" />
    );
}

export default SourceSlider;