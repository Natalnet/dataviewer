import React from 'react';
import { Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import MenuContainer from '../../components/MenuContainer';
import Logo from '../../components/Logo';
import ClassCard from '../../components/ClassCard';
// import { useLocation } from 'react-router-dom';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: '5em',
    },
  })
);

const App: React.FC = () => {
  // const location = useLocation();
  // Para usar os estilos nos componentes
  const classes = useStyles();
  // console.log(location.state);
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={3}>
        <Logo />
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={10} className={classes.container}>
          <MenuContainer />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
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
    </Container>
  );
};

export default App;
