import React, { useState } from 'react';
/* Components general */
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import BigCard from '../../components/BigCard/BigCard';

import Grafic from "../../components/Grafic";
import Students from "../../components/Students";

export default function Dashboard() {
  /* Estou usando useState para mudar o conteúdo
  *  da variável e com isso mudar a tela de exibição.
  *  Autor: Rafael Franco
  */
 const [option, setOption] = useState(1);
 // Quando as outras telas forem criadas é só repetir 
 // o ternário com esse option2
 // Autor: Rafael Franco
 const [option2, setOption2] = useState(1);
 const firstOption = "Turma";
  const secondOption = "Alunos";
  // Essa função só retorna a tela escolhida para exibir
  // Autor: Rafael Franco
  function handleClick(option) {
    if (option === firstOption) 
      setOption(1);
    else
      setOption(2);
  }
  /*Fiz uma segunda função com a mesma lógica para o segundo card
  * Caso vocês consigam diminuir mais a linha de código resumindo 
  * em só uma função, fica melhor.
  * Autor: Rafael Franco
  */
  function handleClickSecondCard(option) {
    if (option === firstOption)
      setOption2(1);
    else
      setOption2(2);
  }
  return (
    <div>
      <Container>
        {/*Estou passando a função como props */}
        <BigCard title="Desempenho geral" firstOption={firstOption}
          secondOption={secondOption} handleClick={handleClick}>
          {/* Estou utilizando um if ternário que diminui 
          *   a poluição do código
          *   Autor: Rafael Franco
          */
            option === 1 ?
              <Grafic /> :
              <Students />
          }
        </BigCard>
        <Card title="Avisos" />
        <Card title="Nível de aprendizagem da turma" />
        <Card title="Gestão do tempo" firstOption={firstOption} 
        secondOption={secondOption} handleClick={handleClickSecondCard}/>
        <Card title="Ranking da turma" />
      </Container>
    </div>
  );
}