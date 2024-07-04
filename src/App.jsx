import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/picturesshoes.css";
import "./styles/descriptionshoes.css";

import NavBar from "./components/NavBar";
import PicturesShoes from "./components/PicturesShoes";
import DescriptionShoes from "./components/DescriptionShoes";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <PicturesShoes />
        <DescriptionShoes />
      </main>
    </>
  );
}

export default App;
