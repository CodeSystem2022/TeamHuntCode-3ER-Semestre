let  x =10;

console.log(x.length);


//crear objeto 

let persona ={
    nombre: "Juan",
    apellido: "Perez",
    email : 'JuanPerez@gmail.com',
    edad: 20,
    peso: 100,
    altura: 1.75,

    nombreCompleto : function (){ //creacion de metodos en js
        return this.nombre + ' '  + this.apellido;
    }
}


//otra forma de crear un objeto
let persona2 = new Object(); //crea el objeto en memria
persona2.nombre = 'Rocio';
persona2.apellido = 'Perez';
persona2.email = 'Rocio@gmail.com';


for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}


persona.apellido = 'Betancud'; //cambiamos dinamicamente, usando el igual .

delete persona.apellido; //borramos el apellido del objeto con la propiedad delete


console.log(persona);


console.log(persona2['apellido']);
console.log(persona2['email']);


//usamos metodos al objeto
console.log(persona.nombreCompleto());


console.log(persona);


console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.altura);



//distintas formas de imprimir un objeto


//numero 1 concatenar los valor

console.log(persona2.nombre +' ' + persona2.apellido);

// numero 2 a travez del ciclo for in

for(propiedad in persona2){
  
    console.log(persona2[propiedad])
}



//numero 3 usand la funcion Object.values

let personaArray = Object.values(persona2);

console.log(personaArray);


//numero 4 utilizaremos el metodo JSON.stringify
let personaString = JSON.stringify(persona2);

console.log(JSON.stringify(persona)); //aca usando el metodo

console.log(personaString);