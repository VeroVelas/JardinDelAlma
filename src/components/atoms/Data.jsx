function Data ({nombre, telefono, invitados, fecha, evento, paquete}){
    return (
        <tr>
            <th>{nombre}</th>
            <th>{telefono}</th>
            <th>{invitados}</th>
            <th>{fecha}</th>
            <th>{evento}</th>
            <th>{paquete}</th>
        </tr>
    );
}
export default Data;