function validarDatos(nombre, newForm, soloLetras, letrasNumeros, setState){
    if (nombre==''){
        document.getElementById('estado').innerHTML='El campo "Nombre Completo" no puede estar vacio'
        return false;
    }else if(newForm.get('nombre').search(soloLetras)){
        document.getElementById('estado').innerHTML='El campo "Nombre Completo" solo puede llevar letras'
        return false;
    }else if (newForm.get('telefono')==''){
        document.getElementById('estado').innerHTML='El campo "Número Telefónico" no puede estar vacio'
        return false;
    }else if (newForm.get('telefono').length<10||newForm.get('telefono').length>10){
        setState('El "Número Telefónico" tiene que tener 10 numeros');
        return false;
    }else if (newForm.get('invitados')==''){
        setState('El campo "Número De Invitados" no puede estar vacio')
        return false;
    }else if (newForm.get('fecha')==''){
        setState('El campo "Fecha Del Evento" no puede estar vacio')
        return false;
    }else if (newForm.get('evento')==''){
        setState('El campo "Tipo De Evento" no puede estar vacio')
        return false;
    }else if(newForm.get('evento').search(letrasNumeros)){
        setState('El campo "Tipo De Evento" solo puede llevar letras y numeros')
        return false;
    }else{
        setState('');
        return true;
    }
}
export default validarDatos;