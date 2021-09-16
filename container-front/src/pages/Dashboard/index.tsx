import React from 'react';
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import clsx from 'clsx';
import MenuContainer from '../../components/MenuContainer';
import Logo from '../../components/Logo';
import ClassCard from '../../components/ClassCard';
import Menu from '../../components/Menu';
// import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: '5em',
    },
    gridItem: {
      padding: '12px 0px 0px 0px !important',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        justifyContent: 'center',
      },
    },
    gridContainer: {
      [theme.breakpoints.down('sm')]: {
        maxHeight: '24em',
      },
      maxHeight: '10em',
    },
    gridContainer2: {
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    menu: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 21,
      color: '#c0c0c0',
    },
    h1: {
      margin: 0,
      fontSize: 20,
      fontFamily: 'Roboto',
      textAlign: 'center',
    },
    gridItemMD: {
      zIndex: -1,
      [theme.breakpoints.down('md')]: {
        margin: '0px 8px 0px 112px',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '0px 8px 0px 0px',
      },
    },
  })
);

const App: React.FC = () => {
  // const location = useLocation();
  // Para usar os estilos nos componentes
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs className={classes.gridItem}>
          <Logo />
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={1} className={classes.gridItem}>
          <Menu />
        </Grid>
        <Grid item xs className={classes.container}>
          <MenuContainer />
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer2}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          item
          xs={3}
          className={clsx(classes.gridItem, classes.gridItemMD)}
        >
          <ClassCard
            name="TURMA 0317a LIP"
            code="31513"
            year={2020}
            students={15}
            semester={2}
            teachers={10}
            assiduos={8}
            faltosos={7}
          />
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <Paper>
            <h1 className={classes.h1}>Listas</h1>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
