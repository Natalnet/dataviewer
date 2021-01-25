import React from 'react';
import Container from '../../components/Container/Container';
import Students from '../../components/Students';
import ViewChartTime from '../../components/ViewChart/ViewChartTime';
import { CardTime } from '../../components/BigCard/BigCard';
import {Box} from '@material-ui/core';
import { useState } from 'react';
import maxDayTime from '../../json/df_max_day_time.json';
import questionSecounds from '../../json/df_questions_secounds.json';
import maxDayTimeSubject from '../../json/classQuestionsMaxTimeAndDaysAttemptPerSubject.json';
import maxDayTimeDifficulty from '../../json/df_MaxConsuming.json';

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
      <CardTime title="Tempo de resolução nas listas"
        firstOption={option === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
        secondOption={option === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
        handleClick={handleClick}>
        {option === 1 ?
          <ViewChartTime dataQuestion={maxDayTime} dataSubmissions={questionSecounds}
          dataSubject={maxDayTimeSubject} dataDifficulty={maxDayTimeDifficulty} />
          :
          <Students />}
      </CardTime>
    </Container>
  );
}