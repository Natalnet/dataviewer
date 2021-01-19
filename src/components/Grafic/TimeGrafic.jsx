import React from 'react';
import { CartesianGrid, Cell, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import time from '../../json/df_max_different_days_time.json'
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

export default function App() {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <ScatterChart
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="maxDifferentDays" name="Tempo de resolução em dias" />
        <YAxis type="number" dataKey="maxTime" name="Tempo máximo" unit="s" />
        <ZAxis type="category" dataKey="question" name="Questão" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Tempo de resolução de cada questão" data={time} fill="#8884d8">
          {
            time.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]}>{entry.question}</Cell>)
          }
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}