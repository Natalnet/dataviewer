import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import data from '../../json/df_featured_questions';

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9hjfkp73/";

  render() {
    return (
      <ResponsiveContainer width={800} height="70%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assunto" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="altoRendimento" fill="#82ca9d" name="Alto Rendimento"/>
            
          <Bar dataKey="baixoRendimento" fill="#F08080" name="Baixo Rendimento"/>
          <Bar dataKey="faltosos" fill="#808080" name="Faltosos"/>
          {/* <Bar dataKey="Prediação_de_Reprovados" fill="#ffc658" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
