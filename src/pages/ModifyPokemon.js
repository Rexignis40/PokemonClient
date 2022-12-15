import { useState } from "react";
import { UpdatePokemon } from "../api/UpdatePokemon.js";

function ModifyPokemon(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState([]);
    const [num, setNum] = useState("");

    function handleType(e){
        if(e.target.checked){
            type.push(e.target.value);
        }
        else{
            for( var i = 0; i < type.length; i++){ 
    
                if (type[i] === e.target.value) { 
            
                    type.splice(i, 1); 
                }
            
            }
        }
    }

    function handleSubmit(e){
        let _name;
        let _type;
        let _num;
        if(name == "") _name = props.poke.name;
        else _name = name;
        if(num == "") _num = props.poke.num;
        else _num = num;
        if(type.length == 0) _type = props.poke.type;
        else _type = type;
        UpdatePokemon(props.poke.name , _name, _type, _num);
    }
    return (
      <>
      <div>
        <form onSubmit={e => handleSubmit()}>
            <label>Name: <input value={name} onChange={e => setName(e.target.value)}/></label>
            <label>Normal: <input type="checkbox" value="normal" onChange={e => handleType(e)}/></label>
            <label>Fire: <input type="checkbox" value="fire" onChange={e => handleType(e)}/></label>
            <label>Water: <input type="checkbox" value="water" onChange={e => handleType(e)}/></label>
            <label>Electric: <input type="checkbox" value="electric" onChange={e => handleType(e)}/></label>
            <label>Grass: <input type="checkbox" value="grass" onChange={e => handleType(e)}/></label>
            <label>Ice: <input type="checkbox" value="ice" onChange={e => handleType(e)}/></label>
            <label>Figthting: <input type="checkbox" value="fighting" onChange={e => handleType(e)}/></label>
            <label>Poison: <input type="checkbox" value="poison" onChange={e => handleType(e)}/></label>
            <label>Ground: <input type="checkbox" value="ground" onChange={e => handleType(e)}/></label>
            <label>Flying: <input type="checkbox" value="flying" onChange={e => handleType(e)}/></label>
            <label>Psychic: <input type="checkbox" value="psychic" onChange={e => handleType(e)}/></label>
            <label>Bug: <input type="checkbox" value="bug" onChange={e => handleType(e)}/></label>
            <label>Rock: <input type="checkbox" value="rock" onChange={e => handleType(e)}/></label>
            <label>Ghost: <input type="checkbox" value="ghost" onChange={e => handleType(e)}/></label>
            <label>Dragon: <input type="checkbox" value="dragon" onChange={e => handleType(e)}/></label>
            <label>Dark: <input type="checkbox" value="dark" onChange={e => handleType(e)}/></label>
            <label>Steel: <input type="checkbox" value="steel" onChange={e => handleType(e)}/></label>
            <label>Fairy: <input type="checkbox" value="fairy" onChange={e => handleType(e)}/></label>
            
            <label>Numéro: <input type="number" value={num} onChange={e => setNum(e.target.value)}/></label>
            
            <input type="submit" value="Modifier" />
        </form>
      </div>
      </>
    );
  }

  export default ModifyPokemon;