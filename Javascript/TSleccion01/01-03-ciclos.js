//while
let contador = 0;
while(contador < 3){
    console.log(contador); 0, 1, 2
    contador++;
}
console.log("Fin del ciclo while");  //Fin del ciclo while

//do while
let conteo = 0;
do{
    console.log(conteo); 0, 1, 2
    conteo++;
}while(conteo < 3)
console.log("Fin del ciclo do while");  //Fin del ciclo do while

//for
for(let contando = 0; contando < 3; contando++){
    console.log(contando); 0, 1, 2
}
console.log("Fin del ciclo for");  //Fin del ciclo for

//Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //Muestra toos los pares
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer numero par.");  //Termina el ciclo

// La palabra continue y etiquetas labels
inicio:
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        console.log(contando); //Muestra toos los pares
        continue inicio;
    }
    //console.log(contando);
}
console.log("Termina el ciclo al encontrar el primer numero par.");  //Termina el ciclo

