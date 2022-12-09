import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function Home() {
    return (
      <>
      <Header />
      <img src="https://www.pokepedia.fr/images/a/ab/Sprite_194_2_XY.png?20170628164058" alt="Axoloto gif"/>
      <img src="https://www.pokepedia.fr/images/3/36/Sprite_037_XY.png?20141211152652" alt="Goupix gif"/>
      <img src="https://www.pokepedia.fr/images/d/d3/Sprite_548_XY.png?20140404232603" alt="Axoloto gif"/>
      <p>Home</p>
      <object type="audio/ogg" data="../src/img/pokemon.mp3">
      <param name="autostart" value="true" />
      <param name="loop" value="true" />
      </object>
      <Footer />
      </>
    );
  }

  export default Home;