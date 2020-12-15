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
import json from '../../json/graph_performance_student_list_3.json';

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
        <XAxis dataKey="list"/>
        <YAxis unit="%"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="mediaList" fill="#0FFF00" name="Média da lista"/>
       

      </BarChart>
    </>
  );
}

export default App;
