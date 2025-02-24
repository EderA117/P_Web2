let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

let mayor, menor;

if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else if (num3 > num1 && num3 > num2) {
    mayor = num3;
} else {
    mayor = "son iguales";
}

            
if (num1 < num2 && num1 < num3) {
    menor = num1;
} else if (num2 < num1 && num2 < num3) {
    menor = num2;
} else if (num3 < num1 && num3 < num2) {
    menor = num3;
} else {
    menor = "son iguales";
}
alert(`El número mayor es: ${mayor}\nEl número menor es: ${menor}`);