import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './styles.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    boxShadow: 'unset',
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
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChangeTabs}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Desempenho" className={classes.fonts} />
        <Tab label="Gestão de tempo" className={classes.fonts} />
        <Tab label="Aprendizagem" className={classes.fonts} />
      </Tabs>
    </Paper>
  );
};

export default App;
