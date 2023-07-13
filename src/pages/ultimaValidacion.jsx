import calcularPrecio from "./calcularPrecio";

function ultimaValidacion(newForm, minimo, maximo, hoy, fecha, setState, setPrecio){
    if (newForm.get('invitados')<minimo||newForm.get('invitados')>maximo){
        setState('El numero de invitados tiene que estar en el rango de 30 a 120 personas')
        setPrecio('')
    }else if (fecha[0]<=hoy.getFullYear()){
        if (fecha[1]<=hoy.getMonth()+1){
            if (fecha[2]<=hoy.getDate()){
                setState('La fecha del evento no es valida');
                setPrecio('')
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
}
export default ultimaValidacion;