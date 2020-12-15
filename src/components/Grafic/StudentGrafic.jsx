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
  const data = props.json.filter(item => item.registration !== null && item.registration.trim() === props.registration.trim());
  return (
    <>
      <BarChart
        width={700}
        height={170}
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
        <YAxis unit="%"label={{ value: 'Percentual por nota', angle: -90, viewBox: {x: 0, y: 45, width: 50, height: 50} }}/>
        <Tooltip />
        <Legend />
        <Bar dataKey={props.dataKeyBar} fill={props.fill} name={props.name}/>
      </BarChart>
    </>
  );
}

export default App;
