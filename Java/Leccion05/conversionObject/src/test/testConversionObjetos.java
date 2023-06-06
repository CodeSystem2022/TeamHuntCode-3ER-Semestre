
package test;

import domain.*;

public class testConversionObjetos {
    public static void main(String[] args){
        Empleado empleado1 = new Empleado("juan", 5000);
        Empleado empleado2 =new Empleado("Juan", 5000);
        
        if (empleado1 == empleado2){
            System.out.println("Tienen la misma referencia en memoria");
        } 
        else{
            System.out.println("Tienen distintas referencias en memoria");
        }
        
      if (empleado1.equals(empleado2)){
         System.out.println("Los objetos son iguales en contenidos" );
       
         }
         else{
           System.out.println("Los objetos son distintos en contenidos" );
           
      }
      if (empleado1.hashCode() == empleado2.hashCode()){
          System.out.println("El valor de hashcode es igual" );
      }
      else{
          System.out.println("El valor de hashcode es diferente" );
      }
    }     
}
    
