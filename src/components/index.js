import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './card/home';
import Header from './header/header';
import Post from './Posts';
import Todos from './Todos';
import SaveList from './Todos/SaveList';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={Home} />
    <Route exact path='/tareas' component={Todos} />
    <Route exact path='/tareas/guardar' component={SaveList} />
    <Route exact path='/tareas/guardar/:userId/:todoId' component={SaveList} />
    <Route exact path='/post/:key' component={Post} />
  </BrowserRouter>
)

export default App;
