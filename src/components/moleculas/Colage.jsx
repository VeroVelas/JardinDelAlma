import img1c from "../../img/img1c.png"
import img2c from "../../img/img2c.png"
import img3c from "../../img/img3c.png"
import img4c from "../../img/img4c.png"
import img5c from "../../img/img5c.png"
import img6c from "../../img/img6c.png"
import img7c from "../../img/img7c.png"
import "../../styles/Collage.css"




function Colage() {
    return (
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={img1c}
      class="w-100 shadow-1-strong rounded mb-"
      alt="imagen1"
    />
    
    <img
      src={img2c}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="imagen 2"
    />
    
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={img3c}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="iamgen3"
    />

     <div className="imagen4"></div>   
    <img
      src={img4c}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="imagen 4"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={img5c}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="imagen 4"
    />

    <img
      src={img6c}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="imagen 5"
    />
     <img
      src={img7c}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="imagen 7"
    />
  </div>
</div>

    );
}
export default Colage