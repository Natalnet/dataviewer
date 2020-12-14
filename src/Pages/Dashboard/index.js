import React, { useState } from 'react';
/* Components general */
import Container from '../../components/Container/Container';
import BigCard from '../../components/BigCard/BigCard';
import ViewChart from '../../components/ViewChart/index';
import Students from "../../components/Students";

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
        <BigCard title="Desempenho nas listas" firstOption={firstOption}
          secondOption={secondOption} handleClick={handleClick}>
          { option === 1 ? <ViewChart /> : <Students /> }
        </BigCard>
        <BigCard title="Desempenho nas provas" firstOption={firstOption}
          secondOption={secondOption} handleClick={handleClickSecondCard}>
          { option2 === 1 ? <ViewChart /> : <Students /> }
        </BigCard>
        <BigCard title="Desempenho geral" firstOption={firstOption}
          secondOption={secondOption} handleClick={handleClickThirdCard}>
          { option3 === 1 ? <ViewChart /> : <Students /> }
        </BigCard>
      </Container>
    </div>
  );
}