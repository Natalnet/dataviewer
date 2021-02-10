import React from "react";


/* Components General */
import { HeaderCard, TitleCard, Options, Option, Line } from "../Card";

import { BigCardTime } from './style';
import {
  Container,
  Paper,
  makeStyles
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%'
  },
  container: {
    marginTop: '2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    minWidth: '24em',
    width: '48em',
    minHeight: '30em',
    justifyContent: 'space-between'
  },
}));
export function Card(props) {
  const classes = useStyles();
  const firstOption = props.firstOption;
  const secondOption = props.secondOption;

  return (
    <Container className={classes.container} >
      <Paper className={classes.paper}>
        <HeaderCard >
          <TitleCard>{props.title}</TitleCard>
          {props.firstOption && props.secondOption ?
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
            : ''}
        </HeaderCard>
        {props.children}
      </Paper>
    </Container>
  );
};
export function CardTime(props) {

  const firstOption = props.firstOption;
  const secondOption = props.secondOption;

  return (
    <BigCardTime>
      <HeaderCard>
        <TitleCard>{props.title}</TitleCard>
        {props.firstOption && props.secondOption ?
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
          : ''}
      </HeaderCard>
      {props.children}
    </BigCardTime>
  );
};