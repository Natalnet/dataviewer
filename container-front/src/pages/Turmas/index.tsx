import {
  Container,
  createStyles,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Class from '../../components/Turma';
import Logo from '../../components/Logo';
// import api from '../../services/api';

// Estilização da página
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
// Dados recebidos do backend
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
  // Variável para adicionar estilo aos componentes
  const classes = useStyles();
  // Essa variável recebe os dados do history passados na tela de login
  const location = useLocation();
  // Serve para mostrar a quatidade de turmas na tela
  const [quantidadeTurmas, setQuantidadeTurmas] = useState(0);
  // Os dados das turmas são guardados aqui
  const [turmas, setTurmas] = useState<Turma[]>([]);
  // Usado para navegação entre telas
  const history = useHistory();
  // Serve para definir o estado dos checkbox
  const [checkbox, setStateCheckbox] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });
  // Pegando os dados da api
  // const [graphs, setGraphs] = useState([]);
  useEffect(() => {
    // Caso haja turmas para acessar, então ele mostra a tela,
    // caso não haja, ele redireciona para a tela de login.
    if (location.state) {
      // Salvando as turmas passadas pelo history
      setTurmas(location.state as Turma[]);
      // Salvando a quantidade de turmas
      setQuantidadeTurmas(turmas.length);
      // Salvando na sessão os dados de turmas,
      // caso feche o navegador esses dados são deletados.
      sessionStorage.setItem('turmas:Dataviewer', JSON.stringify(turmas));
    } else if (sessionStorage.getItem('turmas:Dataviewer')) {
      // Salvando as turmas que foram guardadas na sessão
      setTurmas(
        JSON.parse(
          sessionStorage.getItem('turmas:Dataviewer') as string
        ) as Turma[]
      );
      setQuantidadeTurmas(turmas.length);
    } else {
      // Redirecionando o usuário para a tela inicial
      history.push('/');
    }
  }, [location.state, history, turmas]);

  // Modificando o estado da variável booleana
  const handleChangeStateCheckbox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStateCheckbox({
        ...checkbox,
        [event.target.name]: event.target.checked,
      });
    },
    [checkbox]
  );
  const handleClickCard = async () => {
    // setGraphs(await api.get(`/get_graphs_teacher/${idTurma}`));
    history.push('/dashboard');
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Logo />
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
                          checked={checkbox.checkedA}
                          onChange={handleChangeStateCheckbox}
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
                          checked={checkbox.checkedB}
                          onChange={handleChangeStateCheckbox}
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
                          checked={checkbox.checkedC}
                          onChange={handleChangeStateCheckbox}
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
                          checked={checkbox.checkedD}
                          onChange={handleChangeStateCheckbox}
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
                    <Grid
                      item
                      xs={6}
                      key={turma.id_class}
                      onClick={handleClickCard}
                    >
                      <Class
                        name={turma.name_class}
                        code={turma.code}
                        semester={turma.semester}
                        students={turma.studentsCount}
                        teachers={turma.teachersCount}
                        year={turma.year}
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
