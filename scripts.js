window.onload = () => {

    /* const form = document.querySelector('form'); */

    const form = document.forms[0];  // Es equivalente a lo de arriba
    const nombre = form.querySelector('#nombre');
    const contrasenia = form.querySelector('#pass');
    const telefono = form.querySelector('#tel');
    const boton = form.querySelector('button');
    const hobbies = document.getElementsByName('hobbies');
    const nacionalidad = document.getElementsByName('nacionalidad');
    const datos = {
        nombreCompleto: null,
        contrasenia: null,
        telefono: null,
        hobbies: [],
        nacionalidad: null,
    }

    nombre.addEventListener('keyup', () => {
        datos.nombreCompleto = nombre.value.toLowerCase().trim();
    })

    contrasenia.addEventListener('keyup', () => {
        datos.contrasenia = contrasenia.value.trim();
    })

    telefono.addEventListener('keyup', () => {
        const number = parseInt(telefono.value);

        if (isNaN(number)) {
            boton.disabled = true;
            datos.telefono = null;
        } else {
            boton.disabled = false;
            datos.telefono = telefono.value;
        }

    })

    form.addEventListener('submit', () => {
        hobbies.forEach(function (elemento) {
            console.log(`Elemento: ${elemento.getAttribute('id')}`);
            console.log(`Seleccionado: ${elemento.checked}`);
            if (elemento.checked) {
                datos.hobbies.push(elemento.getAttribute('id'));
            }
        })
    })

    form.addEventListener('submit', () => {
        nacionalidad.forEach(function (elemento) {
            console.log(`Elemento: ${elemento.getAttribute('id')}`);
            console.log(`Seleccionado: ${elemento.checked}`);
            if (elemento.checked) {
                datos.nacionalidad = elemento.getAttribute('id');
            }
        })
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(datos);
    })  



}





