let x = 10; //Variable del tipo primitivo
console.log(x.length);
console.log('Tipos primitivos.');

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minuscul  as a mayusculas.
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){  //Metodo
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){ //Este es le metodo get
        return 'El nombre es: '+this.nombre+', Edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto.');

let persona2 = new Object();  //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '2604273760';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto.');

console.log(persona['apellido']); //Accedemos como si fuera un arreglo

console.log('Usamos el ciclo fot in.');
//for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log('Cambiamos y eliminamos un error.');
persona.apellida = 'Bentancud'; //Cambiamos dinamicamente un valor del objecto.
delete persona.apellida; //Eliminamos la error.
console.log(persona);

//Distintas formas de definir un objecto
//Numero 1: las mas sencilla. Concatenar cada valor de cada propiedad
console.log(persona.nombre+', '+persona.apellido);
console.log('Distinta forma de imprimir un objecto: forma 1.');

//Numero 2: a travez del ciclo for in.
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}
console.log('Distinta forma de imprimir un objecto: forma 2.');

//Numero 3: La funcion Objecte.values().
let personaArray = Object.values(persona);
console.log(personaArray);
console.log('Distinta forma de imprimir un objecto: forma 3.');

//Numero 4: Utilizaremos el metodo JSON.stringify.
let personaString = JSON.stringify(persona);
console.log(personaString);
console.log('Distinta forma de imprimir un objecto: forma 4.');

console.log('Comenzamos a utilizar el metodo get.');
console.log(persona.nombreEdad);

console.log('Comenzamos con el get y set para idiomas.');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //Construtor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis';  //Modificamos el nombre.
padre.telefono = '2604273760';
console.log(padre);
console.log(padre.nombreCompleto());  //Utilizamos la funcion.

let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre)
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos.
//Caso object 1
let miObjeto = new Object();
//Caso object 2
let miObjecto2 = {};  //Esta opcion es breve y recomendada.

//Caso String 1
let miCadena1 = new String('Hola');  //Sintaxis formal.
//Caso String 2
let miCadena2 = 'Hola';  //Esta es la sintaxis simplificada y recomendada.

//Caso con numeros 1
let miNumero = new Number(1);  //Es formal no recomendada.
//Caso con numeros 2
let miNumero2 = 1;  //Sintaxis recomendada

// Caso Boolean 1.
let miBoolean1 = new Boolean(false); //Formal

//Caso Arreglos 1.
let miArreglo1 = new Array(); //Formal
//Caso Arreglos 2.
let miArreglo2 = []; //Sintaxia recomendada.

//Caso function 1
let miFuncion1 = new function(){}; //Todo despues de new es considerado objeto.
//Caso function 2
let miFuncion2 = function(){};  //Notacion simplificada y recomendada.

//Uso de prototype.
Persona3.prototype.telefono = '2604273760';
console.log(padre);
madre.telefono = '2625313244'
console.log(madre);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+' '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '553563437776'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '567894444323'))

//Metodo Apply.
let arreglo = ['Ing', '3662333634534'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
