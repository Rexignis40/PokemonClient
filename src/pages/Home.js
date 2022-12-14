import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "./Home.css";

function Home(props) {

  function DeleteSave(){
    props.setUser(undefined);
  }

    return (
      <>
      <Header />
      <div>
        <img className="starter" src="https://www.pokebip.com/pokedex-images/ecarlate-violet/300/194.png?t=1" alt="Axoloto gif"/>
        <img className="starter" src="https://www.pokepedia.fr/images/archive/3/36/20140122020927%21Sprite_037_XY.png" alt="Goupix gif"/>
        <img className="starter" src="https://www.pokebip.com/pokedex-images/ecarlate-violet/300/548.png?t=1" alt="Chlorobule gif"/>
      <h1>Home</h1>
      <button onClick={e => DeleteSave()}>Suprimer save</button>
      </div>
      <Footer />
      </>
    );
  }

  export default Home;