import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Telas/Login';
import Turmas from './Telas/Turmas';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      {/* RoutesPrivate é uma rota que está verificando se o token de acesso está disponível.
                       Caso não esteja, retorna para a rota de login. */}
      <Route path="/turmas" component={Turmas} />
      {/* <Route path="/Home" component={Home} /> */}
    </Switch>
  </Router>
);

export default App;
