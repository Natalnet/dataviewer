import React, { useState } from 'react';
/* Components general */
import Container from '../../components/Container/Container';
import { Card } from '../../components/BigCard/BigCard';
import ViewChart from '../../components/ViewChart/index';
import Students from "../../components/Students";
import { Box } from '@material-ui/core'
import { useLocation } from 'react-router-dom';

/* Aqui é a classe que gerencia os json's e apresenta-os na tela como gráficos.
   Possuem mais 2 subclasses, ViewChart que é relacionado aos gráficos de turma
   e Students para os gráficos por aluno. */
export default function Dashboard(props) {
  const location = useLocation();
  const {graphs} = location.state;
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
          <ViewChart moreLess={graphs.GENL} dataKeyX={"shortTitle"}
            performance={graphs.GTAL} byDifficulty={graphs.GTDL} />
          :
          <Students mediaList={graphs.media_GTNL} dataKeyX={"shortTitle"}
            dataKeyBar={"medialist"} name={"Média da lista"}
            performance={graphs.GTNL} bySubject={graphs.GEAL} byDifficulty={graphs.GEDL}
            type={"lista"} students={graphs.media_GEAL} mediaDifficulty={graphs.media_GEDL}
          />}
      </Card>
       {graphs.GENP[0].test !== undefined ? 
      <Card title="Desempenho nas provas"
        firstOption={option2 === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
        secondOption={option2 === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
        handleClick={handleClickSecondCard}>
        {option2 === 1 ?
          <ViewChart moreLess={graphs.GENP} dataKeyX={"test"}
            performance={graphs.GTAP} byDifficulty={graphs.GTDP} />
          :
          <Students mediaList={graphs.media_GTNP} dataKeyX={"test"} dataKeyBar={"mediatest"} name={"Média do teste"}
            performance={graphs.GTNP} bySubject={graphs.GEAP} byDifficulty={graphs.GEDP}
            type={"prova"} students={graphs.media_GEAP} mediaDifficulty={graphs.media_GEDP}
          />}
      </Card>
       : ''}
      {/* <Card title="Desempenho geral"
          firstOption={option3 === 1 ? <Box fontWeight="fontWeightBold">{firstOption}</Box> : firstOption}
          secondOption={option3 === 2 ? <Box fontWeight="fontWeightBold">{secondOption}</Box> : secondOption}
          handleClick={handleClickThirdCard}>
          {option3 === 1 ? <ViewChart /> : <Students />}
        </Card>*/}
    </Container>
  );
}