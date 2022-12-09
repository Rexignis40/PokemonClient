import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
        </ul>
    </nav>
    </>
  );
}

export default Header;
