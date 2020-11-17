import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import './style.css';
import list from '../../json/df_mediadif_2.json';


export default function App(props) {
  const [aluno, setAluno] = useState(list);


  useEffect(() => {
    setAluno(list.filter(item => item.Matrícula !== null && props.matricula.trim() === item.Matrícula.trim()));
  }, [props.matricula]);

  return (
    <>
      <BarChart
        width={700}
        height={170}
        data={aluno}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="difficulty" />
        <YAxis unit="%" />
        <Tooltip />
        <Legend />
        <Bar dataKey="mediaDificuldade" fill="#82ca9d" name="Média de dificuldade" />
      </BarChart>
    </>
  );
}