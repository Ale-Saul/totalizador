import calcularPrecioNeto from './calculadorPrecioNeto';
import calcularImpuestoPorEstado from './calculadorImpuestoPorEstado';
import calcularDescuentoPrecioNeto from './calculadorDescuentoPorPrecioNeto';
import calcularImpuestoDescuentoCategoria from './calculadorImpuestoDescuentoCategoria';
import calcularCostoEnvio from './calculadorCostoEnvio';

function calcular(precio, cantidad, estado, categoria, peso) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPrecioNeto(neto);
  var impuestoDescuentoCategoria= calcularImpuestoDescuentoCategoria(neto, categoria);
  var costoEnvio = calcularCostoEnvio(peso);
  return neto + impuesto - descuento + impuestoDescuentoCategoria + costoEnvio;
}

export default calcular;
