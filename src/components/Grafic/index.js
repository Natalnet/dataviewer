import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Lista 01",
    Reprovados: 4000,
    Aprovados: 2400,
  },
  {
    name: "Lista 02",
    Reprovados: 3000,
    Aprovados: 1398,
  },
  {
    name: "Lista 03",
    Reprovados: 2000,
    Aprovados: 9800,
  },
  {
    name: "Lista 04",
    Reprovados: 2780,
    Aprovados: 3908,
  },
  {
    name: "Lista 05",
    Reprovados: 1890,
    Aprovados: 4800,
  },
  {
    name: "Lista 06",
    Reprovados: 2390,
    Aprovados: 3800,
  },
  {
    name: "Lista 07",
    Reprovados: 3490,
    Aprovados: 4300,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9hjfkp73/";

  render() {
    return (
      <BarChart
        width={700}
        height={200}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Aprovados" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Reprovados" stackId="b" fill="#F08080" />
        {/* <Bar dataKey="Prediação_de_Reprovados" fill="#ffc658" /> */}
      </BarChart>
    );
  }
}
