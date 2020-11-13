import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  /*Cell,*/
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import data from '../../json/df_aprov_diff_7.json';

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9hjfkp73/";

  render() {
    return (
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
        <XAxis dataKey="difficulty" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="aprovados" stackId="a" fill="#82ca9d" name="Aprovados" />
        <Bar dataKey="reprovados" stackId="b" fill="#F08080" name="Reprovados" />
        <Bar dataKey="faltosos" fill="#808080" name="Faltosos"/>
        {/* <Bar dataKey="Prediação_de_Reprovados" fill="#ffc658" /> */}
      </BarChart>
    );
  }
}
