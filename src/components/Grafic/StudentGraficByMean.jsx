import React from 'react';
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import json from '../../json/df_students_subjects_performance_sorted_by_mean.json';

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
        <YAxis unit="%"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="ASSUNTO_EM_BRANCO" fill="#0FFF00" />
        <Bar dataKey="Estruturas de Repetição" fill="#DAA520" />
        <Bar dataKey="Ponteiros" fill="#8B4513" />
        <Bar dataKey="Estruturas Condicionais" fill="#9400D3"  />
        <Bar dataKey="Funções" fill="#FF0000" />
        <Bar dataKey="Estruturas de Repetição Condicional" fill="#FF8C00" />
        <Bar dataKey="Vetores" fill="#FFFF00" />
        <Bar dataKey="Operadores Aritméticos" fill="#00BFFF" />
        <Bar dataKey="Matrizes" fill="#FFDEAD" />
        <Bar dataKey="Tipos Estruturados" fill="#8A2BE2"  />
        <Bar dataKey="Recursão" fill="#2F4F4F" />
        <Bar dataKey="Operadores Lógicos" fill="#0FFF00" />
        <Bar dataKey="String" fill="#DAA520" />
        <Bar dataKey="Estruturas de Repetição Contada" fill="#8B4513" />
        <Bar dataKey="CN" fill="#9400D3" />
        <Bar dataKey="EDO" fill="#FF0000" />
        <Bar dataKey="Integral" fill="#FF8C00" />

      </BarChart>
    </>
  );
}

export default App;
