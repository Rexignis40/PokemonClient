import Header from "../components/Header.js";
import { getPokemonByName } from "../api/getPokemons";


  function Team(props) {
    if(props.user == undefined) {
      props.setUser(JSON.parse(localStorage.getItem('user')));
    }
    function Draw(){
      if(props.user != undefined && props.user.team != undefined){
        return(
          props.user.team.map((p) => {
            return(
            <div key={p._id}>
              <p>{p.name}</p>
            </div>
          )})
        )
      }
    }
    function PokemonCatch(){
      if(props.user != undefined && props.user.team != undefined){
        return(
          props.user.pokedex.map((p) => {
            return(
            <div key={p._id}>
              <p>{p.name}</p>
            </div>
          )})
        )
      }
    }
    
      function AddTeam(e){
        if(props.user.team.lenght < 5){
          getPokemonByName(e.target.value).then((pok) =>{
            props.user.pokedex.push({
              name: pok[0].name
            });
          } 
        )}
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
