
const formReceta = document.getElementById('form-receta'); //Id del formulario
//obtener los valores de los campos
const inputNombre = document.getElementById('inputNombre');
const inputIngrediente = document.getElementById('inputIngrediente');
const inputTarea = document.getElementById('inputTarea');
const bodyTabla = document.getElementById('body-tabla');
const ingredientes = []; //arreglo vacio

formReceta.addEventListener('submit', function (event){
    event.preventDefault(); //Evita que se refresque la pagina
    //Imprimir los valores que ingresamos en la tabla
    if(inputNombre.value.trim() !== '' && inputIngrediente.value.trim() !=='' && inputTarea.value.trim() !== ''){ //El .trim() nos ayuda a los espacios en blanco

        bodyTabla.innerHTML +=  `<tr>
        <th scope="row">1</th>
        <td>${inputNombre.value} </td>
        <td>${inputIngrediente.value} </td>
        <td>${inputTarea.value} </td>
      </tr>`

      event.target.reset();
    }else{
        alert('Los tres campos son obligatorios');
    }

    //Imprime los valores en la consola
    console.log(inputNombre.value);
    console.log(inputIngrediente.value);
    console.log(inputTarea.value);
})

