import img1c from "../../assets/img/img1c.png"
import img2c from "../../assets/img/img2c.png"
import img3c from "../../assets/img/img3c.png"
import img4c from "../../assets/img/img4c.png"
import img5c from "../../assets/img/img5c.png"
import img6c from "../../assets/img/img6c.png"
import img7c from "../../assets/img/img7c.png"
import imagenSection1 from "../../assets/img/imagenSection1.png"
import "../../assets/styles/Collage.css"

function Collage() {
  return (
    <>
      <section class="gallery">
        <figure class="gallery__picture gallery__picture--g1">
          <img src={img1c} alt="" class="gallery__img" />
        </figure>
        <figure class="gallery__picture gallery__picture--g2">
          <img src={img2c} alt="" class="gallery__img" />
        </figure>
        <figure class="gallery__picture gallery__picture--g3">
          <img src={img3c} alt="" class="gallery__img" />
        </figure>
        <figure class="gallery__picture gallery__picture--g4">
          <img src={img5c} alt="" class="gallery__img" />
        </figure>
        <figure class="gallery__picture gallery__picture--g5">
          <img src={img7c} alt="" class="gallery__img" />
        </figure>
        <figure class="gallery__picture gallery__picture--g6">
          <img src={img6c} alt="" class="gallery__img" />
        </figure>
        <figure class="gallery__picture gallery__picture--g7">
          <img src={img4c} alt="" class="gallery__img" />
        </figure>
        <figure class="gallery__picture gallery__picture--g8">
          <img src={imagenSection1} alt="" class="gallery__img" />
        </figure>
      </section>
    </>
  );
}
export default Collage