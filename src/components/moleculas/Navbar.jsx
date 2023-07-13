import { Link } from "react-router-dom";
import imagenLogo from "../../assets/img/logo.svg"
import "../../assets/styles/Navbar.css"
function Navbar() {
    return (  
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className="navbar-brand" src={imagenLogo} href="/"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav justify-content-end navbar-collapse" id="navbarScroll">
         
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/" >Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#paquetes">Paquetes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/iniciosesion'>Iniciar</Link>
                    </li>
                </ul>
                    {/* <button className="btn btn-outline-success" type="submit">Iniciar Sesión</button>*/}
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar
