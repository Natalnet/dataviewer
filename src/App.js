import React from 'react';
import './App.css';

/* Components general */
import Container from './components/Container/Container';
import Card from './components/Card/Card';
import BigCard from './components/BigCard/BigCard';


function App() {
  return (
    <div className="App">
      <Container>
        <BigCard title="Desempenho geral" firstOption="Turma" secondOption="Alunos" />
        <Card title="Avisos" />
        <Card title="Nível de aprendizagem da turma" />
        <Card title="Gestão do tempo" firstOption="Turma" secondOption="Alunos" />
        <Card title="Ranking da turma" />
      </Container>
    </div>
  );
}

export default App;
