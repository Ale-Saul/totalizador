import calcularPrecioNeto from './calculadorPrecioNeto';
import calcularImpuestoPorEstado from './calculadorImpuestoPorEstado';
import calcularDescuentoPrecioNeto from './calculadorDescuentoPorPrecioNeto';
import calcularImpuestoDescuentoCategoria from './calculadorImpuestoDescuentoCategoria';

function calcular(precio, cantidad, estado, categoria) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPrecioNeto(neto);
  var impuestoDescuentoCategoria= calcularImpuestoDescuentoCategoria(neto, categoria);
  return neto + impuesto - descuento + impuestoDescuentoCategoria;
}

export default calcular;
