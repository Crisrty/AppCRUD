const formReceta = document.getElementById('form-receta'); //Id del formulario
//obtener los valores de los campos
const inputNombre = document.getElementById('inputNombre');
const inputIngrediente = document.getElementById('inputIngrediente');
const inputTarea = document.getElementById('inputTarea');
const bodyTabla = document.getElementById('body-tabla');
const ingredientes = []; //arreglo vacio

function agregarReceta(receta, ingrediente, tarea){
    ingredientes.push({
        receta,
        ingrediente: ingrediente,
        tarea: tarea,
    })
}

function eliminarReceta(indice) {
    ingredientes.splice(indice, 1);
    mostrarRecetas();
}

function mostrarRecetas() {
    bodyTabla.innerHTML = '';
    ingredientes.forEach(function (recet, indice) {
        bodyTabla.innerHTML +=  `<tr>
        <th scope="row">${indice+1}</th>
        <td>${recet.receta} </td>
        <td>${recet.ingrediente} </td>
        <td>${recet.tarea} </td>
        <td>
        <button class="botonEditar" onclick="editarRecetaPrompt(${indice}, prompt('Ingresa Receta'), prompt('Ingrediente'), prompt('Uso o tarea'))">Editar</button>
        <button class="botonEliminar" onclick="eliminarReceta(${indice})">Eliminar</button>        
        </td>
      </tr>`
    })
    guardarRecetasStorage();
}

function editarReceta(indice) {
    ingredientes[indice].receta = prompt('Ingresa un nueva Receta.');
    ingredientes[indice].ingrediente = prompt('Ingresa un nuevo Ingrediente.');
    ingredientes[indice].tarea = prompt('Ingresa un nuevo uso o tarea.');
    mostrarRecetas();
}

function editarRecetaPrompt(indice, receta, ingrediente, tarea) {

    ingredientes[indice] = {
        receta: receta,
        ingrediente,
        tarea,
    }

    mostrarRecetas();
}

formReceta.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputNombre.value.trim() !== '' && inputIngrediente.value.trim() !== '' && inputTarea.value.trim() !== '') {

        bodyTabla.innerHTML = '';

        agregarReceta(inputNombre.value, inputIngrediente.value, inputTarea.value);

        mostrarRecetas();

        event.target.reset();
    } else {
        alert('Los 3 campos son obligatorios');
    }
});

function guardarRecetasStorage(){
    const guardarRecetas = JSON.stringify(ingrediente);
    localStorage.setItem('ingredientes', guardarRecetas);
}

function obtenerRecetasStorage() {
    const recetaStorage = localStorage.getItem('ingredientes');

    ingredientes = recetaStorage == null ? [] : JSON.parse(recetaStorage);
}

obtenerRecetasStorage();




