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
    name: "Semana 01",
    Reprovados: 4000,
    Aprovados: 2400,
    Prediação_de_Reprovados: 2400,
  },
  {
    name: "Semana 02",
    Reprovados: 3000,
    Aprovados: 1398,
    Prediação_de_Reprovados: 2210,
  },
  {
    name: "Semana 03",
    Reprovados: 2000,
    Aprovados: 9800,
    Prediação_de_Reprovados: 2290,
  },
  {
    name: "Semana 04",
    Reprovados: 2780,
    Aprovados: 3908,
    Prediação_de_Reprovados: 2000,
  },
  {
    name: "Semana 05",
    Reprovados: 1890,
    Aprovados: 4800,
    Prediação_de_Reprovados: 2181,
  },
  {
    name: "Semana 06",
    Reprovados: 2390,
    Aprovados: 3800,
    Prediação_de_Reprovados: 2500,
  },
  {
    name: "Semana 07",
    Reprovados: 3490,
    Aprovados: 4300,
    Prediação_de_Reprovados: 2100,
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
        <Bar dataKey="Reprovados" stackId="a" fill="#8884d8" />
        <Bar dataKey="Aprovados" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Prediação_de_Reprovados" fill="#ffc658" />
      </BarChart>
    );
  }
}
