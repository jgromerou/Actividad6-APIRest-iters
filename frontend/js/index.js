const url = 'http://localhost:8000/productos';

function listarProductos() {
  fetch(url)
    .then((response) => response.json())
    .then(mostrarProductos);
}

function mostrarProductos(productos) {
  /*    console.log(data); */

  const prod = document.getElementById('body-prod');

  let html = '';

  for (let producto of productos) {
    html += `<div class="col my-4">
              <a class="card-link" href="">
                <div class="card h-100">
                  <img
                    src="images/${producto.image}"
                    class="card-img-top"
                  alt="${producto.id}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                  </div>
                  <div class="card-footer">$ ${producto.precio}</div>
                  <div class="col text-center">
                  <button class="btn btn-success">Modificar</button> 
                  <button class="btn btn-danger">Eliminar</button> 
                  </div>
                </div>
              </a>
        </div>`;
  }

  prod.innerHTML = html;
}

function guardarProducto() {
  fetch(url, { method: 'POST' })
    .then((response) => response.json())
    .then((data) => console.log(data));
  let label = document.getElementById('nombre');
  label.value = '';
}

function cancelarProducto() {
  let label = document.getElementById('nombre');
  label.value = '';
}

listarProductos();

const btnGuardar = document.getElementById('btn-guardar');

btnGuardar.addEventListener('click', guardarProducto);

const btnCancelar = document.getElementById('btn-cancelar');
btnCancelar.addEventListener('click', cancelarProducto);

const btnx = document.getElementById('exampleModal');
btnx.addEventListener('click', cancelarProducto);
