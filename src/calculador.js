import calcularPrecioNeto from './calculadorPrecioNeto';
import calcularImpuestoPorEstado from './calculadorImpuestoPorEstado';

function calcular(precio, cantidad, estado) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPorPrecioNeto(neto);
  return neto + impuesto - descuento;
}

function calcularDescuentoPorPrecioNeto(neto){
  if (neto == 1000) {
    return neto * 3.00 / 100;
  }
  else if(neto == 3000){
    return neto * 5.00 / 100;
  }
  else if(neto == 7000){
    return neto * 7.00 / 100;
  }
  else if(neto == 10000){
    return neto * 10.00 / 100;
  }
  else if(neto == 30000){
    return neto * 15.00 / 100;
  }
  else {
    return 0;
  }
}

export default calcular;
