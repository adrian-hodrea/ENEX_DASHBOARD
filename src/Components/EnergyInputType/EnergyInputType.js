import React from 'react';
import EnergyInputKPI from '../EnergyInputKPI/EnergyInputKPI.js'

const EnergyInputType = (props) => {
    let energyInputTypeStyles = {
        display: "inline-block",
        margin: "30px auto",
        borderRadius: "5px",
        backgroundColor: "white"
    }
    let titleStyles = {
        padding: "8px",
        borderBottom: "1px solid lightgrey",
        marginBottom: "8px",
        textAlign: "center",
        fontWeight: "500"
    }

    const piataKPIComponents = props.energySourceData.kpis.map((kpi) => {
        return (
            <EnergyInputKPI 
            title={kpi.title} 
            cantitate={kpi.cantitate}
            valoare={kpi.valoare}
            costMediu={kpi.costMediu}
            bgColor={kpi.backgroundColor}
            icon={kpi.icon}
            displayType={kpi.displayType}
        />
        )
    })

    return (
        <div style={energyInputTypeStyles}>
            <div style={titleStyles}>{props.energySourceData.sourceTitle}</div>
             {piataKPIComponents}
        </div>
    )
}


export default EnergyInputType;
