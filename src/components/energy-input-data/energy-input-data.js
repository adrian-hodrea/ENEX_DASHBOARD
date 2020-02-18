import React from 'react';
import EnergyInputType from './energy-input-type';
import EnergyInputKPI from './energy-input-kpi';
import convertDateFormat from '../../helper-functions/convertDateFormat';
import logo from '../../images/logo_Enex.png';
import { Link } from 'react-router-dom';


const EnergyInputData = (props) => {

    const chIndir = props.globalData.indirData.suma_indir;
    const energyInputTypeComponents = props.globalData.energyData.map(
        piata => {
            return <EnergyInputType energySourceData={piata} />
        })
    const intrariTotaleInputType = props.globalData.energyData[props.globalData.energyData.length - 1].kpis;
    const intrariTotaleKPI = intrariTotaleInputType[intrariTotaleInputType.length - 1];
    let { fromDate, toDate } = props.perioada;
    fromDate = convertDateFormat(fromDate);
    toDate = convertDateFormat(toDate);


    return (
        <div className="energy__input__data">
            <div className="energy__input__type indir__total__container">
                <Link to={{ pathname: '/' }} >
                    <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
                </Link>
                <div className="indir__total__title">
                    Date aferente perioadei: {fromDate}  -  {toDate}
                </div>
            </div>

            <div class="type_container">
                {energyInputTypeComponents}
            </div>

            <div className="indir_container">

                <div className="energy__input__type indir__total__container">
                    <div className="indir__total__title">
                        Costuri FIXE/Administrative
                    </div>
                    <EnergyInputKPI className="energy__input__kpi ch__indir"
                        title="Costuri FIXE(ADM)"
                        cantitate="0"
                        valoare={chIndir}
                        costMediu="0"
                        bgColor="var(--ch-indir-color-from), var(--ch-indir-color-to)"
                        icon="fas fa-stamp"
                    />
                </div>

                <div className="energy__input__type indir__total__container">
                    <div className="indir__total__title">
                        Cost TOTAL
                    </div>
                    <EnergyInputKPI className="energy__input__kpi totals"
                        title="Cost TOTAL"
                        cantitate={intrariTotaleKPI.cantitate}
                        valoare={intrariTotaleKPI.valoare + chIndir}
                        costMediu={(intrariTotaleKPI.valoare + chIndir) / intrariTotaleKPI.cantitate}
                        bgColor="var(--cost-total-color-from), var(--cost-total-color-to)"
                        icon="fas fa-funnel-dollar"
                        finalCost="true"
                    />
                </div>

            </div>
        </div>
    )

}

export default EnergyInputData;
