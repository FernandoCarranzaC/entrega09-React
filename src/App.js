import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Catalogo from './components/Catalogo';
import Instructores from './components/Instructores';
import Estudiantes from './components/Estudiantes';
import Grupos from './components/Grupos';
import Inscripciones from './components/Inscripciones';
import Constancias from './components/Constancias';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Menu}/>
        <Route path="/catalogo" exact component = { Catalogo }/>
        <Route path="/instructores" exact component = {Instructores}/>
        <Route path="/estudiantes" exact component = {Estudiantes}/>
        <Route path="/grupos" exact component = {Grupos}/>
        <Route path="/inscripciones" exact component = {Inscripciones}/>
        <Route path="/constancias" exact component = {Constancias}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
