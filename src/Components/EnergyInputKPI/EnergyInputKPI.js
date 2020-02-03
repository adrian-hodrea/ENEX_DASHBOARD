import React from 'react';

const EnergyInputKPI = (props) => {
    let opacityValue = "1";
    if (props.valoare === 0) {
        opacityValue = "0.2";
    }
    let tileStyles = {
        backgroundImage: `linear-gradient(to right, ${props.bgColor})`,
        opacity: opacityValue,
    }
    
    let titleStyles = {
        borderBottom: "1px solid var(--tile-font-color)",
        paddingBottom: "5px",
        fontWeight: "500",
        fontSize: "18px",
        verticalAlign: "middle"

    }
    let valoare = props.valoare.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    let cantitate = props.cantitate.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    let costMediu = props.costMediu.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    return (
        <div className={props.className} style={tileStyles}>
            <div style={titleStyles}>
                <div style={{display: "inline-block", width:"85%"}}>{props.title}</div>
                <i style={{float: "right"}} className={props.icon}></i>
            </div>
            <table>
                <tbody style={{verticalAlign: "bottom"}}>
                    <tr>
                        <td style={{width: "60%"}}>Valoare</td>
                        <td style={{textAlign: "right", width: "25%"}}>{valoare}</td>
                        <td style={{fontSize: "10px"}}>RON</td>
                    </tr>
                    <tr>
                        <td>Cantitate</td>
                        <td style={{textAlign: "right"}}>{cantitate}</td>
                        <td style={{fontSize: "10px"}}>MWh</td>
                    </tr>
                    <tr>
                        <td>Cost mediu</td>
                        <td style={{textAlign: "right"}}>{costMediu}</td>
                        <td style={{fontSize: "10px"}}>RON/MWh</td>
                    </tr>  
                </tbody>
            </table>
        </div>
    )
}

export default EnergyInputKPI;