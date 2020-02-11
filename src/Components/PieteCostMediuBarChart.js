import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={396}
        height={230}
        data={this.props.data}
        margin={{
          top: 25, right: 30, left: 20, bottom: 5,
        }}
      >
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

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="costMediu" fill="#8884d8">
          {
            this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.backgroundColor}>
              </Cell>
            ))
          }
          <LabelList 
            dataKey="costMediu" 
            position="top" 
            offset= {2}
            color="black"
            formatter={(value, name, props) => {
              let formatedValue = value.toLocaleString(undefined,
                { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " RON/MWh";
              return formatedValue;
            }
            }  
          />
          
        </ Bar>
      </BarChart>
    );
  }
}
