import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  makeStyles,
  List,
  ListItem,
  Link,
  Button
} from '@material-ui/core'
import api from '../../utils/api';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5%'
  },
  list: {
    width: '100%',
    maxWidth: 360,
  },
  text: {
    margin: theme.spacing(4, 0, 2),
    width: '100%',
    textAlign: 'center'
  },
  link: {
    color: '#495057',
  }
}));
/* Esta é a classe de sequência do "Login", onde é possível visualizar as turmas
   relacionadas ao professor escolhido. */
export default function App(props) {
  //Para utilizar o makeStyles.
  const classes = useStyles();
  //Essa variável é para recuperar o que foi passado pelo history como parâmetro.
  const location = useLocation();
  //Guardando as turmas passadas em uma variável.
  const turmas = location.state;
  //Para navegar entre as telas.
  const history = useHistory();

  useEffect(() => {
    //Caso não tenha nenhum dado de turma, não há como apresentar. Então ele retorna ao login.
    if (!location.state) {
      history.push("/login");
    }
  }, [location.state, history])
  function handleClick(id) {
    //Buscando os json's da api, relacionado a aquela turma específica.
    api.get(`/get_graphs/${id}`).then(response => {
      //Salvando todos os gráficos
      const graphs = response.data;
      //Passando os gráficos para a próxima tela.
      history.push('/', graphs);
    });
  }
  //Caso o usuário queira retornar a tela inicial para escolher outro professor,
  //é possível pelo botão. Pensado para o mobile.
  function handleBack() {
    history.push('/login');
  }
  return (
    <div>
      <Container>
        <Button onClick={handleBack}>Retornar para escolher professor</Button>
      </Container>
      <Container component="main" maxWidth="xs" className={classes.paper}>
        <Typography className={classes.text} component="h1" variant="h4">
          Escolha uma turma para a gente começar
      </Typography>
        <List component="nav" className={classes.list} aria-label="Turmas">
          {turmas.map(item => (
            <ListItem key={item.id_class}>
              <Link component="button" onClick={() => handleClick(item.id_class)} className={classes.link} >
                {item.name_class}
              </Link>
            </ListItem>
          )
          )}
        </List>
      </Container>
    </div>
  );
}
