let opcion = parseInt(prompt("Introduce que opcion quieres: "));




switch(opcion){
    case 1:
        suma();
        break;

    case 2:
        resta();
        break;

    case 3:
        multiplicacion();
        break;

    case 4:
        division();
        break;

    case 5:
        modulo();
        break;


    default:
        alert("Opción no válida");
        break;
}



function resta(){
    let n1 = parseInt(prompt("Introduzca el numero 1: "));
    let n2 = parseInt(prompt("Introduzca el numero 2: "));

    let resultado = n1 - n2;

    alert("El resultado es: " +resultado);
}

function multiplicacion(){
    let n1 = parseInt(prompt("Introduzca el numero 1: "));
    let n2 = parseInt(prompt("Introduzca el numero 2: "));

    let resultado = n1 * n2;

    alert("El resultado es: " +resultado);
}

function division(){
    let n1 = parseInt(prompt("Introduzca el numero 1: "));
    let n2 = parseInt(prompt("Introduzca el numero 2: "));

    let resultado = n1 / n2;

    alert("El resultado es: " +resultado);
}


function modulo(){
    let n1 = parseInt(prompt("Introduzca el numero 1: "));
    let n2 = parseInt(prompt("Introduzca el numero 2: "));

    let resultado = n1 % n2;

    alert("El resultado es: " +resultado);
}


function suma(){
    let n1 = parseInt(prompt("Introduzca el numero 1: "));
    let n2 = parseInt(prompt("Introduzca el numero 2: "));

    let resultado = n1 + n2;

    alert("El resultado es: " +resultado);
}