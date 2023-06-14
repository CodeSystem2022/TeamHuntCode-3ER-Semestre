
package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("empleado = " + empleado);
        System.out.println(empleado.obtenerDetalles()); //Si queremos acceder a metodos Escritor
        //empleado.getTiposcritura(); No se puede hacer
        //Downcasting
        //((Escritor)empleado).getTipoEscritura();  //Tenemos 2 opciones: esta s una
        Escritor escritor = (Escritor)empleado; //Esta s la segunda opcion
        escritor.getTipoEscritura();
        
        //Upcasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
        
    }
}