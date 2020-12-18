import React, { useState } from 'react';
/* Components general */
import Container from '../../components/Container/Container';
import BigCard from '../../components/BigCard/BigCard';
import ViewChart from '../../components/ViewChart/index';
import Students from "../../components/Students";
import { Box } from '@material-ui/core'


import studentsList from '../../json/df_student_practice_mean_performance_all_subjects.json';
import performanceList from '../../json/graph_performance_student_list.json';
import performanceTest from '../../json/graph_performance_student_test.json';
import bySubjectList from '../../json/df_student_practice_mean_performance_by_subject.json';
import studentsTest from '../../json/df_student_test_mean_performance_all_subjects.json';
import bySubjectTest from '../../json/df_student_test_mean_performance_by_subject.json';

import moreLessList from '../../json/graph_more_less_list_class.json';
import moreLessTest from '../../json/graph_more_less_test_class.json'
import performanceSubject from '../../json/df_featured_practice_subjects.json';
import performanceSubjectTest from '../../json/df_class_test_mean_performance_by_subject.json'
import aprovDisaprovList from '../../json/df_aprov_disaprov_listas.json';
import aprovDisaprovTest from '../../json/df_aprov_disaprov_provas.json';

import byDifficultyList from '../../json/df_student_averagebyDifficulty_list.json';
import byDifficultyTest from '../../json/df_student_averagebyDifficulty_test.json';
import mediaDifficultyList from '../../json/df_averageAllDifficulty_list.json';
import mediaDifficultyTest from '../../json/df_averageAllDifficulty_test.json';
import mediaMeanList from '../../json/df_student_practice_mean_performance_all_subjects.json';
import mediaMeanTest from '../../json/df_student_test_mean_performance_all_subjects.json';

import mediaList from '../../json/graph_performance_student_list.json';
import mediaTest from '../../json/graph_performance_student_test.json';

export default function Dashboard() {

  const [option, setOption] = useState(1);
  const [option2, setOption2] = useState(1);
  const [option3, setOption3] = useState(1);
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
  function handleClickThirdCard(option) {
    if (option === firstOption)
      setOption3(1);
    else
      setOption3(2);
  }

  return (
    <div>
      <Container>
        <BigCard title="Desempenho nas listas" firstOption={option === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
          secondOption={option === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption} handleClick={handleClick}>
          {option === 1 ?
            <ViewChart moreLess={moreLessList} dataKeyX={"list"} dataKeyBar0={"highPerformance"}
            nameBar0={'Alto Rendimento'}  dataKeyBar1={'lowPerformance'}
            fill1={'#F08080'} nameBar1={'Baixo Rendimento'}
            dataKeyBar2={'faltosos'} fill2={'#808080'} nameBar2={'Faltosos'}
            performance={performanceSubject} byDifficulty={aprovDisaprovList} 
            />
            :
            <Students students={studentsList} dataKeyX={"list"} dataKeyBar={"medialist"} name={"Média da lista"}
              performance={performanceList} bySubject={bySubjectList} byDifficulty={byDifficultyList} 
              type={"lista"} media={mediaList} mediaMean={mediaMeanList} mediaDifficulty={mediaDifficultyList}/>}
        </BigCard>
        <BigCard title="Desempenho nas provas" firstOption={option2 === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
          secondOption={option2 === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption} handleClick={handleClickSecondCard}>
          {option2 === 1 ?
            <ViewChart moreLess={moreLessTest} dataKeyX={"test"} dataKeyBar0={"classMean"}
              nameBar0={'Média da turma'}
              performance={performanceSubjectTest} byDifficulty={aprovDisaprovTest} />
            :
            <Students students={studentsTest} dataKeyX={"test"} dataKeyBar={"mediatest"} name={"Média do teste"}
              performance={performanceTest} bySubject={bySubjectTest} byDifficulty={byDifficultyTest} 
              type={"prova"} media={mediaTest} mediaMean={mediaMeanTest} mediaDifficulty={mediaDifficultyTest}/>}
        </BigCard>
        <BigCard title="Desempenho geral" firstOption={option3 === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
          secondOption={option3 === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption} handleClick={handleClickThirdCard}>
          {option3 === 1 ? <ViewChart /> : <Students />}
        </BigCard>
      </Container>
    </div>
  );
}