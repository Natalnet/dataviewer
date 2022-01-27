import React, { useCallback, useState } from 'react';
import {
  FormControl,
  Grid,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';
import { H1 } from '../../pages/Dashboard/styles';
import Grafic from '../Grafic';
import moreLess from '../../assets/json/graph_more_less_list_class.json';
// import { useLocation } from 'react-router-dom';

// Criando estilo de input próprio
const BootstrapInput = withStyles((tema: Theme) =>
  createStyles({
    root: {
      marginRight: '1.5em',
      'label + &': {
        marginTop: tema.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: tema.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: tema.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);

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
  })
);

const App: React.FC = () => {
  // const location = useLocation();
  // Para usar os estilos nos componentes
  const classes = useStyles();
  const [value, setValue] = useState('Turma');
  const handleChangeValueSelect = useCallback(() => {
    if (value === 'Turma') setValue('Alunos');
    else setValue('Turma');
  }, [value]);

  return (
    <Paper className={classes.tabPanel}>
      <H1>Listas</H1>
      <Grid
        container
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <FormControl variant="filled">
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={value}
            input={<BootstrapInput />}
            onChange={handleChangeValueSelect}
          >
            <MenuItem value="Alunos">Alunos</MenuItem>
            <MenuItem value="Turma">Turma</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grafic
        data={moreLess}
        dataKeyX="shortTitle"
        dataKeyBar0="more"
        fill0="#07DB47"
        nameBar0="Bom Desempenho"
        dataKeyBar1="less"
        fill1="#DB2927"
        nameBar1="Baixo Desempenho"
        dataKeyBar2="missing"
        fill2="#124375"
        nameBar2="Faltosos"
        dataKeyBar3={undefined}
        fill3={undefined}
        nameBar3={undefined}
        yUnit={undefined}
      />
    </Paper>
  );
};

export default App;
