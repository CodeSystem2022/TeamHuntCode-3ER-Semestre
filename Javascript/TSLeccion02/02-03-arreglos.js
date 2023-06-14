
//Creacion de array o arreglos
//let autos = new Array('Ferrari', 'Renault', 'BMW'); esta es la sintaxis vieja
const autos = ['Ferrari', 'Renault', 'BMW'];
console.log(autos);

//Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ': ' + autos[i]);
}

//Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos valores al arreglo
autos.push('Audi'); //Agregamos el elmento al final del arreglo
console.log(autos);

//Otras formas de agregar elmentos al arreglo
autos[autos.length] = 'Porche';
console.log(autos);

//Tercera forma de agregar elementos tniendo CUIDADO
autos[6] = 'Renualt';
console.log(autos);

//Como preeguntar si es una array o arreglo
console.log(Array.isArray(autos)); //Devuelve un booleano


console.log(autos instanceof Array); //Preguntamos si la variable es una instancia de la clase Array