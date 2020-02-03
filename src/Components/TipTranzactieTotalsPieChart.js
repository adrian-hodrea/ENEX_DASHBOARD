import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, Label, LabelList
} from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabelOuter = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderCustomizedLabelInner = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    const COLORS = this.props.data.map((entry, index) => {
      return entry.backgroundColor
    })

    return (
      <PieChart width={400} height={400}>
        <Tooltip 
          itemStyle={{opacity: 1, fontWeight: 700}}
          contentStyle={{background: "rgba(255,255,255, 0.5)"}}
          formatter={(value, name, props) => {
            let formatedValue = value.toLocaleString(undefined, 
              {minimumFractionDigits: 2, maximumFractionDigits: 2});
             return formatedValue;
          }
        }

        />
        <Pie
          paddingAngle={1}
          data={this.props.data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabelInner}
          outerRadius={100}
          fill="#8884d8"
          dataKey="cantitate"
        >
          {
            this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.backgroundColor} />)
          }        </Pie>

        <Pie
          paddingAngle={1}
          data={this.props.data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabelOuter}
          innerRadius={120}
          outerRadius={160}
          fill="#82ca9d"
          dataKey="valoare"
        >
          {
            this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>

        <Tooltip />
      </PieChart>
    );
  }
}
