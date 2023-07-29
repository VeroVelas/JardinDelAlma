import img1c from "../../assets/img/img1c.png"
import img2c from "../../assets/img/img2c.png"
import img3c from "../../assets/img/img3c.png"
import img5c from "../../assets/img/img5c.png"
import img6c from "../../assets/img/img6c.png"
import img7c from "../../assets/img/img7c.png"
import imgCollageGrande from "../../assets/img/imagenGrandeCollage.png";
import "../../assets/styles/Collage.css"

function Collage() {
  return (
    <>
    <img src={imgCollageGrande} loading="lazy" className="coverImagen"/>
    <div class="lightbox">
  <div class="row">
    <div class="col-lg-6 imagenesCollagecito">
      <img
        src={img1c}
        loading="lazy"
        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
      />
      <img
        src={img6c}
        loading="lazy"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
    <div class="col-lg-6 imagenesCollagecito">
      <img
        src={img3c}
        loading="lazy"
        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
      />
      <img
        src={img2c}
        loading="lazy"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
    <div class="col-lg-6 imagenesCollagecito p-3">
      <img
        src={img7c}
        loading="lazy"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
    <div class="col-lg-6 imagenesCollagecito p-3">
    <img
        src={img5c}
        loading="lazy"
        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
      />
    </div>
  </div>
</div>
    </>
  );
}
export default Collage