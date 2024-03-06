function calcular(precio, cantidad, estado) {
  var neto = precio * cantidad;
  neto = calcularImpuestoPorEstado(neto, estado);
  neto = calcularDescuentoPorCantidad(neto, cantidad);
  return neto;
}
function calcularImpuestoPorEstado(neto, estado){

  if (estado == "CA") {
    return neto + neto * 8.25 / 100;
  } 
  else if(estado =="UT"){
    return neto + neto * 6.65 / 100;
  }
  else if(estado =="NV"){
    return neto + neto * 8.00 / 100;
  }
  else if(estado =="TX"){
    return neto + neto * 6.25 / 100;
  }
  else if(estado =="AL"){
    return neto + neto * 4.00 / 100;
  }
  else{
    return neto;
  }
}
function calcularDescuentoPorCantidad(neto,cantidad){
  if (cantidad == 1000) {
    return neto - neto * 3.00 / 100;
  }  
  else {
    return neto;
  }
}

export default calcular;
