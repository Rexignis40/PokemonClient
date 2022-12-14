import Header from "../components/Header.js";
import { getPokemonByName } from "../api/getPokemons";


  function Team(props) {
    if(props.user == undefined) {
      props.setUser(JSON.parse(localStorage.getItem('user')));
    }
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
            if(p.id == props.user.team[p.id]) {
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
        if(props.user.team.length < 6){
          props.user.team.push(props.user.pokedex[e.target.value]);
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
        <div id="inf-container">
          <h1>Team</h1>
          <div>
          {Draw()}
          <h2>pokemons attrapées</h2>
          {PokemonCatch()}
          <button onClick={e => AddTeam(e)}>Ajouter à la team</button>
          </div>
        </div>
        </>
      );
    }
  
  export default Team;
