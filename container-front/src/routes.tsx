import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Turmas from './pages/Turmas';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      {/* RoutesPrivate é uma rota que está verificando se o token de acesso está disponível.
                       Caso não esteja, retorna para a rota de login. */}
      <Route path="/turmas" component={Turmas} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
