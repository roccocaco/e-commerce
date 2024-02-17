export async function fetchApi() {
  const req = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=teclado%20musical")
  const res = await req.json()

  return res
}