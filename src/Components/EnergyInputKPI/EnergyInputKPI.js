import React from 'react';

const EnergyInputKPI = (props) => {
    let opacityValue;
    switch (props.displayType) {
        case "B" :  // Full Opacity
            opacityValue = "0.2";
            break;
        case "H" : // Blured Opacity
            opacityValue = "0";
            break;
        default: // Hidden Opacity
            opacityValue = "1";
    }
    let tileStyles = {
        //display: "inline-block",
        margin: "4px",
        borderRadius: "5px",
        width: "330px",
        backgroundImage: `linear-gradient(to top right, ${props.bgColor})`,
        color: "var(--tile-font-color)",
        padding: "10px",
        fontSize: "14px",
        opacity: opacityValue
    }
    
    let titleStyles = {
        borderBottom: "1px solid var(--tile-font-color)",
        paddingBottom: "5px",
        fontWeight: "500",
        fontSize: "18px",
        verticalAlign: "middle"

    }

    return (
        <div style={tileStyles}>
            <div style={titleStyles}>
                <div style={{display: "inline-block", width:"85%"}}>{props.title}</div>
                <i style={{float: "right"}} className={props.icon}></i>
            </div>
            <table>
                <tbody style={{verticalAlign: "bottom"}}>
                    <tr>
                        <td style={{width: "60%"}}>Valoare</td>
                        <td style={{textAlign: "right"}}>{props.valoare}</td>
                        <td style={{fontSize: "10px"}}>RON</td>
                    </tr>
                    <tr>
                        <td>Cantitate</td>
                        <td style={{textAlign: "right"}}>{props.cantitate}</td>
                        <td style={{fontSize: "10px"}}>MWh</td>
                    </tr>
                    <tr>
                        <td>Cost mediu</td>
                        <td style={{textAlign: "right"}}>262.00</td>
                        <td style={{fontSize: "10px"}}>RON/MWh</td>
                    </tr>  
                </tbody>
            </table>
        </div>
    )
}

export default EnergyInputKPI;