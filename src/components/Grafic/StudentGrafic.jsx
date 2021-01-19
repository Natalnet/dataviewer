import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
function App(props) {
  const data = props.json.filter(item => item.registration !== null
    && item.registration.trim() === props.registration.trim());

  return (
    <>
      <BarChart
        width={340}
        height={360}
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
        <YAxis unit="%" type = "number"
          label={{ value: 'Percentual por nota', angle: -90, viewBox: { x: 0, y: 45, width: 50, height: 50 } }} />
        <Tooltip />
        <Legend />
        <Bar type = "number" dataKey={props.dataKeyBar} stackId="a" fill={props.fill} name={props.name} />
        {props.dataKeyBar1 ?
          <Bar type = "number" dataKey={props.dataKeyBar1} stackId="a" fill={props.fill1} name={props.name1} /> : ''}
      </BarChart>
    </>
  );
}

export default App;
