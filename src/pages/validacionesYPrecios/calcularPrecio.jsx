function calcularPrecio(nInvitados, nPaquete){
    if (nPaquete==2){
        return (nInvitados*315);
    }else{
        while(nInvitados%10!=0){
            nInvitados++;
        }
        nInvitados=nInvitados/10
        if (nInvitados>=5&&nInvitados<=6){
            return (nInvitados*350)+5500;
        }else if(nInvitados>=7&&nInvitados<=12){
            return (nInvitados*315)+5500;
        }
    }
}
export default calcularPrecio