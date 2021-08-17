import { Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';

const useStyles = makeStyles(() =>
  createStyles({
    name: {
      fontSize: '20px',
      lineHeight: '23px',
      color: '#273B73',
      fontWeight: 500,
      marginTop: 0,
      marginBottom: 0,
    },
    paper: {
      padding: 8,
      backgroundColor: '#FAFAFA',
      border: '2px solid #FAFAFA',
      borderRadius: '10px',
      width: '320px',
      height: '124px',
      fontFamily: 'Roboto',
      fontWeight: 500,
      '&:hover, &:focus': {
        border: '2px solid #248DF4',
        boxSizing: 'border-box',
      },
    },
    code: {
      color: '#9DB4F5',
      fontSize: '16px',
      lineHeight: '19px',
      marginTop: 0,
      marginBottom: 12,
    },
    informations: {
      color: '#373737',
      fontSize: '16px',
      lineHeight: '19px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);
interface Turma {
  name: string;
  code: string;
  year: number;
  students: number;
  semester: number;
  teachers: number;
  idTurma: string;
}

const App: React.FC<Turma> = ({
  name,
  code,
  year,
  students,
  semester,
  teachers,
  idTurma,
}: Turma) => {
  const classes = useStyles();
  const history = useHistory();
  const [graphs, setGraphs] = useState([]);
  const handleClick = async () => {
    setGraphs(await api.get(`/get_graphs_teacher/${idTurma}`));
    history.push('/dashboard', graphs);
  };

  return (
    <Container className={classes.paper} onClick={handleClick}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <h1 className={classes.name}>{name}</h1>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.code}>Code: {code}</p>
        </Grid>
        <Grid item xs={12} className={classes.informations}>
          <span>Ano: {year}</span>
          <span>Semestre: {semester}</span>
        </Grid>
        <Grid item xs={12} className={classes.informations}>
          <span>Alunos: {students}</span>
          <span>Professores: {teachers}</span>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
