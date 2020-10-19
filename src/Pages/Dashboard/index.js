import React, { useState } from 'react';
/* Components general */
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import BigCard from '../../components/BigCard/BigCard';

import Grafic from "../../components/Grafic";

export default function Dashboard() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <Container>
        <BigCard title="Desempenho geral" firstOption="Turma" secondOption="Alunos">
          <Grafic />
        </BigCard>
        <Card title="Avisos" />
        <Card title="Nível de aprendizagem da turma" />
        <Card title="Gestão do tempo" firstOption="Turma" secondOption="Alunos" />
        <Card title="Ranking da turma" />
      </Container>
    </div>
  );
}