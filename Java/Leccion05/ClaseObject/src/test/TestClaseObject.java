
package test;

import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("juan", 5000);
        Empleado empleado2 = new Empleado("juan", 5000);
    
        if(empleado1 == empleado2){
            System.out.println("Tienen la misma referencia en memoria.");
        }
        else{
            System.out.println("Tienen distintas referencia en memoria");
        }
        
        if(empleado1.equals(empleado2)){
            System.out.println("Los objetos son iguales en contenido");
        }
        else{
            System.out.println("Los objectos son distintos en contenido");
        }
    }
}
