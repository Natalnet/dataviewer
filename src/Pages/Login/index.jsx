import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';
import StoreContext from '../../components/Store/Context';
import {
  Container,
  Typography,
  Link,
  List,
  ListItem,
  makeStyles,
  CssBaseline
} from '@material-ui/core';
import { FilterButton, FilterInput, FilterSpace } from '../../components/Students/style';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(24),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '2%'
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#467fcf',
    width: '100%'
  },
  text: {
    marginTop: theme.spacing(5),
    width: '100%',
    textAlign: 'center'
  },
  link: {
    color: '#495057',
  }
}));

export default function App() {
  const classes = useStyles();
  const [logins, setLogins] = useState([]);
  const history = useHistory();
  const { setToken } = useContext(StoreContext);
  const [names, setNames] = useState([]);

  useEffect(() => {
    api.get("/get_class").then(response => {
      setLogins(response.data);
      setNames(response.data.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.id_teacher === thing.id_teacher
        ))));
    });
  }
    , []);
  function handleClick(id) {
    const login = logins.filter(item => item.id_teacher !== null
      && item.id_teacher.trim() === id);
    if (login.length !== 0) {
      setToken(login[0].id_teacher);
      return history.push("/turmas", login);
    }
  }

  function handleChange(e) {
    let busca = e.target.value;
    if (busca !== '')
      setNames(names.filter(item => (item.name_teacher.toLowerCase().includes(busca.toLowerCase()))));
    else
      setNames(logins.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.id_teacher === thing.id_teacher
        ))));
  }
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.text} >
          <Typography component="h1" variant="h4">
            Olá, Professor(a)
          </Typography>
          <Typography component="h4" variant="h6">
            Poderia selecionar o seu nome dentre as opções abaixo?
          </Typography>
        </div>
        <FilterSpace>
          <FilterInput type="text" onChange={handleChange} placeholder="Digite seu nome para facilitar a busca" />
          <FilterButton className="fas fa-filter" />
        </FilterSpace>
        <List component="nav" className={classes.list} aria-label="Turmas">
          {names.map(item => (
            <ListItem key={item.id_teacher}>
              <Link component="button" onClick={() => handleClick(item.id_teacher)} className={classes.link} >
                {item.name_teacher}
              </Link>
            </ListItem>
          )
          )}
        </List>
      </div>
    </Container>
  );
}