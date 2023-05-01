//while 

let contador  = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}

console.log("Fin del ciclo while " + contador);

//do while loop

let conteo = 0;

do {
    console.log(conteo);
    conteo++;
} while (conteo < 3);

console.log("Fin del ciclo do while  " + contador);

//for 

for (let contadorFor = 0; contadorFor < 3; contadorFor++) {
    console.log(contadorFor);
}


//palabra reservada break

for (let contadorFor = 0; contadorFor < 10; contadorFor++) {
    if (contadorFor % 2==0) {
        console.log(contadorFor);
        break;
       
    }
}

console.log("Termina el ciclo for  de encontrar los pares")


//palabra reservada continue y etiqueta labels    
inicio:

for (let contadorFor = 0; contadorFor <= 10; contadorFor++) {
    if (contadorFor % 2 !==0) {
       
        continue inicio;
       
    }
    console.log(contadorFor);
}

console.log("Termina el ciclo for  de encontrar los pares")




