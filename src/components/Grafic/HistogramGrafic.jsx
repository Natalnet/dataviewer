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
  const dados = data.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.differentDaysList === thing.differentDaysList
  )));
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
      let qtd = [];
      for (let i = 0; i < dados.length; i++) {
        let cont = 0;
        for (let j = 0; j < data.length; j++) {
          if(data[j].differentDaysList === dados[i].differentDaysList) {
            cont = cont+1;
          }
        }
        qtd.push(dados[i].differentDaysList + ':' + cont);
      }
      console.log(qtd);
    }
  }, [props.data, props.list, props.type, dados]);
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={dados}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}>
          <XAxis type="number" dataKey={'differentDaysList'} />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar type="number" dataKey={props.dataKey} name="Dias diferentes" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}