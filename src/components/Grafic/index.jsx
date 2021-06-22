import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DefaultTooltipContent from 'recharts/types/component/DefaultTooltipContent';

export default function App(props) {
  const CustomTooltip = props => {
    // payload[0] doesn't exist when tooltip isn't visible
    if (props.payload[0] != null) {
      // mutating props directly is against react's conventions
      // so we create a new payload with the name and value fields set to what we want
      const newPayload = [
        {
          // all your data which created the tooltip is located in the .payload property
          
          value: props.payload[0].payload.list,
          // you can also add "unit" here if you need it
        },
        ...props.payload,
      ];
  
      // we render the default, but with our overridden payload
      return <DefaultTooltipContent {...props} payload={newPayload} />;
    }
  
    // we just render the default
    return <DefaultTooltipContent {...props} />;
  };

    return (
      <ResponsiveContainer width="100%" height="68%">
        <BarChart
          data={props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.dataKeyX} />
          <YAxis unit={props.yUnit ? props.yUnit : ''} label={{ value: 'Quantidade de alunos', angle: -90, viewBox: { x: 20, y: 100, width: 50, height: 50 } }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" />
          <Bar dataKey={props.dataKeyBar0} fill={props.fill0} name={props.nameBar0} />
          {props.dataKeyBar1 ?
            <Bar dataKey={props.dataKeyBar1} fill={props.fill1} name={props.nameBar1} /> : ''}
          {props.dataKeyBar2 ?
            <Bar dataKey={props.dataKeyBar2} fill={props.fill2} name={props.nameBar2} />
            : ''}
          {props.dataKeyBar3 ?
            <Bar dataKey={props.dataKeyBar3} fill={props.fill3} name={props.nameBar3} />
            : ''}
        </BarChart>
      </ResponsiveContainer>
    );

  }