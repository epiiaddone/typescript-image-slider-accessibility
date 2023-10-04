import { ImageSlider } from "./ImageSlider"
import pok1 from "./images/pok1.png"
import pok2 from "./images/pok2.png"
import pok3 from "./images/pok3.png"
import pok4 from "./images/pok4.png"
import pok5 from "./images/pok5.png"

const IMAGES = [
  { url: pok1, alt: "Caterpie" },
  { url: pok2, alt: "Metapod" },
  { url: pok3, alt: "Butterfree" },
  { url: pok4, alt: "Blastoise" },
  { url: pok5, alt: "Starme" }
];


function App() {


  return (
    <div style={{ maxWidth: "1000px", width: "100%", aspectRatio: "8 / 9", margin: "0 auto" }}>
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "2rem" }}>Link</a>
    </div>
  )
}

export default App
