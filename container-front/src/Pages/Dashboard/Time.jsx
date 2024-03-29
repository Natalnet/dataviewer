import React from 'react';
import ViewChartTime from '../../components/ViewChart/ViewChartTime';
import { CardTime } from '../../components/BigCard/BigCard';
import { Box, Container,makeStyles } from '@material-ui/core';
import { useState } from 'react';
import maxDayTimeSubject from '../../json/classQuestionsMaxTimeAndDaysAttemptPerSubject.json';
import maxDayTimeDifficulty from '../../json/df_MaxConsuming.json';
import { useLocation } from 'react-router-dom';


const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default function App() {
  const classes = useStyles();
  const [option, setOption] = useState(1);
  const firstOption = "Turma";
  const secondOption = "Histograma";
  const location = useLocation();
  const { graphs } = location.state;
  //Retorna a tela de escolha do usuário, dentre Histograma e turma
  function handleClick(option) {
    if (option === firstOption)
      setOption(1);
    else
      setOption(2);
  }
  return (
    <Container className={classes.container} >
      <CardTime title="Tempo de resolução nas listas"
        firstOption={option === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
        secondOption={option === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
        handleClick={handleClick}>
        {option === 1 ?

          <ViewChartTime dataQuestion={graphs.GTTMDDL} dataSubmissions={graphs.GTTGQSQ}
            dataSubject={maxDayTimeSubject} dataDifficulty={maxDayTimeDifficulty} />
            : ''
            /*<Histogram dataList={graphs.GTDGL} dataSubject={graphs.GTDGA} dataDifficulty={graphs.GTDGD} />*/
        }
      </CardTime>
    </Container>
  );
}