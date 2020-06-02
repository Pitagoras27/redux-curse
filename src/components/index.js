import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './card/home';
import Header from './header/header';

const Prueba = () => <div>hola</div>

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={Home} />
    <Route exact path='/tareas' component={Prueba} />
  </BrowserRouter>
)

export default App;
