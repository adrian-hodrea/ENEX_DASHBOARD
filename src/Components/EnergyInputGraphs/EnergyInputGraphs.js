import React from 'react';
import Example from '../TipTranzactieTotalsPieChart.js';
import GetTipTranzactieTotals from '../../HelperFunctions/GetTipTranzactieTotals.js';


const EnergyInputGraphs = (props) => {
    let tipTranzTotals = GetTipTranzactieTotals(props.globalData);  
    let tipTranzTotalsPieChartData = tipTranzTotals.map(
        item => {
            let rObj = {};
            rObj.name = item.title;
            rObj.cantitate = item.cantitate;
            rObj.valoare = item.valoare;
            rObj.costMediu = item.costMediu;
            rObj.icon = item.icon;
            rObj.backgroundColor = item.backgroundColor;
            return rObj;
        }
    )

    return (
        <div className="energy__input__graphs">
                  <Example data={tipTranzTotalsPieChartData}/>
        </div>
    )
}

export default EnergyInputGraphs;