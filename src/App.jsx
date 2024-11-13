import React from "react";

import "./styles/App.css"
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Article } from "./components/article/article.jsx";

import Img1 from "./assets/imagens/Img1.jpg"
import Img2 from "./assets/imagens/Img2.jpg"
import Img3 from "./assets/imagens/Img3.jpg"
import Img4 from "./assets/imagens/Img4.jpg"
import Img5 from "./assets/imagens/Img5.jpg"
import Img6 from "./assets/imagens/Img6.jpg"
import Img7 from "./assets/imagens/Img7.jpg"
import Img8 from "./assets/imagens/Img8.jpg"
import Img9 from "./assets/imagens/Img9.jpg"
import Img10 from "./assets/imagens/Img10.jpg"

export class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article
            title="Nebulosa de Órion"
            provider="NASA"
            description="A Nebulosa de Órion é uma das regiões de formação estelar mais conhecidas e ativas da nossa galáxia. Está situada na espada da constelação de Órion, a aproximadamente 1.344 anos-luz da Terra."
            thumbnail={Img1}
          />

          <Article
            title="Nebulosa do Olho de Deus"
            provider="NASA"
            description="A Nebulosa do Olho de Deus, também conhecida como Nebulosa Hélix, é uma nebulosa planetária localizada na constelação de Aquário, a aproximadamente 650 anos-luz da Terra."
            thumbnail={Img2}
          />

          <Article
            title="Nebulosa do Caranguejo"
            provider="NASA"
            description="A Nebulosa do Caranguejo é o remanescente de uma supernova que foi observada na Terra em 1054 d.C. por astrônomos chineses e outros observadores. Ela está localizada na constelação de Touro, a cerca de 6.500 anos-luz da Terra."
            thumbnail={Img3}
          />

          <Article
            title="Galáxia de Andrômeda (M31)"
            provider="NASA"
            description="A galáxia espiral mais próxima da Via Láctea e a maior da nossa vizinhança galáctica. Está a cerca de 2,537 milhões de anos-luz da Terra e é visível a olho nu no céu noturno."
            thumbnail={Img4}
          />

          <Article
            title="Supernovas"
            provider="NASA"
            description="Explosões estelares que ocorrem no fim da vida de estrelas massivas. Uma supernova pode brilhar mais do que uma galáxia inteira por um curto período e é fundamental para a dispersão de elementos pesados pelo universo."
            thumbnail={Img5}
          />

          <Article
            title="Aglomerados Globulares"
            provider="NASA"
            description="Concentrações esféricas de estrelas antigas, como o Aglomerado de Hércules (M13), que contém centenas de milhares de estrelas e é um dos mais brilhantes no hemisfério norte.
"
            thumbnail={Img6}
          />

          <Article
            title="Quasares"
            provider="NASA"
            description="Núcleos de galáxias distantes que emitem quantidades enormes de energia. Alimentados por buracos negros supermassivos, são alguns dos objetos mais luminosos do universo."
            thumbnail={Img7}
          />

          <Article
            title="Pilares da Criação"
            provider="NASA"
            description="Estruturas de gás e poeira na Nebulosa da Águia (M16), fotografadas pelo Telescópio Espacial Hubble. São regiões onde novas estrelas estão se formando."
            thumbnail={Img8}
          />

          <Article
            title="Buracos Negros"
            provider="NASA"
            description="Regiões do espaço onde a gravidade é tão forte que nada, nem mesmo a luz, pode escapar. O buraco negro supermassivo no centro da Via Láctea, Sagitário A*, é um exemplo fascinante."
            thumbnail={Img9}
          />

          <Article
            title="Via Láctea"
            provider="NASA"
            description="Nossa galáxia, um vasto sistema espiral que contém bilhões de estrelas, incluindo nosso Sol. É uma maravilha visível a olho nu em locais com pouca poluição luminosa, aparecendo como uma faixa brilhante no céu noturno."
            thumbnail={Img10}
          />
        </section>
      </>
    );
  }
}

export default App;
