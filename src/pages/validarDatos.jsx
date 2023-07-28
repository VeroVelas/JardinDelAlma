function validarDatos(nombre, newForm, soloLetras, letrasNumeros, setState){
    const correcto=true;
    if (nombre==''){
        setState('El campo "Nombre Completo" no puede estar vacio')
        correcto=false;
    }else if(newForm.get('nombre').search(soloLetras)){
        setState('El campo "Nombre Completo" solo puede llevar letras')
        correcto=false;
    }else if (newForm.get('telefono')==''){
        setState('El campo "Número Telefónico" no puede estar vacio')
        correcto=false;
    }else if (newForm.get('telefono').length<10||newForm.get('telefono').length>10){
        setState('El "Número Telefónico" tiene que tener 10 numeros');
        correcto=false;
    }else if (newForm.get('invitados')==''){
        setState('El campo "Número De Invitados" no puede estar vacio')
        correcto=false;
    }else if (newForm.get('fecha')==''){
        setState('El campo "Fecha Del Evento" no puede estar vacio')
        correcto=false;
    }else if (newForm.get('evento')==''){
        setState('El campo "Tipo De Evento" no puede estar vacio')
        correcto=false;
    }else if(newForm.get('evento').search(letrasNumeros)){
        setState('El campo "Tipo De Evento" solo puede llevar letras y numeros')
        correcto=false;
    }else{
        setState('');
    }
    return correcto
}
export default validarDatos;