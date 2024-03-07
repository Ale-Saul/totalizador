function calcularDescuentoEnvio(precio, tipoCliente){
    if(tipoCliente === "normal"){
        return 0;
    }
    else if (tipoCliente === "recurrente"){
        return 0.5;
    }
}
export default calcularDescuentoEnvio;