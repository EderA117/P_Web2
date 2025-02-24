let numerosecreto = Math.floor(Math.random()*(10-1)+1);
    console.log(numerosecreto);
let usuario = parseInt(prompt("Ingresa un numero del 1 al 10"));

let vidas = 5;

while(numerosecreto != usuario && vidas >1){
    vidas--;
    usuario = parseInt(prompt("El numero no es correcto te quedan: " +vidas));
}

if(numerosecreto == usuario){
    console.log(Ganaste);
} else{
    console.log("Perdiste y el numero era: " =numerosecreto);
}
    