import './App.css';
import Home from "./pages/Home";
import Game from "./pages/Game";
import Team from "./pages/Team";
import Pokedex from "./pages/Pokedex";
import Admin from "./pages/Admin";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Figth from './pages/Figth';
import Login from './pages/login';
import Register from './pages/Register';
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/figth">
          <Figth />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
