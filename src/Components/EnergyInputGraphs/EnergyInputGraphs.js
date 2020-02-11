import React from 'react';

/* import data in format needed for charts */
import GetTipTranzactieTotalsChartData from '../../HelperFunctions/GetTipTranzactieTotalsChartData.js';
import { GetTotalsStackedBarChartData, GetTotalsStackedBarChartDataMwh } from '../../HelperFunctions/GetTotalsStackedBarChartData.js';
import GetPieteChartData from '../../HelperFunctions/GetPieteChartData.js';


/* import chart react components */
import TipTranzactieTotalsPieChart from '../TipTranzactieTotalsPieChart.js';
import TipTranzactieTotalsBarChartCant from '../TipTranzactieTotalsBarChartCant.js';
import TipTranzactieTotalsBarChartVal from '../TipTranzactieTotalsBarChartVal.js';

import CostTotalStackedBarChart from '../CostTotalStackedBarChart.js';
import CostTotalStackedBarChartMWh from '../CostTotalStackedBarChartMWh.js';

import PieteActiveShapePieChart from '../PieteActiveShapePieChart.js';
import PieteCostMediuBarChart from '../PieteCostMediuBarChart.js';



const EnergyInputGraphs = (props) => {

    let tipTranzTotalsPieChartData = GetTipTranzactieTotalsChartData(props.globalData);
    let totalsStackedBarChartData = GetTotalsStackedBarChartData(props.globalData);
    let totalsStackedBarChartDataMwh = GetTotalsStackedBarChartDataMwh(props.globalData);
    let pieteChartData = GetPieteChartData(props.globalData);

    return (
        <div className="energy__input__graphs">
            <div className="totals__stacked__bars">
                <div className="chart__container">
                    <div className="chart__container__title">Intrari totale de energie - MWh</div>
                    <div className="chart__container__body">
                        <TipTranzactieTotalsBarChartCant data={tipTranzTotalsPieChartData} />
                    </div>
                </div>
                <div className="chart__container">
                    <div className="chart__container__title">Intrari totale de energie - Valori</div>
                    <div className="chart__container__body">
                        <TipTranzactieTotalsBarChartVal data={tipTranzTotalsPieChartData} />
                    </div>
                </div>
            </div>

            <div className="totals__stacked__bars">
                <div className="chart__container">
                    <div className="chart__container__title">Intrari totale de energie</div>
                    <div className="chart__container__body">
                        <TipTranzactieTotalsPieChart data={tipTranzTotalsPieChartData} />
                    </div>
                </div>

                <div className="chart__container">
                    <div className="chart__container__title">Structura costuri energie - Val</div>
                    <div className="chart__container__body">
                        <CostTotalStackedBarChart data={totalsStackedBarChartData} />
                    </div>
                </div>

                <div className="chart__container">
                    <div className="chart__container__title">Structura costuri energie - CostM</div>
                    <div className="chart__container__body">
                    <CostTotalStackedBarChartMWh data={totalsStackedBarChartDataMwh} />
                    </div>
                </div>
            </div>

            <div className="totals__stacked__bars">
                <div className="chart__container">
                    <div className="chart__container__title">Intrari de pe piete</div>
                    <div className="chart__container__body">
                        <PieteActiveShapePieChart data={pieteChartData} />
                    </div>
                </div>

                <div className="chart__container">
                    <div className="chart__container__title">Intrari de pe piete - cost mediu / MWh</div>
                    <div className="chart__container__body">
                        <PieteCostMediuBarChart data={pieteChartData} />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default EnergyInputGraphs;