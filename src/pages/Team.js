import Header from "../components/Header.js";
import { getPokemonByName } from "../api/getPokemons";


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
      if(window.user != undefined && window.user.team != undefined){
        return(
          window.user.pokedex.map((p) => {
            return(
            <div key={p._id}>
              <p>{p.name}</p>
            </div>
          )})
        )
      }
    }
    
      function AddTeam(e){
        if( window.user.team.lenght < 5){
          getPokemonByName(e.target.value).then((pok) =>{
            window.user.pokedex.push({
              name: pok[0].name
            });
          } 
        )}
      }

      return (
        <>
        <Header />
        <p>Team</p>
        <div>
        {Draw()}
        <p>pokemons attrapées</p>
        {PokemonCatch()}
        <button onClick={e => AddTeam(e)}>Ajouter à la team</button>
        </div>
        </>
      );
    }
  
  export default Team;
