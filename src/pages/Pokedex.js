import React, { useEffect, useState } from "react";
import {getPokemonByName} from "../api/getPokemons.js";
import './Pokedex.css';
import Header from "../components/Header.js";
import './Team.css';
import {getType} from "../api/getType.js";

function Pokedex() {
  const [search, setSearch] = useState("");
  const [ pokemons, setPokemons ] = useState([]);
  const [type, setType] = useState([]);

  function handleType(e){
    if(e.target.checked){
        type.get(e.target.value);
    }
    else{
        for( var i = 0; i < type.length; i++){ 

            if ( type[i] === e.target.value) { 
        
                type.splice(i, 1); 
            }
        
        }
    }
  }

  useEffect(() => {
    const pokemonsFetched = getPokemonByName(search);
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
    const typesFetched = getType(type);
    typesFetched
      .then(result => setType(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[search, type]);
  


    return (
      <>
      <Header />
      <div id="inf-container">
      <h1>Pokedex</h1>
      <input value={search} onChange={e => setSearch(e.target.value)}/>
      <label>Normal: <input type="checkbox" value="normal" onChange={e => handleType(e.target.value)}/></label>
      <label>Fire: <input type="checkbox" value="fire" onChange={e => handleType(e.target.value)}/></label>
      <label>Water: <input type="checkbox" value="water" onChange={e => handleType(e.target.value)}/></label>
      <label>Electric: <input type="checkbox" value="electric" onChange={e => handleType(e.target.value)}/></label>
      <label>Grass: <input type="checkbox" value="grass" onChange={e => handleType(e.target.value)}/></label>
      <label>Ice: <input type="checkbox" value="ice" onChange={e => handleType(e.target.value)}/></label>
      <label>Figthting: <input type="checkbox" value="fighting" onChange={e => handleType(e.target.value)}/></label>
      <label>Poison: <input type="checkbox" value="poison" onChange={e => handleType(e.target.value)}/></label>
      <label>Ground: <input type="checkbox" value="ground" onChange={e => handleType(e.target.value)}/></label>
      <label>Flying: <input type="checkbox" value="flying" onChange={e => handleType(e.target.value)}/></label>
      <label>Psychic: <input type="checkbox" value="psychic" onChange={e => handleType(e.target.value)}/></label>
      <label>Bug: <input type="checkbox" value="bug" onChange={e => handleType(e.target.value)}/></label>
      <label>Rock: <input type="checkbox" value="rock" onChange={e => handleType(e.target.value)}/></label>
      <label>Ghost: <input type="checkbox" value="ghost" onChange={e => handleType(e.target.value)}/></label>
      <label>Dragon: <input type="checkbox" value="dragon" onChange={e => handleType(e.target.value)}/></label>
      <label>Dark: <input type="checkbox" value="dark" onChange={e => handleType(e.target.value)}/></label>
      <label>Steel: <input type="checkbox" value="steel" onChange={e => handleType(e.target.value)}/></label>
      <label>Fairy: <input type="checkbox" value="fairy" onChange={e => handleType(e.target.value)}/></label>
      <div className="pokedex">
      {pokemons.map((p) => {
        return(
        <div key={p._id} className="pokedex-info">
          <h3>{p.name}</h3>
          <p>{p.genera}</p>
          <img src={p.sprites["front_default"]} alt="" />
          <p>{p.num}</p>
          <p className="divider">~~~~~~~</p>
        </div>
      )})}
      </div>
      </div>
      </>
    );
  }
export default Pokedex;
