import React from 'react';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  ComposedChart
} from "recharts";
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
function App(props) {
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


  const data = props.json.filter(item => item.registration !== null
    && item.registration.trim() === props.registration.trim());

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.dataKeyX} />
          <YAxis unit="%" type="number"
            label={{ value: 'Percentual por nota', angle: -90, viewBox: { x: 0, y: 45, width: 50, height: 50 } }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar type="number" dataKey={props.dataKeyBar} fill={props.fill} name={props.name} />
          {props.dataKeyBar1 ?
            <Line type="monotone" dataKey={props.dataKeyBar1} stroke={props.fill1} name={props.name1} /> : ''}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
