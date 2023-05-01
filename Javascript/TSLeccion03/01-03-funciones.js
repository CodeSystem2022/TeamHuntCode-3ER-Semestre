

// Hoisting , la posibilidad de llamar la funcion antes o despues de definirla


function miFuncion (a,b){ 
    console.log("Sumamos: " + ( a + b ) );
}
// Llamndo la funcion

miFuncion(5,6);

let resultado = miFuncion(6,5);

console.log(resultado);


// Funciones tipo expresion

//Declaramos la funcion de tipo expresion

let x = function (a, b ){  return a + b };

resultado = x(5,6);

console.log(resultado);


//Funciones que se llaman a si misma, tipo SELF  y incoking   

(function( a , b){
    console.log('Ejecutamos el codigo de la funcion ' + (a + b) );
})(9,6);


console.log(miFuncion);






function miFuncion2 (a, b ){
    console.log (arguments)
};

miFuncion2(5,6);



//toString


var miFuncionTexto = miFuncion2.toString();

console.log(miFuncionTexto);


// Funciones tipo FLECHA

const sumarFuncionFlecha = (a , b) =>  a + b;



let sumar = function (a =4  , b=8){
    console.log(arguments[0]); //Muestra el parametro de a 
    console.log(arguments[1]); //Muestra el parametro de b 
    console.log(arguments[2])
    return a +b ;
}

resultado1 = sumar(9,5);

console.log (resultado1)


resultado = sumarTodo (5,4,13,10,9);

console.log(resultado); 

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


//Paso por valor  y referencia


//Tipos primitivos 

let z = 10;

function  cambiarValores(a){ //paso por valor 
    a = 20;
}

cambiarValores(z);

console.log(z);



// Pasooooos por referencia , fachaaaa

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20
};

function cambiarValorObjeto(p1){
    p1.nombre = 'Rocios';
    p1.edad = 30;
    p1.apellido  = 'Bergerat ';
}

cambiarValorObjeto(persona);

console.log(persona);


