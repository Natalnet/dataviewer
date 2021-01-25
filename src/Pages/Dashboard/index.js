import React, { useState } from 'react';
/* Components general */
import Container from '../../components/Container/Container';
import { Card } from '../../components/BigCard/BigCard';
import ViewChart from '../../components/ViewChart/index';
import Students from "../../components/Students";
import { Box } from '@material-ui/core'

import studentsList from '../../json/df_student_practice_mean_performance_all_subjects.json';
import studentsTest from '../../json/df_student_test_mean_performance_all_subjects.json';
import mediaDifficultyList from '../../json/df_averageAllDifficulty_list.json';
import mediaDifficultyTest from '../../json/df_averageAllDifficulty_test.json';
import mediaMeanList from '../../json/df_student_practice_mean_performance_all_subjects.json';

import mediaMeanTest from '../../json/df_student_test_mean_performance_all_subjects.json';
import mediaAllMeanList from '../../json/df_class_practice_mean_performance_by_subject.json'
import mediaAllMeanTest from '../../json/df_class_test_mean_performance_by_subject.json'
import mediaAllDifficultyList from '../../json/df_classAverage_list.json'
import mediaAllDifficultyTest from '../../json/df_classAverage_test.json'
import { useLocation } from 'react-router-dom';


export default function Dashboard(props) {
  const location = useLocation();
  const graphs = location.state;
  const [option, setOption] = useState(1);
  const [option2, setOption2] = useState(1);
  //const [option3, setOption3] = useState(1);
  const firstOption = "Turma";
  const secondOption = "Alunos";
  function handleClick(option) {
    if (option === firstOption)
      setOption(1);
    else
      setOption(2);
  }
  function handleClickSecondCard(option) {
    if (option === firstOption)
      setOption2(1);
    else
      setOption2(2);
  }

  // function handleClickThirdCard(option) {
  //   if (option === firstOption)
  //     setOption3(1);
  //   else
  //     setOption3(2);
  // }

  return (
    <Container>
      <Card title="Desempenho nas listas"
        firstOption={option === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
        secondOption={option === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
        handleClick={handleClick}>
        {option === 1 ?
          <ViewChart moreLess={graphs.GENL} dataKeyX={"list"}
            performance={graphs.GTAL} byDifficulty={graphs.GTDL} />
          :
          <Students students={studentsList} dataKeyX={"list"} dataKeyBar={"medialist"} name={"Média da lista"}
            performance={graphs.GTNL} bySubject={graphs.GEAL} byDifficulty={graphs.GEDL}
            type={"lista"} mediaMean={mediaMeanList} mediaDifficulty={mediaDifficultyList}
            mediaAllMean={mediaAllMeanList} mediaAllDifficulty={mediaAllDifficultyList}
          />}
      </Card>
      <Card title="Desempenho nas provas"
        firstOption={option2 === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
        secondOption={option2 === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
        handleClick={handleClickSecondCard}>
        {option2 === 1 ?
          <ViewChart moreLess={graphs.GENP} dataKeyX={"test"}
            performance={graphs.GTAP} byDifficulty={graphs.GTDP} />
          :
          <Students students={studentsTest} dataKeyX={"test"} dataKeyBar={"mediatest"} name={"Média do teste"}
            performance={graphs.GTNP} bySubject={graphs.GEAP} byDifficulty={graphs.GEDP}
            type={"prova"} mediaMean={mediaMeanTest} mediaDifficulty={mediaDifficultyTest}
            mediaAllMean={mediaAllMeanTest} mediaAllDifficulty={mediaAllDifficultyTest}
          />}
      </Card>
      {/* <Card title="Desempenho geral"
          firstOption={option3 === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
          secondOption={option3 === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
          handleClick={handleClickThirdCard}>
          {option3 === 1 ? <ViewChart /> : <Students />}
        </Card>*/}
    </Container>
  );
}