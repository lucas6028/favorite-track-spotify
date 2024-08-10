// import FavoriteTrack from "./FavoriteTrack";
import Hamster from "./hamster/Hamster";
import LogInButton from "./LogInButton";

function Home() {
  return (
    <>
      <h1>Favorite Track</h1>
      <section id="track">
        {/* <FavoriteTrack></FavoriteTrack> */}
        <Hamster></Hamster>
        <LogInButton></LogInButton>
      </section>
    </>
  );
}

export default Home;
