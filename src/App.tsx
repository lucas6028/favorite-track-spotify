import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FavoriteTrack from "./components/FavoriteTrack";
// import Hamster from "./components/hamster/Hamster";
import Home from "./components/Home";
import HelloWorld from "./components/test/HelloWorld";
// import LogInButton from "./components/LogInButton";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/favTrack"
            element={<FavoriteTrack></FavoriteTrack>}
          ></Route>
          <Route path="/helloworld" element={<HelloWorld></HelloWorld>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
