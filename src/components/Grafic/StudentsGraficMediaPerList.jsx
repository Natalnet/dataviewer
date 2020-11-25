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
import {graph2} from '../../json/teste2.json';

function App(props) {
  const data = graph2.filter(item => item.registration !== null && item.registration.trim() === props.registration.trim());
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
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="IMD0012 - 2020.6: Lista Obrigatória, Semana 1" fill="#0FFF00" name="Lista semana 1" />
        <Bar dataKey="IMD0012 - 2020.6: Lista Preparatória, Semana 3" fill="#DAA520" name="Lista semana 3" />
        <Bar dataKey="ITP - Alocação dinâmica" fill="#8B4513" name="Lista Alocação Dinâmica" />
        <Bar dataKey="ITP - Funções - Lista" fill="#9400D3" name="Lista Funções" />
        <Bar dataKey="ITP - Laços" fill="#FF0000" name="Lista Laços" />
        <Bar dataKey="ITP - Matriz - Lista" fill="#FF8C00" name="Lista Matriz" />
        <Bar dataKey="ITP - Ponteiros 1 - Lista" fill="#FFFF00" name="Lista Ponteiros 1" />
        <Bar dataKey="ITP - Ponteiros 2 - Lista" fill="#00BFFF" name="Lista Ponteiros 2" />
        <Bar dataKey="ITP - Recursão - Lista" fill="#FFDEAD" name="Lista Recursão" />
        <Bar dataKey="ITP - Strings - Lista" fill="#8A2BE2" name="Lista Strings" />
        <Bar dataKey="ITP - Structs e Enumerações - Lista" fill="#2F4F4F" name="Lista Structs e Enumerações" />

      </BarChart>
    </>
  );
}

export default App;
