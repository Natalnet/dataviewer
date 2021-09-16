import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    name: {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#124375',
      marginTop: 0,
      marginBottom: 0,
    },
    paper: {
      padding: 16,
      backgroundColor: '#FAFAFA',
      width: '12em',
      height: '24em',
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontStyle: 'normal',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      margin: '0px 8px 0px 0px',
    },
    code: {
      color: '#96B9FF',
      fontSize: '12px',
      lineHeight: '18px',
      marginTop: 0,
      marginBottom: 12,
    },
    informations: {
      color: '#373737',
      fontSize: '12px',
      lineHeight: '18px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    assiduos: {
      fontWeight: 300,
      fontSize: '48px',
      lineHeight: '72px',
      color: '#124375',
    },
    texto: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#c0c0c0',
    },
    faltosos: {
      fontWeight: 300,
      fontSize: '48px',
      lineHeight: '72px',
      color: '#96B9FF',
    },
  })
);
interface CardClass {
  name: string;
  code: string;
  year: number;
  students: number;
  semester: number;
  teachers: number;
  assiduos: number;
  faltosos: number;
}
const App: React.FC<CardClass> = ({
  name,
  code,
  year,
  students,
  semester,
  teachers,
  assiduos,
  faltosos,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <h1 className={classes.name}>{name}</h1>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.code}>Code: {code}</p>
        </Grid>
        <Grid item xs={12} className={classes.informations}>
          <span>Ano: {year}</span>
        </Grid>
        <Grid item xs={12} className={classes.informations}>
          <span>Semestre: {semester}</span>
        </Grid>
        <Grid item xs={12} className={classes.informations}>
          <span>Alunos: {students}</span>
        </Grid>
        <Grid item xs={12} className={classes.informations}>
          <span>Professores: {teachers}</span>
        </Grid>
        <Grid item xs={12} className={classes.assiduos}>
          <span>{assiduos}</span>
        </Grid>
        <Grid item xs={12} className={classes.texto}>
          <span>Alunos assíduos</span>
        </Grid>
        <Grid item xs={12} className={classes.faltosos}>
          <span>{faltosos}</span>
        </Grid>
        <Grid item xs={12} className={classes.texto}>
          <span>Alunos faltosos</span>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
