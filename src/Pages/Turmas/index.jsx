import React from 'react';
import { useLocation } from 'react-router-dom';
//import api from '../../utils/api';
//import { useHistory } from 'react-router-dom';

export default function App(props) {
  const location = useLocation();
  const turmas = location.state;
  return (
    <div>
      <h1>Escolha uma turma para a gente começar</h1>
      {turmas.map(item => (
        <div key={item.id_class}>
          <a href="#a">
            {item.name_class}
          </a>
          <br />
        </div>
      )
      )}
    </div>
  );
}
