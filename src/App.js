import './App.css';
import Home from "./pages/Home";
import Game from "./pages/Game";
import Team from "./pages/Team";
import Pokedex from "./pages/Pokedex";
import Admin from "./pages/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
