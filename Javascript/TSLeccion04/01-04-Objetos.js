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
    },

    get nombreEdad() { 
        return ' El nombre es: ' + this.nombre + ' edad  ' + this.edad;
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


let persona3 ={
    nombre: ' Ramoncito ',
    edad : 39,
    email: ' ramoncito@gmail.com ',
    idioma: ' es ',

    pesonaCompleta : function(){
    return this.nombre + ' , su mail es:  ' + this.email+ ' Su edad: ' + this.edad+ ' maneja el idioma: '+ this.idioma;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },


    set lang(lang){
         this.idioma = lang.toUpperCase();
    },

   
    get nombreEdad3(){

    },




}


console.log(persona.nombreEdad);


console.log('Comenzamos con los metodos:   get para identificar idiomas  ')
console.log(persona3.lang);


function persona3_1(nombre, apellido, email){
    this.nombre = nombre;
    this.email = email;
    this.apellido = apellido;

    this.nombreCompleto = function (){
        return this.nombre + '  '+this.apellido+' '+this.email;
    }

}


let padre = new persona3_1 (' Leo ', ' Lopez ', 'Leolopez@gmail.com ');
padre.nombre ='Luis';
console.log(padre)

console.log(padre.nombreCompleto())


let madre = new persona3_1(' ines ', ' Diaz ', ' Id@gmail.com ')
console.log(madre.nombreCompleto())


console.log(madre)

let miObjeto = new Object(); // esta es la opcion formal 

let miObjeto2 ={}; //opcion recomendada

let miCadena1 = new String (' Hola '); // sintaxis formal

let miCadena2 = 'Hola'; //sintaxis recomendada y simplicada 

let miNumero = new Number(1); //sintaxis formal

let miNumero2 = 1; //sintaxis recomendada


let booleano1 = new Boolean(false)// sintaxis formal

let boolean2= true; //sintaxis recomendada

let miArreglo1 = new Array(); //formal

let miArreglo2=[];//recomendado

let miFucion1 = new Function (); // todo before new is object

let miFuncion2 = function(){}; //recomended




//uso de PROTOTYPE 

persona3_1.prototype.telefono = '2613482839';
console.log(padre)



//uso de CALL

let persona4 = {
    nombre: ' Juan ',
    apellido: ' Perez ',
    nombreCompleto3 : function() {
       // return titulo+ ' ' + this.nombre+ '  '+ this.apellido+ ' '+ telefono ;
       return this.nombre+ ' '+ this.apellido;
    }
}


let persona5 ={
    nombre:' Rosalia ',
    apellido: ' Monzon',

}

console.log(persona4.nombreCompleto3('Lic. ', '23232'));
console.log(persona4.nombreCompleto3.call(persona5,'Ing. ', '23224334'));


//Metodo Apply

