import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  render() {
    return (
      <ResponsiveContainer width="100%" minHeight={220}>
        <BarChart
          width={406}
          height={220}
          data={this.props.data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <Tooltip
            itemStyle={{ opacity: 1, fontWeight: 700, color: "black" }}
            contentStyle={{ background: "rgba(255,255,255, 0.5)" }}
            formatter={(value, name, props) => {
              let formatedValue = value.toLocaleString(undefined,
                { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " MWh";
              return formatedValue;
            }
            }
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="valoare" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {
              this.props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.backgroundColor} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
