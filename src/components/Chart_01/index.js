import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
 /* Cell,*/
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import data from '../../json/df_less_more_70.json';

export default class Example extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      grafic: 1
    }
  }

  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9hjfkp73/";

  renderGrafic(value) {
    //Verificar se a bolinha do checkbox foi marcada
    this.setState({
      grafic: value
    });
  }


  render() {
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
          <XAxis dataKey="list"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="more70" fill="#82ca9d" name="Bom Desempenho"/>
          <Bar dataKey="less70" fill="#F08080" name="Baixo Desempenho"/>
          {/* <Bar dataKey="Prediação_de_Reprovados" fill="#ffc658" /> */}
        </BarChart>
      </>
    );
  }
}
