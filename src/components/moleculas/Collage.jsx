import img1c from "../../assets/img/img1c.png"
import img2c from "../../assets/img/img2c.png"
import img3c from "../../assets/img/img3c.png"
import img4c from "../../assets/img/img4c.png"
import img5c from "../../assets/img/img5c.png"
import img6c from "../../assets/img/img6c.png"
import img7c from "../../assets/img/img7c.png"
import "../../assets/styles/Collage.css"

function Collage() {
  return (
    <>
      <div className="collage">
        <div className="imagen1">
          <img src={img1c} alt="Imagen 1" />
        </div>

        <div className="imagen2">
          <img src={img2c} alt="Imagen 2" />
        </div>
        <div className="imagen3">
          <img src={img3c} alt="Imagen 3" />
        </div>
        
        <div className="imagen4">
          <img src={img4c} alt="Imagen 4" />
        </div>

        <div className="imagen5">
          <img src={img5c} alt="Imagen 5" />
        </div>
         <div className="imagen6">
          <img src={img6c} alt="Imagen 6" />
        </div>
        <div className="imagen7">
          <img src={img7c} alt="Imagen 7" />
        </div>
      </div>
    </>
  );
}
export default Collage