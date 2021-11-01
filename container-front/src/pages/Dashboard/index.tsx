import React, { useCallback } from 'react';
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Tabs,
  Tab,
  Theme,
} from '@material-ui/core';
import clsx from 'clsx';
import Logo from '../../components/Logo';
import ClassCard from '../../components/ClassCard';
import Menu from '../../components/Menu';
import TabPanel from '../../components/TabPanel';
// import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
      boxShadow: 'unset',
    },
    container: {
      marginTop: '5em',
    },
    gridItem: {
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
        margin: '8px 8px 0px 0px',
      },
    },
    fonts: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '36px',
      fontStyle: 'normal',
      color: '#C0C0C0',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#00000026',
        color: '#373737',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 11,
      },
    },
    tabPanel: {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
  })
);

const App: React.FC = () => {
  // const location = useLocation();
  // Para usar os estilos nos componentes
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const a11yProps = useCallback((indexAlly: unknown) => {
    return {
      id: `full-width-tab-${indexAlly}`,
      'aria-controls': `full-width-tabpanel-${indexAlly}`,
    };
  }, []);

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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Paper className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChangeTabs}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab
                  label="Desempenho"
                  className={classes.fonts}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Gestão de tempo"
                  className={classes.fonts}
                  {...a11yProps(1)}
                />
                <Tab
                  label="Aprendizagem"
                  className={classes.fonts}
                  {...a11yProps(2)}
                />
              </Tabs>
            </Paper>
          </Grid>
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
        <TabPanel value={value} index={0}>
          <Paper className={classes.tabPanel}>
            <Grid item xs className={classes.gridItem}>
              <h1 className={classes.h1}>Listas</h1>
            </Grid>
          </Paper>
        </TabPanel>
      </Grid>
    </Container>
  );
};

export default App;
