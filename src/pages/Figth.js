import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getPokemonByNum } from "../api/getPokemons";
import Header from "../components/Header";

function Figth(props) {
      const [ pokemon, setPokemon ] = useState();
      const [ isEnd, setIsEnd ] = useState(false);
    
      useEffect(() => {
        const pokemonsFetched = getPokemonByNum(Math.floor(Math.random() * 905));
        pokemonsFetched
          .then(result => {
            setPokemon(result[0])
          })
          .catch(error=>console.error("Erreur avec notre API :", error.message));
      }, []);

  function catchPokemon(){
    props.user.pokedex.push(pokemon);
    setIsEnd(true);
  }

  if(isEnd){
    return( <Redirect to="/game" />)
  }
  
  if(pokemon != undefined && pokemon.length != 0){
    return (
      <>
      <Header />
      <div id="inf-container">
      <div>
          <img src={pokemon.sprites["front_default"]} />
      </div>
      <div>
          <img src={props.user.team[0].sprites["back_default"]} />
      </div>
      <div>
        <button onClick={e => catchPokemon()}>Capturer</button>
      </div>
      </div>
      </>
    );
  }
}

export default Figth;