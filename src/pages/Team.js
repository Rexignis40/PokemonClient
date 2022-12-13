import Header from "../components/Header.js";
import { getPokemonByName } from "../api/getPokemons";


  function Team() {
    if(window.user == undefined) {
      window.user = JSON.parse(localStorage.getItem('user'));
    }
    function Draw(){
      if(window.user != undefined && window.user.team != undefined){
        return(
          window.user.team.map((p, index) => {
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
      if(window.user != undefined && window.user.team != undefined){
        return(
          window.user.pokedex.map((p, index) => {
            if(p.id == window.user.team[p.id]) {
              return(
              <div>
                <p>{p.name}</p>
                <button onClick={e => AddTeam(e)} value={index}>Ajouter à la team</button>
              </div>
            )
          }})
        )
      }
    }
    
      function AddTeam(e){
        if( window.user.team.length < 6){
          console.log(e.target.value);
          window.user.pokedex.map((p) =>{
            console.log(p);
          })
            window.user.team.push(window.user.pokedex[e.target.value]);
          } 
      }

      function RemoveTeam(e) {
        if( window.user.team.length > 1){
          window.user.team.splice(e.target.value, 1);
        }
      }

      return (
        <>
        <Header />
        <h2>Ma team :</h2>
        <div>
        {Draw()}
        <h2>Pokemons attrapées :</h2>
        {PokemonCatch()}
        </div>
        </>
      );
    }
  
  export default Team;
