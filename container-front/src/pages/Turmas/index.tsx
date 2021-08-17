/* eslint-disable camelcase */
import {
  Container,
  createStyles,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logoDataviewer from '../../assets/logo.svg';
import marcaDataviewer from '../../assets/marca.svg';
import Class from '../../components/Turma';

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      marginTop: '24px',
    },
    paper: {
      padding: '56px',
      backgroundColor: '#FAFAFA',
    },
    titulo: {
      color: '#4163BF',
      fontFamily: 'Poppins',
      fontWeight: 300,
      fontSize: '50px',
      margin: 0,
    },
    paragrafo: {
      color: '#C0C0C0',
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '16px',
      margin: 0,
    },
    selecao: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      color: '#373737',
    },
    filtrar: {
      fontSize: '18px',
      marginTop: '48px',
      lineHeight: '21px',
    },
    semestre: {
      fontSize: '16px',
      lineHeight: '19px',
    },
    limite: {
      maxHeight: '640px',
      overflow: 'scroll',
    },
  })
);
interface Turma {
  author: string;
  code: string;
  createdAt: string;
  email: string;
  id_class: string;
  id_teacher: string;
  name_class: string;
  name_teacher: string;
  semester: number;
  state: string;
  studentsCount: number;
  teachersCount: number;
  year: number;
}
const App: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const [quantidadeTurmas, setQuantidadeTurmas] = useState(0);
  const [turmas, setTurmas] = useState<Turma[]>([]);
  const history = useHistory();
  const [state, setState] = useState(false);
  // const [semester, setSemester] = useState<number[]>([]);
  useEffect(() => {
    if (location.state) {
      setTurmas(location.state as Turma[]);
      setQuantidadeTurmas(turmas.length);
      // setSemester();
      sessionStorage.setItem('turmas:Dataviewer', JSON.stringify(turmas));
    } else if (sessionStorage.getItem('turmas:Dataviewer')) {
      setTurmas(
        JSON.parse(
          sessionStorage.getItem('turmas:Dataviewer') as string
        ) as Turma[]
      );
    } else {
      history.push('/');
    }
  }, [location, history, turmas]);

  const handleChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.logo}>
          <img src={logoDataviewer} alt="nome dataviewer" />
          <img src={marcaDataviewer} alt="marca dataviewer" width="33.53" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={10} className={classes.logo}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div>
                  <h1 className={classes.titulo}>{quantidadeTurmas}</h1>
                  <p className={classes.paragrafo}>Turmas encontradas</p>
                </div>
                <div className={classes.selecao}>
                  <p className={classes.filtrar}>Filtrar por</p>
                  <span className={classes.semestre}>Semestre</span>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state}
                          onChange={handleChangeState}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="2020.1"
                    />
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state}
                          onChange={handleChangeState}
                          name="checkedA"
                          color="primary"
                        />
                      }
                      label="2021.1"
                    />
                  </div>
                </div>
                <div className={classes.selecao}>
                  <p className={classes.filtrar}>Ordenar por</p>
                  <span className={classes.semestre}>Semestre</span>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state}
                          onChange={handleChangeState}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="2020.1"
                    />
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state}
                          onChange={handleChangeState}
                          name="checkedA"
                          color="primary"
                        />
                      }
                      label="2021.1"
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={9}>
                <Grid container className={classes.limite}>
                  {turmas.map((turma) => (
                    <Grid item xs={6} key={turma.id_class}>
                      <Class
                        name={turma.name_class}
                        code={turma.code}
                        semester={turma.semester}
                        students={turma.studentsCount}
                        teachers={turma.teachersCount}
                        year={turma.year}
                        idTurma={turma.id_class}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
