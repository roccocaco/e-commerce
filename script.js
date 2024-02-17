import { fetchApi } from "./fetchApi.js"

async function main() {
  const resultado = await fetchApi()
  console.log(resultado)
  
}


window.addEventListener("load", main)