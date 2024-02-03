
function encriptarTexto() {
    const texto = document.getElementById("texto").value.trim();
    if (texto === "") {
        alert("Ingrese el texto aquí.");
        return;
    }

    if (validarTexto(texto)) {
        const textoOriginal = texto; 
        const textoEncriptado = textoOriginal
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("resultado").value = textoEncriptado;
    } else {
        document.getElementById("resultado").value = "";
    }
}


function desencriptarTexto() {
    const texto = document.getElementById("texto").value.trim();
    if (texto === "") {
        alert("Ingrese el texto aquí.");
        return;
    }

    if (validarTexto(texto)) {
        const textoEncriptado = texto;
        const textoOriginal = textoEncriptado
            .replace(/ufat/g, "u")
            .replace(/ober/g, "o")
            .replace(/ai/g, "a")
            .replace(/imes/g, "i")
            .replace(/enter/g, "e");
        document.getElementById("resultado").value = textoOriginal;
    } else {
        document.getElementById("resultado").value = "";
    }
}


function copiarTexto() {
    const resultado = document.getElementById("resultado").value.trim();
    if (resultado === "") {
        alert("No hay texto para copiar.");
        return;
    }

    navigator.clipboard.writeText(resultado)
        .then(() => {
            alert("¡Texto copiado al portapapeles!");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert("Error al copiar el texto. Por favor, intente nuevamente.");
        });
}


function validarTexto(texto) {
    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Solo se aceptan letras minúsculas y espacios en blanco.");
        document.getElementById("texto").value = ""; // Limpiar el campo de texto
        return false;
    }
    return true;
}

//fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!