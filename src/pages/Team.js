import Header from "../components/Header.js";
import Pokedex from "../pages/Pokedex.js";

  function Team() {
    if(window.user == undefined) {
      window.user = JSON.parse(localStorage.getItem('user'));
    }
    function Draw(){
      if(window.user != undefined && window.user.team != undefined){
        return(
          window.user.team.map((p) => {
            return(
            <div key={p._id}>
              <p>{p.name}</p>
            </div>
          )})
        )
      }
    }
    function PokemonCatch(){
      if(window.user != undefined && window.user.pokedex != undefined){
        return(
          window.user.team.map((p) => {
            return(
            <div key={p._id}>
              <p>{p.name}</p>
            </div>
          )})
        )
      }
    }

      return (
        <>
        <Header />
        <p>Team</p>
        <div>
        {Draw()}
        <p>pokemons attrapées</p>
        {PokemonCatch()}
        </div>
        </>
      );
    }
  
  export default Team;
