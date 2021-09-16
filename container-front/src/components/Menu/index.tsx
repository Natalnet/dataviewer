import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import React from 'react';
import home from '../../assets/home-solid.svg';
import users from '../../assets/users-solid.svg';
import signOut from '../../assets/sign-out.svg';

const useStyles = makeStyles(() =>
  createStyles({
    menu: {
      padding: '3px 6px 3px 6px',
      width: '11.6em',
      '&:hover': {
        backgroundColor: '#dddddd',
      },
    },
    grid: {
      marginTop: '5em',
    },
    h4: {
      margin: 8,
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 18,
      color: '#c0c0c0',
      width: 103,
      height: 24,
    },
    imgColor: {
      color: '#c0c0c0',
    },
  })
);
const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      className={classes.grid}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        item
        className={classes.menu}
      >
        <img src={home} alt="home" className={classes.imgColor} />
        <h4 className={classes.h4}>Dashboard</h4>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        item
        className={classes.menu}
      >
        <img src={users} alt="users" className={classes.imgColor} />
        <h4 className={classes.h4}>Turmas</h4>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        item
        className={classes.menu}
      >
        <img src={signOut} alt="Sign out" className={classes.imgColor} />
        <h4 className={classes.h4}>Sair</h4>
      </Grid>
    </Grid>
  );
};

export default App;
