function encriptarTexto() {
    const textoIngresado = document.getElementById('textoIngresado').value;
    
    if (textoIngresado === '') {
        document.querySelector('.resultado__encriptacion').textContent = 'Ningún mensaje fue encontrado';
        document.getElementById('texto-placeholder').classList.remove('hidden');
        document.querySelector('.imagen__box2').classList.remove('hidden'); 
        document.getElementById('btnCopiar').classList.add('hidden'); 
        return;
    }

    const textoEncriptado = encriptar(textoIngresado);
    document.querySelector('.resultado__encriptacion').textContent = textoEncriptado;
    document.getElementById('texto-placeholder').classList.add('hidden');
    document.querySelector('.imagen__box2').classList.add('hidden'); 
    document.getElementById('btnCopiar').classList.remove('hidden'); 
}

function btnDesencriptar() {
    const textoIngresado = document.getElementById('textoIngresado').value;

    if (textoIngresado === '') {
        document.querySelector('.resultado__encriptacion').textContent = 'Ningún mensaje fue encontrado';
        document.getElementById('texto-placeholder').classList.remove('hidden');
        document.querySelector('.imagen__box2').classList.remove('hidden'); 
        document.getElementById('btnCopiar').classList.add('hidden'); 
        return;
    }

    const textoDesencriptado = desencriptar(textoIngresado);
    document.querySelector('.resultado__encriptacion').textContent = textoDesencriptado;
    document.getElementById('texto-placeholder').classList.add('hidden');
    document.querySelector('.imagen__box2').classList.add('hidden'); 
    document.getElementById('btnCopiar').classList.remove('hidden'); 
}

function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')
        .replace(/a/g, 'ai');
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')
        .replace(/ai/g, 'a');
}

function copiarTexto() {
    const resultado = document.querySelector('.resultado__encriptacion').textContent;
    navigator.clipboard.writeText(resultado).then(() => {
        alert('Haz copiado el texto');
    }, (err) => {
        console.error('Error al copiar el texto: ', err);
    });
}
