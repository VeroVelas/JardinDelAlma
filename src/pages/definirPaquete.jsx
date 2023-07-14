import ultimaValidacion from "./ultimaValidacion";

function definirPaquete(newForm, hoy, fecha, setState, setPrecio){
    switch(parseInt(newForm.get('tipo'))){
        case 1:
            ultimaValidacion(newForm, 29, 121, hoy, fecha, setState, setPrecio)
            break;
        case 2:
            ultimaValidacion(newForm, 29, 121, hoy, fecha, setState, setPrecio)
            break;
        case 3:
            ultimaValidacion(newForm, 29, 121, hoy, fecha, setState, setPrecio)
            break;
        case 4:
            ultimaValidacion(newForm, 59, 121, hoy, fecha, setState, setPrecio)
            break;
    }
}
export default definirPaquete;