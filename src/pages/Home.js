import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function Home() {
    return (
      <>
      <Header />
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