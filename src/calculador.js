function calcular(precio, cantidad, estado) {
  var neto = precio * cantidad;
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
  else{
    return neto;
  }
}

export default calcular;
