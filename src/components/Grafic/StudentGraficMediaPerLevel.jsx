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
import json from '../../json/dfteste.json';

function App(props) {
  const data = json.filter(item => item.Matrícula !== null && item.Matrícula.toString().trim() === props.matricula.trim());
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
        <XAxis />
        <YAxis unit="%" />
        <Tooltip />
        <Legend />
        <Bar dataKey="mediaMuitoFacil" fill="#0FFF00" name="Média nível muito fácil" />
        <Bar dataKey="mediaFacil" fill="#DAA520" name="Média nível fácil" />
        <Bar dataKey="mediaMedio" fill="#8B4513" name="Média nível médio" />
        <Bar dataKey="mediaDificil" fill="#9400D3" name="Média nível difícil" />
        <Bar dataKey="mediaMuitoDificil" fill="#FF0000" name="Média nível muito difícil" />

      </BarChart>
    </>
  );
}

export default App;