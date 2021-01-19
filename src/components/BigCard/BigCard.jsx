import React from "react";


/* Components General */
import { HeaderCard, TitleCard, Options, Option, Line } from "../Card";

import { BigCard } from './style';

export default (props) => {

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
