
package aritmetica;

import excepciones.OperacionExcepcion;

public class Aritmetica {
    public static int division(int numerador, int denominador){
          
        if(denominador ==0){
            throw new OperacionExcepcion("Division entre cero");
        }
        return numerador / denominador;
    }
}
