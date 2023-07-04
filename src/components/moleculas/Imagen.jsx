import ImagenSection2 from "../../assets/img/ImagenSection2.png";
import "../../assets/styles/Img.css";
import Line from "../atoms/line";

function Imagen() {
    return (
        <> 
        <div>
        <div className="LineaB">
            <Line></Line>
        </div>
        <div className="LineaB2">
            <Line></Line>
        </div>
        </div>
        <div className="LineaB3">
            <Line></Line>
        </div>
            <div className="col-lg-12 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                <img src={ImagenSection2} className="img2" alt="" />
            </div>
            <div className="LineaA">
                <Line></Line>
            </div>
           
        </>
        
    );
}
export default Imagen
