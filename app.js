//Crear un array para almacenar los nombres

let listaNombres = [];

// Implementa una función para agregar amigos

function agregarAmigo () {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
    }
    else {
        if (listaNombres.indexOf(nombre) != -1){
            alert(`El nombre ${nombre} ya está en la lista`)
        }
        else {
            listaNombres.push(nombre);
            limpiarCaja();
            mostrarLista();
        }
    }
}
function limpiarCaja () {
    document.querySelector('#amigo').value = "";
}

// Implementa una función para actualizar la lista de amigos

function mostrarLista () {
    let amigos = document.getElementById("listaAmigos");

    amigos.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        let nombre = listaNombres[i];
        amigos.innerHTML += `<li>${nombre}</li>`
    }
}

// Implementa una función para sortear los amigos

function sortearAmigo () {
    let sorteo = Math.floor(Math.random()*listaNombres.length);
    let resultado = document.getElementById("resultado");
    
    if (listaNombres != "") {
        let nombreGanador = listaNombres[sorteo]
        resultado.innerHTML = `🎉 Tu amigo secreto es: <strong>${nombreGanador}</strong>`;
        listaNombres.splice(sorteo, 1)
        mostrarLista()
    }
    else {
        alert("No hay amigos para sortear");
    }

}