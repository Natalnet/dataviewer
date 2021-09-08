import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logo.svg';
import marca from '../../assets/marca.svg';

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      marginTop: '24px',
    },
  })
);
const App: React.FC = () => {
  // Para usar os estilos nos componentes
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.logo}>
      <img src={logo} alt="Dataviewer" />
      <img src={marca} alt="Marca dataviewer" width="33.53" height="29" />
    </Grid>
  );
};

export default App;
