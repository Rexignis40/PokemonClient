import { useEffect, useState } from "react";
import Header from "../components/Header.js";

  function Team(props) {
    const [action,setAction] = useState(0);
    function Draw(){
      if(props.user != undefined && props.user.team != undefined){
        return(
          props.user.team.map((p, index) => {
            return(
            <div key={p._id}>
              <img src={p.sprites["front_default"]} alt="pokemon"></img>
              <p>{p.name}</p>
              <button onClick={e => RemoveTeam(e)} value={index}>Supprimer de la team</button>
            </div>
          )})
        )
      }
    }
    function PokemonCatch(){
      if(props.user != undefined && props.user.team != undefined){
        return(
          props.user.pokedex.map((p, index) => {
              return(
              <div>
                <p>{p.name}</p>
                <button onClick={e => AddTeam(e)} value={index}>Ajouter à la team</button>
              </div>
            )
          })
        )
      }
    }
    
      function AddTeam(e){
        if(props.user.team.length < 6){
          let newUser = props.user;
          newUser.team.push(props.user.pokedex[e.target.value]);
          newUser.pokedex.splice(e.target.value, 1);
          props.setUser(newUser);
          setAction(action+1)
          }
      }

      function RemoveTeam(e) {
        if(props.user.team.length > 1){
          let newUser = props.user;
          newUser.pokedex.push(props.user.team[e.target.value]);
          newUser.team.splice(e.target.value, 1);
          props.setUser(newUser);
          setAction(action+1)
        }
      }


      return (
        <>
        <Header />
        <div id="inf-container">
          <h1>Team</h1>
          <div>
          {Draw()}
          <h2>pokemons attrapées</h2>
          {PokemonCatch()}
          </div>
        </div>
        </>
      );
    }
  
  export default Team;
