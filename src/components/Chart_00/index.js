import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Estrutura Condicional', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Algoritmos', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Laços', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Operadores', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Vetores', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Matrizes', A: 65, B: 85, fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    );
  }
}
