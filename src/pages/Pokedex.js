import React, { useEffect, useState } from "react";
import {getPokemonByName} from "../api/getPokemons.js";
import './Pokedex.css';
import Header from "../components/Header.js";
import './Team.css';


function Pokedex() {
  const [search, setSearch] = useState("");
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    const pokemonsFetched = getPokemonByName(search);
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[search]);
  

    return (
      <>
      <Header />
      <div id="inf-container">
      <h1>Pokedex</h1>
      <input value={search} onChange={e => setSearch(e.target.value)}/>
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
