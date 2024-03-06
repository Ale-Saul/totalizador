import calcularPrecioNeto from './calculadorPrecioNeto';
import calcularImpuestoPorEstado from './calculadorImpuestoPorEstado';
import calcularDescuentoPrecioNeto from './calculadorDescuentoPorPrecioNeto';

function calcular(precio, cantidad, estado) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPrecioNeto(neto);
  return neto + impuesto - descuento;
}

export default calcular;
