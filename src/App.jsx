import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/picturesshoes.css";

import { useState } from "react";

import NavBar from "./components/NavBar";
import PicturesShoes from "./components/PicturesShoes";

function App() {
  const [pictureIndex, setPictureIndex] = useState(0);

  const picturesList = [
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/6ffb430c75684971bedcb5780812b39b/250d192186204b40af5a3dde6b8638fa.jpg?imwidth=1800&filter=packshot",
      imgAlt: "sneakers 1",
    },
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/9493dcbd4ba34f248970c71e23bdf411/31056d77f6334644a49e3328684b0bd0.jpg?imwidth=1800",
      imgAlt: "sneakers 2",
    },
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/d1af88562d56401badd0c6bbe1cdc82b/6ba23cbb61154a3997544bec8543a059.jpg?imwidth=1800",
      imgAlt: "sneakers 3",
    },
    {
      imgSrc:
        "https://img01.ztat.net/article/spp-media-p1/0c139df2194a402794d654ab29627455/bf96e816d9eb49748fe7491d5f597468.jpg?imwidth=1800",
      imgAlt: "sneakers 4",
    },
  ];

  return (
    <>
      <NavBar />
      <main>
        <PicturesShoes />
      </main>
    </>
  );
}

export default App;
