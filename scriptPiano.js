import { createElements } from "./createElement.js";
import { fetchApi } from "./fetchApi.js"


async function main() {
  const resultado = await fetchApi();
  console.log(resultado.piano.results);
  createElements(resultado.piano.results);
}


window.addEventListener("load", main)