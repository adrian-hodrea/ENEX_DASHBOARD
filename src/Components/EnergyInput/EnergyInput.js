import React from 'react';
import EnergyInputType from '../EnergyInputType/EnergyInputType.js';
import pieteData from '../data/pieteData.js';
import productionData from '../data/productionData.js';


const EnergyInput = (props) => {
    let energyInputStyles = {
        margin: "20px auto",
        padding: "10px",
        border: "1px solid grey", 
        borderRadius: "10px",
        width: "95%",
        backgroundColor: "#2673fb"
    }

    return (
        <div style={energyInputStyles}>
            <EnergyInputType energySourceData={pieteData}/> 
            <EnergyInputType energySourceData={productionData}/>   
        </div>
    )
}


export default EnergyInput;
