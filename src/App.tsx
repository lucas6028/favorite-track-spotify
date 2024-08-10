import "./App.css";
import FavoriteTrack from "./components/FavoriteTrack";
import Hamster from "./components/hamster/Hamster";
// import LogInButton from "./components/LogInButton";

function App() {
  return (
    <>
      <h1>Favorite Track</h1>
      <section id="track">
        {/* <h2>
          Track's name: <span id="displayName"></span>
        </h2>
        <span id="img"></span>
        <ul>
          <li>
            Artist: <span id="artist"></span>
          </li>
          <li>
            Track ID: <span id="id"></span>
          </li>
          <li>
            Spotify URI: <a id="uri" href="#"></a>
          </li>
          <li>
            Link: <a id="url" href="#"></a>
          </li>
          <li>
            Album's Image: <span id="imgUrl"></span>
          </li>
        </ul> */}
        <FavoriteTrack></FavoriteTrack>
        <Hamster></Hamster>
        {/* <LogInButton></LogInButton> */}
      </section>
    </>
  );
}

export default App;
