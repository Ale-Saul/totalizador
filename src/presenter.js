import calcular from "./calculador";
import calcularPrecioNeto from "./calculadorPrecioNeto";
import calcularImpuestoPorEstado from "./calculadorImpuestoPorEstado";
import calcularDescuentoPrecioNeto from "./calculadorDescuentoPorPrecioNeto";


const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const inputEstado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const divPrecioNeto = document.querySelector("#precio-neto-div");
const divDescuento = document.querySelector("#descuento-div");
const divImpuesto = document.querySelector("#impuesto-div");
const divPrecioTotal = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(inputPrecio.value);
  const cantidad = Number.parseInt(inputCantidad.value);
  const estado = inputEstado.value;

  const neto = calcularPrecioNeto(precio, cantidad);
  const descuento = calcularDescuentoPrecioNeto (neto);
  const impuesto = calcularImpuestoPorEstado(neto, estado);
  const total = calcular(precio, cantidad, estado);

  divPrecioNeto.innerHTML = "<p> Precio Neto: " + neto + "</p>";
  divDescuento.innerHTML = "<p> Descuento: " + descuento + "</p>";
  divImpuesto.innerHTML = "<p> Impuesto: " + impuesto + "</p>";
  divPrecioTotal.innerHTML = "<p> Precio Total: " + total + "</p>";
});
