const resultados = document.getElementById('resultados');

export function createElements(array) {
  array.map((e) => resultados.innerHTML += `
    <div class="col-md-4 col-12 mb-5">
    <div class="d-flex justify-content-center">
      <img src = "${e.thumbnail}">
    </div>

    <div>
    <p>${e.title}</p>
    <h5>R$ ${e.price}</h5>
    </div>
    </div>

  `)
}