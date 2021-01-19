import React from 'react';
import Container from '../../components/Container/Container';
import Students from '../../components/Students';
import TimeGrafic from '../../components/Grafic/TimeGrafic'
import BigCard from '../../components/BigCard/BigCard';
import {Box} from '@material-ui/core';
import { useState } from 'react';
export default function App() {
  const [option, setOption] = useState(1);
  const firstOption = "Turma";
  const secondOption = "Alunos";
  function handleClick(option) {
    if (option === firstOption)
      setOption(1);
    else
      setOption(2);
  }
  return (
    <Container>
      <BigCard title="Desempenho nas listas"
        firstOption={option === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
        secondOption={option === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
        handleClick={handleClick}>
        {option === 1 ?
          <TimeGrafic />
          :
          <Students />}
      </BigCard>
    </Container>
  );
}