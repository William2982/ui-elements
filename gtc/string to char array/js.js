//Guardar caracteres de texto en arreglos.
function ok() {
    //Curp
    const curp = document.querySelectorAll("#curp");
    const arrayCurp = [];
    curp.forEach((inputCurp) => {
        const valorCurp = inputCurp.value;
        for (let i = 0; i < valorCurp.length; i++) {
            arrayCurp.push(valorCurp[i]);
        }
    });
    console.log(arrayCurp);

    //RFC
    const rfc = document.querySelectorAll("#rfc");
    const arrayRfc = [];
    rfc.forEach((inputRfc) => {
        const valorRfc = inputRfc.value;
        for (let i = 0; i < valorRfc.length; i++) {
            arrayRfc.push(valorRfc[i]);
        }
    });
    console.log(arrayRfc);

    //Fecha 1
    const fecha1 = document.getElementById("fecha1").value.replace(/-/g, "");
    const arrayFecha1 = [];
    for (let i = 0; i < fecha1.length; i++) {
        arrayFecha1.push(fecha1[i]);
    }
    console.log(arrayFecha1);

    //Fecha 2
    const fecha2 = document.getElementById("fecha2").value.replace(/-/g, "");
    const arrayFecha2 = [];
    for (let i = 0; i < fecha2.length; i++) {
        arrayFecha2.push(fecha2[i]);
    }
    console.log(arrayFecha2);
}

//Escribir numeros y letras y que se conviertan a mayusculas.
function validarCurp(e) {
    //Al escribir letras se convierten en mayusculas.
    let input = document.getElementById('curp');
    let valor = input.value;
    valor = valor.toUpperCase();
    input.value = valor;
    //validar caracteres permitidos.
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890";
    especiales = [8, 13];
    tecla_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        alert('Caracter inválido.');
        return false;
    }
}
function validarRfc(e) {
    //Al escribir letras se convierten en mayusculas.
    let input = document.getElementById('rfc');
    let valor = input.value;
    valor = valor.toUpperCase();
    input.value = valor;
    //validar caracteres permitidos.
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890";
    especiales = [8, 13];
    tecla_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        alert('Caracter inválido.');
        return false;
    }
}