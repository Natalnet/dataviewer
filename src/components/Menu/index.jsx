import React, { useState, useEffect } from 'react';
import ClassIcon from '@material-ui/icons/Class';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Dashboard from '../../Pages/Dashboard'
import DashboardTime from '../../Pages/Dashboard/Time'
import Container from '../Container/Container';
import { Button, Tabs, Tab, makeStyles } from '@material-ui/core';
import Media from '../../components/Media'
import TabPanel from './TabPanel';
import api from '../../utils/api';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  tab: {
    flexGrow: 1,
    maxWidth: 700,
    marginTop: 20,
  }
});

export default function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [logins, setLogins] = useState([]);
  const location = useLocation();
  const history = useHistory();
  
  const [mediaList, setList] = useState([]);
  const [mediaTest, setTest] = useState([]);
  const [moreLessList, setMoreLessList] = useState([]);
  const [moreLessTest, setMoreLessTest] = useState([]);

  useEffect(() => {
    api.get("/get_class").then(response => {
      setLogins(response.data);
    });
    if (!location.state) {
      return history.push("/login");
    }
    setList(location.state.GTNL);
    setTest(location.state.GTNP);
    setMoreLessList(location.state.GENL);
    setMoreLessTest(location.state.GENP);
  }, [history, location.state])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleBack() {
    const id = sessionStorage.getItem('token').replace('"', '').replace('"', '');
    const login = logins.filter(item => item.id_teacher !== null
      && item.id_teacher.trim() === id.trim());
    history.push('/turmas', login);
  }

  return (
    <>
      <Container>
        <Button onClick={handleBack} >Retornar para selecionar turmas</Button>
        <Media />
      </Container>
      <Container>
          <Tabs className = {classes.tab}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
          >
            <Tab icon={<ClassIcon />} aria-label="phone" />
            <Tab icon={<AccessTimeIcon />} aria-label="favorite" />
          </Tabs>
      </Container>
        <TabPanel value={value} index={0}>
          <Dashboard GTNL={mediaList} GTNP={mediaTest} GENL={moreLessList}
            GENP={moreLessTest} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DashboardTime />
        </TabPanel>
    </>
  );
}