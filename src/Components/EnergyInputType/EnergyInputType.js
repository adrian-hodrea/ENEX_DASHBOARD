import React from 'react';
import EnergyInputKPI from '../EnergyInputKPI/EnergyInputKPI.js'

const EnergyInputType = (props) => {
    const piataKPIComponents = props.energySourceData.kpis.map((kpi) => {
        return (
            <EnergyInputKPI className="energy__input__kpi"
            title={kpi.title} 
            cantitate={kpi.cantitate}
            valoare={kpi.valoare}
            costMediu={kpi.costMediu}
            bgColor={kpi.backgroundColor}
            icon={kpi.icon}
        />
        )
    })

    return (
        <div className="energy__input__type">
            <div className="energy__input__type__title">{props.energySourceData.sourceTitle}</div>
             {piataKPIComponents}
        </div>
    )
}


export default EnergyInputType;
