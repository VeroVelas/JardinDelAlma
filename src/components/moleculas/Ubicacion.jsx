import "../../assets/styles/Ubicacion.css";

function Ubicacion() {
    return ( 
        <>
        <div className="contenedorMap">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.79798468149303!2d-93.08839338732245!3d16.738435994368615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed278c0cf3cecd%3A0x55c6d6b3c82b66c4!2sSal%C3%B3n%20Jard%C3%ADn%20del%20Alma!5e0!3m2!1ses-419!2smx!4v1688414175699!5m2!1ses-419!2smx" className="viewMap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
     );
}

export default Ubicacion;