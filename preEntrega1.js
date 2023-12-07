/*
Nombre: Henry Javier González Soto
Comisión: Javascript #49820
*/
//Simulador Cajero | ATM
do {
    let operacion = prompt("Ingrese el tipo de Operación: Depósito o Consulta");
    let cuenta = 1000; //Por ahora una variable declarada hasta ver DOM.
    // Investigué cómo hacerlo uniforme, pero las soluciones me parecieron complicadas, entonces solo verifico que sea todo en minúscula, pero no puedo verificar que no tenga tildes y etc.
    if (operacion.toLowerCase() == "deposito") {
        let valorDeposito = Number(prompt("Ingrese el monto a depositar: "));
        let nuevoSaldo = cuenta + valorDeposito;
        alert("Su nuevo saldo es de: "+nuevoSaldo+"$USD");
    }else if (operacion.toLowerCase() == "consulta"){
        alert("Su saldo actual es de: "+cuenta);
    }else {
        alert("Ingresó una opción inválida");
    }
    var repetir = prompt("¿Desea repetir el programa?: Si/No");
} while (repetir.toLowerCase() == "si");