import React, { useCallback } from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Tabs,
  Theme,
} from '@material-ui/core';
import Logo from '../../components/Logo';
import ClassCard from '../../components/ClassCard';
import Menu from '../../components/Menu';
import {
  ContainerRoot,
  GridItem,
  GridItemMD,
  GridContainer,
  GridContainer1,
  GridContainer2,
  PaperRoot,
  TabFonts,
  H1,
} from './styles';
import TabPanel from '../../components/TabPanel';
import Listas from '../../components/Listas';
// import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabPanel: {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      height: '24em',
      [theme.breakpoints.down('sm')]: {
        width: '23em',
        marginTop: '4%',
      },
    },
    tabPanelTests: {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      margin: '0.9% 0% 0% 21%',
      height: '24em',
      [theme.breakpoints.down('md')]: {
        margin: '0.9% 0% 0% 29%',
        width: '40em',
      },
      [theme.breakpoints.down('sm')]: {
        width: '23em',
        marginTop: '4%',
        position: 'relative',
        right: '4.1em',
      },
    },
    tabPanelRanking: {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      margin: '2% 1%',
      width: '26em',
      height: '24em',
      [theme.breakpoints.down('md')]: {
        margin: '2% 0% 0 75%',
        width: '14.5em',
      },
      [theme.breakpoints.down('sm')]: {
        width: '23em',
        marginTop: '4%',
        position: 'relative',
        right: '17.5em',
      },
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
    <ContainerRoot maxWidth="xl">
      <Grid container spacing={3}>
        <GridItem item xs>
          <Logo />
        </GridItem>
      </Grid>
      <GridContainer container>
        <GridItem item xs={1}>
          <Menu />
        </GridItem>
        <GridContainer1 item xs>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <PaperRoot>
              <Tabs
                value={value}
                onChange={handleChangeTabs}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <TabFonts label="Desempenho" {...a11yProps(0)} />
                <TabFonts label="Gestão de tempo" {...a11yProps(1)} />
                <TabFonts label="Aprendizagem" {...a11yProps(2)} />
              </Tabs>
            </PaperRoot>
          </Grid>
        </GridContainer1>
      </GridContainer>
      <GridContainer2 container>
        <GridItemMD
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          item
          xs={3}
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
        </GridItemMD>
        <TabPanel value={value} index={0}>
          <GridItem item>
            <Listas />
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={0}>
          <GridItem item>
            <Paper className={classes.tabPanelTests}>
              <H1>Provas</H1>
            </Paper>
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GridItem item>
            <Paper className={classes.tabPanel}>
              <H1>Submissão</H1>
            </Paper>
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GridItem item>
            <Paper className={classes.tabPanelTests}>
              <H1>Questões</H1>
            </Paper>
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GridItem item>
            <Paper className={classes.tabPanel}>
              <H1>Nível de aprendizagem da turma</H1>
            </Paper>
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GridItem item>
            <Paper className={classes.tabPanelTests}>
              <H1>Índice de Acertos e Erros</H1>
            </Paper>
          </GridItem>
        </TabPanel>
        <GridItem item>
          <Paper className={classes.tabPanelRanking}>
            <H1>Ranking</H1>
          </Paper>
        </GridItem>
      </GridContainer2>
    </ContainerRoot>
  );
};

export default App;
