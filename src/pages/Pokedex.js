import Header from "../components/Header.js";
import React, { useEffect, useState } from "react";
import {getPokemonByName} from "../api/getPokemons.js";

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
      <p>Pokedex</p>
      <input value={search} onChange={e => setSearch(e.target.value)}/>
      <div>
      {pokemons.map((p) => {
        return(
        <div key={p._id}>
          <p>{p.name}</p>
          <p>{p.genera}</p>
          <img src={p.sprites["front_default"]} alt="" />
        </div>
      )})}
    </div>
      </>
    );
  }
  
  export default Pokedex;
  