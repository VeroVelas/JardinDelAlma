import Clientes from "../components/contenedor/Clientes";

function registrarDatos(newForm, state){
    const cliente={
        nombre:newForm.get('nombre'),
        telefono:newForm.get('telefono'),
        invitados:newForm.get('invitados'),
        fecha:newForm.get('fecha'),
        evento:newForm.get('evento'),
        paquete:`paquete ${newForm.get('tipo')}`
    }
    if (state==''){
        Clientes[Clientes.length]=cliente;
        alert(JSON.stringify(Clientes));
    }
}
export default registrarDatos;