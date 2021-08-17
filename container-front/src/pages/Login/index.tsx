/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputBase,
  CssBaseline,
} from '@material-ui/core';
import { AxiosResponse } from 'axios';
import logo from '../../assets/logo.svg';
import marca from '../../assets/marca.svg';
import caminho from '../../assets/caminho.svg';
import dataviewer from '../../assets/dataviewer.svg';
import api from '../../utils/api';
import Button from '../../components/Button';

// tema da tela de login
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#E3ECFE',
        },
      },
    },
  },
});
// Criando estilo de input próprio
const BootstrapInput = withStyles((tema: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: tema.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: tema.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: tema.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);
// Definindo estilos de componentes
const useStyles = makeStyles((tema: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: '#FAFAFA',
      width: '470px',
      height: '605px',
      borderRadius: '10.7392px',
      marginTop: '128px',
    },
    h1: {
      fontFamily: 'Roboto',
      fontSize: '48px',
      fontWeight: 500,
      marginTop: '128px',
      marginBottom: '8px',
      color: '#373737',
      lineHeight: '56px',
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: '21px',
      fontWeight: 400,
      marginTop: '0px',
      marginBottom: '156px',
      color: '#373737',
      lineHeight: '25px',
      width: '578px',
      height: '122px',
    },
    logo: {
      marginTop: '24px',
    },
    imgLogo: {
      marginTop: '72px',
    },
    selection: {
      marginTop: '40px',
    },
    margin: {
      margin: tema.spacing(1),
      width: '368px',
      height: '40px',
    },
  })
);

// Tipando os dados recebidos pelo servidor
interface ServerResponse {
  data: ServerData[];
}
// Dados que são usados no projeto
interface ServerData {
  id_teacher: string;
  name_teacher: string;
  name_class: string;
  id_class: string;
}

const App: React.FC = () => {
  // Para usar os estilos nos componentes
  const classes = useStyles();
  // Para todos os dados do servidor
  const [logins, setLogins] = useState<ServerData[]>([]);
  // Para selecionar o professor
  const [id_teacher, setIdTeacher] = React.useState('');
  // Para navegar entre telas
  const history = useHistory();
  // Para os nomes dos professores
  const [names, setNames] = useState<ServerData[]>([]);

  useEffect(() => {
    // Requisitando a api os dados de turmas
    api.get('/get_classes').then((response): AxiosResponse<ServerResponse> => {
      // Guardando a resposta da requisição para utilizar posteriormente
      setLogins(response.data);
      // Iterando sobre os id's dos professores para retirar os dados iguais,
      // evitando duplicação.
      setNames(
        response.data.filter(
          (thing: { id_teacher: string }, index: number, self: ServerData[]) =>
            index ===
            self.findIndex(
              (t: { id_teacher: string }) => t.id_teacher === thing.id_teacher
            )
        )
      );
      return response;
    });
  }, []);

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
    // Salvando o id para uso do select
    setIdTeacher(event.target.value as string);
  }
  function handleClick(id: string) {
    // Utilizado dos dados guardados posteriormente para salvar o token.
    // Comparando o id do professor clicado com a variável global.
    const login = logins.filter(
      (item) => item.id_teacher !== null && item.id_teacher.trim() === id
    );
    // O resultado desse filtro é um conjunto de turmas com o mesmo professor
    if (login.length !== 0) {
      // Como preciso somente do id do professor para salvar como token,
      // coloco o primeiro resultado
      // setToken(login[0].id_teacher);
      // Passando as turmas para a próxima tela.
      history.push('/turmas', login);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.logo}>
            <img src={logo} alt="Dataviewer" />
            <img src={marca} alt="Marca dataviewer" width="33.53" height="29" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 className={classes.h1}>Data Viewer</h1>
            <p className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <img src={caminho} alt="Caminho" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Paper className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.imgLogo}
                >
                  <img src={dataviewer} alt="Dataviewer marca" />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.selection}
                >
                  <FormControl variant="filled" className={classes.margin}>
                    <InputLabel id="demo-simple-select-filled-label">
                      Escolha um Professor
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={id_teacher}
                      input={<BootstrapInput />}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {names.map((item: ServerData) => (
                        <MenuItem key={item.id_teacher} value={item.id_teacher}>
                          {item.name_teacher}
                        </MenuItem>
                      ))}
                    </Select>
                    <Button onClick={() => handleClick(id_teacher)}>
                      Entrar
                    </Button>
                  </FormControl>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
