let mapa = new Map();
mapa.set("e", "enter");
mapa.set("i", "imes");
mapa.set("a", "ai");
mapa.set("o", "ober");
mapa.set("u", "ufat");

let mapaInvertido = new Map([...mapa.entries()].map(([clave, valor]) => [valor, clave]));

function encriptarTexto(texto) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (mapa.has(caracter)) {
            textoEncriptado += mapa.get(caracter);
        } else {
            textoEncriptado += caracter;
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = "";
    let substring = "";
    for (let i = 0; i < textoEncriptado.length; i++) {
        console.log(textoEncriptado[i])
        if (textoEncriptado[i] == "e") {
            substring = textoEncriptado.substring(i, i + 5);
            i+=4;
        } else if (textoEncriptado[i] == "i") {
            substring = textoEncriptado.substring(i, i + 4);
            i+=3;
        } else if (textoEncriptado[i] == "a") {
            substring = textoEncriptado.substring(i, i + 2);
            i+=1;
        } else if (textoEncriptado[i] == "o") {
            substring = textoEncriptado.substring(i, i + 4);
            i+=3;
        } else if (textoEncriptado[i] == "u") {
            substring = textoEncriptado.substring(i, i + 4);
            i+=3;
        }
        console.log(substring);
        if (mapaInvertido.has(substring)) {
            textoDesencriptado += mapaInvertido.get(substring);
            substring = "";
            
        } else {
            textoDesencriptado+=textoEncriptado[i] ;
        }
    }
    return textoDesencriptado;
}


document.getElementById('b1').addEventListener('click', function() {
    var textoUsuario = document.getElementById('textoUsuario').value;
    var textoEncriptado = encriptarTexto(textoUsuario);
    document.querySelector('.respuesta .r').textContent = textoEncriptado;
    document.getElementById('copiar').style.display = 'inline-block';
});

document.getElementById('b2').addEventListener('click', function() {
    var textoUsuario = document.getElementById('textoUsuario').value;
    var textoDesencriptado = desencriptarTexto(textoUsuario);
    document.querySelector('.respuesta .r').textContent = textoDesencriptado;
    document.getElementById('copiar').style.display = 'inline-block';
});

document.getElementById('copiar').addEventListener('click', function() {
    var textoEncriptado = document.querySelector('.respuesta .r').textContent;
    navigator.clipboard.writeText(textoEncriptado).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al intentar copiar el texto: ', err);
    });
});