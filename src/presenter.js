import calcular from "./calculador";

const first = document.querySelector("#precio");
const second = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseInt(first.value);
  const cantidad = Number.parseInt(second.value);

  div.innerHTML = "<p>" + calcular(firstNumber, secondNumber) + "</p>";
});
