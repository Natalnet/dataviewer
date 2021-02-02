import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis
} from 'recharts';

export default function App(props) {
  const [data, setData] = useState([]);
  useEffect(()=> {
    let data = props.data;
    if(props.list) {
      if(props.type==="lista")
      data = data.filter(item => item.list === props.list);
      else if(props.type==="assunto")
      data = data.filter(item => item.subject === props.list);
      else if(props.type==="dificuldade")
      data = data.filter(item => item.difficulty === props.list);
      setData(data);
    }
  }, [props.data, props.list, props.type]);
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}>
          <XAxis />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar type="number" dataKey={props.dataKey} name="Dias diferentes" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}