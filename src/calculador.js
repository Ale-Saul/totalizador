import calcularPrecioNeto from './calculadorPrecioNeto';
import calcularImpuestoPorEstado from './calculadorImpuestoPorEstado';
import calcularDescuentoPrecioNeto from './calculadorDescuentoPorPrecioNeto';
import calcularImpuestoDescuentoCategoria from './calculadorImpuestoDescuentoCategoria';
import calcularCostoEnvio from './calculadorCostoEnvio';
import calcularDescuentoEnvio from './calculadorDescuentoEnvio';
import calcularDescuentoEspecial from './calculadorDescuentoEspecial';

function calcular(precio, cantidad, estado, categoria, peso, cliente) {
  var neto = calcularPrecioNeto(precio, cantidad);
  var impuesto = calcularImpuestoPorEstado(neto, estado);
  var descuento = calcularDescuentoPrecioNeto(neto);
  var impuestoDescuentoCategoria= calcularImpuestoDescuentoCategoria(neto, categoria);
  var costoEnvio = calcularCostoEnvio(peso);
  var descuentoEnvio = calcularDescuentoEnvio(costoEnvio, cliente);
  var descuentoEspecial = calcularDescuentoEspecial(neto, categoria, cliente);
  return neto + impuesto - descuento + impuestoDescuentoCategoria + costoEnvio - descuentoEnvio - descuentoEspecial;
}

export default calcular;
