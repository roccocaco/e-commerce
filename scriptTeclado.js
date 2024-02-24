import { createElements } from "./createElement.js";
import { fetchApi } from "./fetchApi.js"


async function main() {
  const resultado = await fetchApi();
  console.log(resultado.teclado.results);
  createElements(resultado.teclado.results);
}


window.addEventListener("load", main)