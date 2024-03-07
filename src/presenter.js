import calcular from "./calculador";
import calcularPrecioNeto from "./calculadorPrecioNeto";
import calcularImpuestoPorEstado from "./calculadorImpuestoPorEstado";
import calcularDescuentoPrecioNeto from "./calculadorDescuentoPorPrecioNeto";
import calcularImpuestoDescuentoCategoria from "./calculadorImpuestoDescuentoCategoria";
import calcularDescuentoEnvio from "./calculadorDescuentoEnvio";
import calcularCostoEnvio from "./calculadorCostoEnvio";
import calcularDescuentoEspecial from "./calculadorDescuentoEspecial";

const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const inputEstado = document.querySelector("#estado");
const inputCategoria = document.querySelector("#categoria");
const inputPeso = document.querySelector("#peso");
const inputCliente = document.querySelector("#cliente");
const form = document.querySelector("#totalizador-form");
const divPrecioNeto = document.querySelector("#precio-neto-div");
const divDescuento = document.querySelector("#descuento-div");
const divImpuesto = document.querySelector("#impuesto-div");
const divImpuestoDescuentoCategoria = document.querySelector("#impuestoDescuento-div");
const divCostoEnvio = document.querySelector("#envio-div");
const divDescuentoEnvio = document.querySelector("#descuentoEnvio-div");
const divDescuentoEspecial = document.querySelector("#descuentoEspecial-div");
const divPrecioTotal = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(inputPrecio.value);
  const cantidad = Number.parseInt(inputCantidad.value);
  const estado = inputEstado.value;
  const categoria = inputCategoria.value;
  const peso = Number.parseInt(inputPeso.value);
  const cliente = inputCliente.value;

  const neto = calcularPrecioNeto(precio, cantidad);
  const descuento = calcularDescuentoPrecioNeto(neto);
  const impuesto = calcularImpuestoPorEstado(neto, estado);
  const impuestoDescuentoCategoria = calcularImpuestoDescuentoCategoria(neto, categoria);
  const envio = calcularCostoEnvio(peso);
  const descuentoEnvio = calcularDescuentoEnvio(envio, cliente);
  const descuentoEspecial = calcularDescuentoEspecial(neto, categoria, cliente);
  const total = calcular(precio, cantidad, estado, categoria, peso, cliente);

  divPrecioNeto.innerHTML = "<p> Precio Neto: " + neto + "</p>";
  divDescuento.innerHTML = "<p> Descuento: " + descuento + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto: " + impuesto + "</p>";
  divImpuestoDescuentoCategoria.innerHTML = "<p> Impuesto o Descuento por Categoria: " + impuestoDescuentoCategoria + "</p>";
  divCostoEnvio.innerHTML = "<p> Costo de Envio: " + envio + "</p>";
  divDescuentoEnvio.innerHTML = "<p> Descuento de Envio: " + descuentoEnvio + "</p>";
  divDescuentoEspecial.innerHTML = "<p> Descuento Especial: " + descuentoEspecial + "</p>";
  divPrecioTotal.innerHTML = "<p> Precio Total: " + total + "</p>";
});
