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
import json from '../../json/df_class_practice_mean_performance_by_subject.json';

function App(props) {
  const data = json.filter(item => item.registration !== null && item.registration.trim() === props.registration.trim());
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
        <XAxis dataKey="subject" />
        <YAxis unit="%"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="meanSubject" fill="#0FFF00" />
      </BarChart>
    </>
  );
}

export default App;
