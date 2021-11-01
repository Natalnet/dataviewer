import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const useStyles = makeStyles(() =>
  createStyles({
    menu: {
      padding: '3px 6px 3px 6px',
      width: '11.6em',
      '& svg': {
        color: '#c0c0c0',
        fontSize: 25,
        marginTop: 8,
      },
      '&:hover': {
        backgroundColor: '#dddddd',
        '& h4, svg': {
          color: '#248DF4',
        },
      },
    },
    grid: {
      marginTop: '5em',
    },
    h4: {
      margin: '8px 8px 8px 0px',
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
    link: {
      textDecoration: 'none',
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
        <FaHome />
        <h4 className={classes.h4}>Dashboard</h4>
      </Grid>
      <Link to="/turmas" className={classes.link}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          item
          className={classes.menu}
        >
          <FaUsers />
          <h4 className={classes.h4}>Turmas</h4>
        </Grid>
      </Link>
      <Link to="/" className={classes.link}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          item
          className={classes.menu}
        >
          <FaSignOutAlt />
          <h4 className={classes.h4}>Sair</h4>
        </Grid>
      </Link>
    </Grid>
  );
};

export default App;
