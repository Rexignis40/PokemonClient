import Header from "../components/Header.js";
import React, { useEffect, useState } from "react";
import {getPokemonByName} from "../api/getPokemons.js";
import {DeletePokemon} from "../api/deletePokemon.js";
import {AddPokemon} from "../api/AddPokemons.js";

function Admin() {
    //Add pokemon
    const [name, setName] = useState("");
    const [type, setType] = useState([]);
    const [num, setNum] = useState("");

    function handleType(e){
        if(e.target.checked){
            type.push(e.target.value);
        }
        else{
            for( var i = 0; i < type.length; i++){ 
    
                if ( type[i] === e.target.value) { 
            
                    type.splice(i, 1); 
                }
            
            }
        }
    }

    const [search, setSearch] = useState("");
    const [ pokemons, setPokemons ] = useState([]);
  
    useEffect(() => {
      const pokemonsFetched = getPokemonByName(search);
      pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[search]);

    function handleSubmit(e){
        AddPokemon(name, type, num);
    }

    return (
        <>
        <Header />
        <h1>Admin</h1>
        <h2>Ajouter</h2>
        <form onSubmit={e => handleSubmit()}>
            <label>
                Name:
                <input value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>Normal: <input type="checkbox" value="normal" onChange={e => handleType(e)}/></label>
            <label>Fire: <input type="checkbox" value="fire" onChange={e => handleType(e)}/></label>
            <label>Water: <input type="checkbox" value="water" onChange={e => handleType(e)}/></label>
            <label>Electric: <input type="checkbox" value="electric" onChange={e => handleType(e)}/></label>
            <label>Grass: <input type="checkbox" value="grass" onChange={e => handleType(e)}/></label>
            <label>Ice: <input type="checkbox" value="ice" onChange={e => handleType(e)}/></label>
            <label>Figthting: <input type="checkbox" value="figthting" onChange={e => handleType(e)}/></label>
            <label>Poison: <input type="checkbox" value="poison" onChange={e => handleType(e)}/></label>
            <label>Ground: <input type="checkbox" value="ground" onChange={e => handleType(e)}/></label>
            <label>Flying: <input type="checkbox" value="flying" onChange={e => handleType(e)}/></label>
            <label>Psychic: <input type="checkbox" value="psychic" onChange={e => handleType(e)}/></label>
            <label>Bug: <input type="checkbox" value="bug" onChange={e => handleType(e)}/></label>
            <label>Rock: <input type="checkbox" value="rock" onChange={e => handleType(e)}/></label>
            <label>Ghost: <input type="checkbox" value="ghost" onChange={e => handleType(e)}/></label>
            <label>Dragon: <input type="checkbox" value="dragon" onChange={e => handleType(e)}/></label>
            <label>Dark: <input type="checkbox" value="adrk" onChange={e => handleType(e)}/></label>
            <label>Steel: <input type="checkbox" value="steel" onChange={e => handleType(e)}/></label>
            <label>Fairy: <input type="checkbox" value="fairy" onChange={e => handleType(e)}/></label>
            <label>
                Numéro:
                <input type="number" value={num} onChange={e => setNum(e.target.value)}/>
            </label>
            <input type="submit" value="Ajouter" />
        </form>
        <input value={search} onChange={e => setSearch(e.target.value)}/>
        <div>
        {pokemons.map((p) => {
          return(
          <div key={p._id}>
            <p>{p.name}</p>
            <p>{p.genera}</p>
            <img src={p.sprites["front_default"]} alt="" />
            <form onSubmit={e => DeletePokemon(p._id)}>
                <input type="submit" value="Supprimer" />
            </form>
          </div>
        )})}
      </div>
        </>
    );
  }
  
  export default Admin;