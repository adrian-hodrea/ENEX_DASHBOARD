import React from 'react';
import EnergyInputType from '../EnergyInputType/EnergyInputType.js';

const EnergyInput = (props) => {
    let energyInputStyles = {
        margin: "20px auto",
        padding: "10px",
        border: "1px solid grey", 
        borderRadius: "10px",
        width: "95%",
        backgroundColor: "#2673fb"
    }

    const energyInputTypeComponents = props.globalData.map(
        piata => {
           return <EnergyInputType energySourceData={piata}/> 
        })

    return (
        <div style={energyInputStyles}>
            {energyInputTypeComponents}
        </div>
    )

}


export default EnergyInput;
