// Encriptar - Desplaza cada carácter del texto por 3 posiciones en el código ASCII
function simpleEncrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        // Evitar encriptar caracteres que no son letras
        if (text[i].match(/[a-zA-Z]/)) {
            encryptedText += String.fromCharCode(text.charCodeAt(i) + 3);
        } else {
            encryptedText += text[i];  // No modificar caracteres especiales
        }
    }
    return encryptedText;
}

// Desencriptar - Desplaza cada carácter del texto por -3 posiciones en el código ASCII
function simpleDecrypt(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        // Evitar desencriptar caracteres que no son letras
        if (text[i].match(/[a-zA-Z]/)) {
            decryptedText += String.fromCharCode(text.charCodeAt(i) - 3);
        } else {
            decryptedText += text[i];  // No modificar caracteres especiales
        }
    }
    return decryptedText;
}

document.getElementById('encrypt-button').addEventListener('click', function () {
    let inputText = document.getElementById('input-text').value.trim(); // Eliminar espacios en blanco
    if (inputText === '') {
        alert('El campo de texto está vacío. Ingresa un texto para encriptar.');
        return;
    }
    
    let encryptedText = simpleEncrypt(inputText);
    displayOutput(encryptedText, 'Texto encriptado exitosamente.');

    // Desactivar botón de encriptar y activar el de desencriptar
    document.getElementById('encrypt-button').disabled = true;
    document.getElementById('decrypt-button').disabled = false;

    // Cambiar colores de botones
    document.getElementById('encrypt-button').classList.add('btn-disabled');
    document.getElementById('decrypt-button').classList.remove('btn-disabled');
});

document.getElementById('decrypt-button').addEventListener('click', function () {
    let inputText = document.getElementById('input-text').value.trim(); // Eliminar espacios en blanco
    if (inputText === '') {
        alert('El campo de texto está vacío. Ingresa un texto para desencriptar.');
        return;
    }

    let decryptedText = simpleDecrypt(inputText);
    displayOutput(decryptedText, 'Texto desencriptado exitosamente.');

    // Desactivar botón de desencriptar y activar el de encriptar
    document.getElementById('decrypt-button').disabled = true;
    document.getElementById('encrypt-button').disabled = false;

    // Cambiar colores de botones
    document.getElementById('decrypt-button').classList.add('btn-disabled');
    document.getElementById('encrypt-button').classList.remove('btn-disabled');
});

// Función para borrar todo el contenido y restaurar el estado de los botones
document.getElementById('clear-button').addEventListener('click', function () {
    // Limpiar el textarea
    document.getElementById('input-text').value = '';
    
    // Restaurar el mensaje original en la sección de salida
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <img src="src/images/no-message.svg" alt="Ningún mensaje encontrado">
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que deseas encriptar o desencriptar.</p>
    `;

    // Restaurar el estado inicial de los botones
    document.getElementById('encrypt-button').disabled = false;
    document.getElementById('decrypt-button').disabled = true;

    // Restablecer colores de los botones
    document.getElementById('encrypt-button').classList.remove('btn-disabled');
    document.getElementById('decrypt-button').classList.add('btn-disabled');
});

function displayOutput(text, message) {
    let outputDiv = document.getElementById('output');
    let inputText = document.getElementById('input-text');
    outputDiv.innerHTML = `<p>${text}</p><p>${message}</p>`;
    inputText.value = text; 

}
