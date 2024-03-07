function calcularDescuentoEnvio(precio, tipoCliente){
    if(tipoCliente === "normal"){
        return 0;
    }
    else if (tipoCliente === "recurrente"){
        return precio * 0.005;
    }
    else if (tipoCliente === "antiguo"){
        return precio * 0.01;
    }
    else if (tipoCliente === "especial"){
        return precio * 0.015;
    }
}
export default calcularDescuentoEnvio;