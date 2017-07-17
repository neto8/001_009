function cadenaInverso(cadena) {

    var nuevaCadena = cadena.split("");
    var nuevaCadenaInv = [];
    console.log(nuevaCadena.length);
    for (var index = nuevaCadena.length - 1; index >= 0; index--) {
        nuevaCadenaInv.push(nuevaCadena[index]);
        console.log(nuevaCadenaInv);
    }
    return nuevaCadenaInv.join("").toUpperCase();
}

function eliminaEspacios(cadena1) {

    var cadenaSinEspacios = cadena1.replace(/\s/g, "");

    return cadenaSinEspacios;
}
//console.log(eliminaEspacios("Hola    nestor"));

function poneMayusculas(cadena) {
    return cadena.toUpperCase();
}

function esPalindromo(cadena) {
	var mayuscula=poneMayusculas(cadena);
    var cadenaSinEspacios = eliminaEspacios(mayuscula);
    var nuevaCadena = cadenaSinEspacios.split("");
    var contCadena = 0;
    var ini=0;
    var fin=cadenaSinEspacios.length-1;
    //for (var index = 0; index = cadenaSinEspacios.length ; index++) {
    while (cadenaSinEspacios.length != contCadena) {
        
            if (nuevaCadena[ini] == nuevaCadena[fin]) {
            	console.log("Es Palindromo");
            	ini++;
            	fin--;
            }else{
            	console.log("No es palindromo");
            	break;
            }
            contCadena++;
        

    }

}

console.log(esPalindromo("Arde ya la yedra"));
