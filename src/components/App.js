import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Users';
import Publications from './Publications';
import Homeworks from './Homeworks';
import SaveHomework from './Homeworks/Save';

const App = (props) => (
  <BrowserRouter>
    <Menu />
    <div id='margen'>
      <Route exact path='/' component={Usuarios} />
      <Route exact path='/publicaciones/:key' component={Publications} />
      <Route exact path='/tareas' component={Homeworks} />
      <Route exact path='/tareas/guardar' component={SaveHomework} />
    </div>
  </BrowserRouter>
);

export default App;
