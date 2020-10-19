import React from "react";
import styled from "styled-components";

/* Components General */
import { HeaderCard, TitleCard, Options, Option, Line } from "../Card/Card";

export const BigCard = styled.div`
  width: 56vw;
  margin-top: 5vh;
  min-width: 26vw;
  background: #fff;
  height: 40vh;
  border-radius: 15px;
  overflow: hidden;
`;

export default (props) => {
  /* Passei as props para uma variável para 
  *  não poluir muito o código 
  *  Autor: Rafael Franco
  */
  const firstOption = props.firstOption;
  const secondOption = props.secondOption;

  return (
    <BigCard>
      <HeaderCard>
        <TitleCard>{props.title}</TitleCard>
        <Options>
          {/*Estou executando a função passando o parâmetro desejado */}
          <Option onClick={() => props.handleClick(firstOption)}>
            {firstOption}
          </Option>
          <Line />
          <Option onClick={() => props.handleClick(secondOption)}>
            {secondOption}
          </Option>
        </Options>
      </HeaderCard>
      {props.children}   
    </BigCard>
  );
};
