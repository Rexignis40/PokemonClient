import React, { useEffect, useState } from "react";
import {getPokemonByName} from "../api/getPokemons.js";
import './Pokedex.css';
import Header from "../components/Header.js";
import './Team.css';
import {getPokemonByType} from "../api/getPokemonByType.js";

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
  },[search]);
  useEffect(() => { 
    const pokemonsFetched = getPokemonByType(search);
    pokemonsFetched
      .then(result => setType(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  
    },[type]);
  


    return (
      <>
      <Header />
      <div id="inf-container">
      <h1>Pokedex</h1>
      <input value={search} onChange={e => setSearch(e.target.value)}/>
      <label>Normal: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Fire: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Water: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Electric: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Grass: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Ice: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Figthting: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Poison: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Ground: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Flying: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Psychic: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Bug: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Rock: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Ghost: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Dragon: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Dark: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Steel: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <label>Fairy: <input type="checkbox" value={type} onChange={e => handleType(e)}/></label>
      <div className="pokedex">
      {pokemons.map((p) => {
        return(
        <div key={p._id} className="pokedex-info">
          <h3>{p.name}</h3>
          <p>{p.genera}</p>
          <img src={p.sprites["front_default"]} alt="" />
          <p>{p.num}</p>
        </div>
      )})}
      </div>
      </div>
      </>
    );
  }
export default Pokedex;
