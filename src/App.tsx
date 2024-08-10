import "./App.css";
import FavoriteTrack from "./components/FavoriteTrack";
import Hamster from "./components/hamster/Hamster";
// import LogInButton from "./components/LogInButton";

function App() {
  return (
    <>
      <h1>Favorite Track</h1>
      <section id="track">
        <FavoriteTrack></FavoriteTrack>
        <Hamster></Hamster>
        {/* <LogInButton></LogInButton> */}
      </section>
    </>
  );
}

export default App;
