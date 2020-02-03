import React from 'react';
import EnergyInputType from '../EnergyInputType/EnergyInputType.js';
import EnergyInputKPI from '../EnergyInputKPI/EnergyInputKPI.js'

const EnergyInputData = (props) => {

    const chIndir = props.globalData.indirData.suma_indir;
    const energyInputTypeComponents = props.globalData.energyData.map(
        piata => {
           return <EnergyInputType energySourceData={piata}/> 
        })
    const intrariTotaleInputType = props.globalData.energyData[props.globalData.energyData.length - 1].kpis;
    const intrariTotaleKPI = intrariTotaleInputType[intrariTotaleInputType.length - 1];
    console.log("intrariTotaleKPI:", intrariTotaleKPI);
    return (
        <div className="energy__input__data">
            {energyInputTypeComponents}
            <div className="energy__input__type indir__total__container">
                <div className="indir__total__title">
                    Costuri FIXE/Administrative
                </div>
                <EnergyInputKPI className="energy__input__kpi ch__indir"
                    title = "Costuri FIXE(ADM)"
                    cantitate = "0"
                    valoare = {chIndir}
                    costMediu = "0"
                    bgColor = "var(--ch-indir-color-from), var(--ch-indir-color-to)"
                    icon = "fas fa-stamp"
                />
            </div>
            <div className="energy__input__type indir__total__container">
                <div className="indir__total__title">
                        Cost TOTAL
                </div>
                <EnergyInputKPI className="energy__input__kpi totals"
                    title = "Cost TOTAL"
                    cantitate = {intrariTotaleKPI.cantitate}
                    valoare = {intrariTotaleKPI.valoare + chIndir}
                    costMediu = {(intrariTotaleKPI.valoare + chIndir) / intrariTotaleKPI.cantitate}
                    bgColor = "var(--cost-total-color-from), var(--cost-total-color-to)"
                    icon = "fas fa-funnel-dollar"
                />
            </div>
        </div>
    )

}


export default EnergyInputData;
