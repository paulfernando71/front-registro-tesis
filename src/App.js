import React from 'react';
import './App.css';

import Login from './Components/Login';
import Register from './Components/Register';
import Update from './Components/Update';
import Thesis from './Components/Thesis';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/thesis" component={Thesis} />
          <Redirect component={Login} to="/login" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
