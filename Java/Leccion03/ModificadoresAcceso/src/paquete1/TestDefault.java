package paquete1;

import paquete2.Clase4;

public class TestDefault {

    public static void main(String[] args) {
        ClaseHija2 claseH2 = new ClaseHija2();
        claseH2.atributoDefault = "Cambio desde la prueba";
        System.out.println("claseH2 atributo default = " + claseH2.atributoDefault);
    
        Clase4 clase4 = new Clase4("Publico");
        System.out.println(clase4.getAtributoPtivate());
        clase4.setAtributoPtivate(("Cambio"));
        System.out.println("clase4 = " + clase4.getAtributoPtivate());
    }
}
