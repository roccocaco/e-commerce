export async function fetchApi() {
  const req1 = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=teclado")
  const res1 = await req1.json()

  const req2 = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=piano");
  const res2 = await req2.json();

  const req3 = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=bateria");
  const res3 = await req3.json();

  const resultado = {
    teclado: res1,
    piano: res2,
    bateria: res3,
  }
  return resultado
}