import React, { useState } from 'react';

import MenuChart from '../MenuChart/index';
import Lists from '../Lists';
import Grafic from '../Lists/Mean';
import Chart4 from '../Chart_04/index';


export default function App({ dataQuestion, dataSubmissions, dataSubject, dataDifficulty }) {
  const [chart, setChart] = useState('Lista');
  function viewChart(value) {
    setChart(value);
  }
  return (
    <>
      <MenuChart viewChart={viewChart} name1={'Lista'}
        name2={'Assunto'} name3={'Dificuldade'} name4={'Prediction'} />

      {chart === 'Lista' ?
        <Lists dataQuestion={dataQuestion} dataSubmissions={dataSubmissions} />
        : chart === 'Assunto' ?
          <Grafic dataQuestion={dataSubject} />
          : chart === 'Dificuldade' ?
            <Grafic dataQuestion={dataDifficulty} />
            :
            <Chart4 />
      }
    </>
  );
}