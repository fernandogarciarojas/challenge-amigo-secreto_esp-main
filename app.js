// El principal objetivo de este desafío es fort// Arreglo para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista en la interfaz
    actualizarLista();
}

// Función para actualizar la lista visualmente
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista para evitar duplicados
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo secreto: <strong>${amigoSorteado}</strong>`;
}

