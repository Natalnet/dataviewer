import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';
import StoreContext from '../../components/Store/Context';
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  CssBaseline
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(24),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '5%'
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
  }
}));

export default function App() {
  const classes = useStyles();
  const [logins, setLogins] = useState();
  const history = useHistory();
  const [id, setId] = useState('');
  const { setToken } = useContext(StoreContext);

  useEffect(() => {
    api.get("/get_class").then(response => setLogins(response.data));
  }
    , []);

  function handleChange(e) {
    setId(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const login = logins.filter(item => item.id_teacher !== null
      && item.id_teacher.trim() === id.trim());
    if (login.length !== 0) {
      setToken(id);
      return history.push("/turmas", login);
    }
    setId('');
  }
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.text} >
          <Typography component="h1" variant="h4">
            Olá, Professor
          </Typography>
          <Typography component="h4" variant="h6">
            Poderia nos informar o seu id no campo abaixo?
          </Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit} >
          <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            name="id_professor"
            autoFocus
            onChange={handleChange} />
          <Button type="submit" className={classes.submit}>Enviar</Button>
        </form>
      </div>
    </Container>
  );
}