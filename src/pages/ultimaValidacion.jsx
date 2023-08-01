import calcularPrecio from "./calcularPrecio";

function ultimaValidacion(newForm, hoy, fecha, setState, setPrecio){
    let correcto = true
    if (newForm.get('invitados')<=49){
        setState('Si el número de invitados es menor de 50 ponerse en contacto al 961 178 4166')
        setPrecio('')
        correcto=false;
    }else if(newForm.get('invitados')>=121){
        setState('Si el número de invitados es más de 120 ponerse en contacto al 961 178 4166')
        setPrecio('')
        correcto=false;
    }else if (fecha[0]<=hoy.getFullYear()){
        if (fecha[1]<=hoy.getMonth()+1){
            if (fecha[2]<=hoy.getDate()){
                setState('La fecha del evento no es valida');
                setPrecio('')
                correcto=false;
            }else {
                setState('')
                setPrecio(calcularPrecio(newForm.get('invitados'), newForm.get('tipo')))
            }
        }else {
            setState('')
            setPrecio(calcularPrecio(newForm.get('invitados'), newForm.get('tipo')))
        }
    }else {
        setState('')
        setPrecio(calcularPrecio(newForm.get('invitados'), newForm.get('tipo')))
    }
    return correcto
}
export default ultimaValidacion;