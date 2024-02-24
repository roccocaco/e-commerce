import { createElements } from "./createElement.js";
import { fetchApi } from "./fetchApi.js"


async function main() {
  const resultado = await fetchApi();
  console.log(resultado.bateria.results);
  createElements(resultado.bateria.results);
}


window.addEventListener("load", main)