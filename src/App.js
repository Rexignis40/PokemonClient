import './App.css';
import Home from "./pages/Home";
import Game from "./pages/Game";
import Team from "./pages/Team";
import Pokedex from "./pages/Pokedex";
import Admin from "./pages/Admin";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Figth from './pages/Figth';
function App() {
  
  const [user, setUser] = useState();

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser}/>
        </Route>
        <Route path="/game">
          <Game user={user} setUser={setUser}/>
        </Route>
        <Route path="/team">
          <Team user={user} setUser={setUser}/>
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/figth">
          <Figth user={user} setUser={setUser}/>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
