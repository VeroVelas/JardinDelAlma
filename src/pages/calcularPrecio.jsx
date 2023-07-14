function calcularPrecio(nInvitados, nPaquete){
    const array=[4000,5500,4500]
    while(nInvitados%10!=0){
        nInvitados++;
    }
    nInvitados=nInvitados/10;
    return (nInvitados*350)+array[nPaquete--];
}
export default calcularPrecio