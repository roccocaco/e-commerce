import { fetchApi } from "./fetchApi.js"
const resultados = document.getElementById('resultados');

function createElements(array) {
  array.map((e) => resultados.innerHTML += `
    <div>
      <img src = "${e.thumbnail}">
    </div>
  `)
}

async function main() {
  const resultado = await fetchApi()
  createElements(resultado.results)
}


window.addEventListener("load", main)