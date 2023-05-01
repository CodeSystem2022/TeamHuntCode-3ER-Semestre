let autos = new Array('Ferrari','Ranault','BMW '); //esta es la sintaxis antingua 

console.log(autos); 


const autos2 = ['Ferrari','Ranault','BMW'];
console.log(autos2); 

//recorremos los elementos del arrays

//USAMOS UN LOG
console.log(autos2[0]);

//USAMOS UN FOR

for(let i = 0; i < autos2.length; i++){
    console.log((i+1) +" "+ autos2[i]);
}



//modificamos  los elementos del arrays

autos2[2]= 'Volvo';

console.log(autos2[2]);

// agregar elementos to array


autos2.push('Audi')

console.log(autos2);

//otras formas de agregar elementos al array 

autos2[3]='Audi 000';
autos2[4]= 'Scania';
autos2[autos2.length]='Ford';

console.log(autos2);


//preguntar si es un arreglo o no , como saberlo usando typeof

console.log(Array.isArray(autos2));

console.log(autos2 instanceof Array)

