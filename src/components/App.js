import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Users';
import Publications from './Publications';

const App = (props) => (
  <BrowserRouter>
    <Menu />
    <div id='margen'>
      <Route exact path='/' component={Usuarios} />
      <Route exact path='/publicaciones/:key' component={Publications} />
    </div>
  </BrowserRouter>
);

export default App;
