import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class CostTotalStackedBarChartMwh extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart className="barChart"
        width={250}
        height={280}
        data={this.props.data}
        margin={{
          top: 20, right: 0 , left: 2, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          itemStyle={{ opacity: 1, fontWeight: 700, color: "black" }}
          contentStyle={{ background: "rgba(255,255,255, 0.5)" }}
          formatter={(value, name, props) => {
            let formatedValue = value.toLocaleString(undefined,
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " RON/MWh";
            return formatedValue;
          }
          }
        />
        <Legend />
        <Bar dataKey="Cost_Mediu_Intrari" stackId="a" fill="#8884d8" />
        <Bar dataKey="Cost_Mediu_Adm" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
}
