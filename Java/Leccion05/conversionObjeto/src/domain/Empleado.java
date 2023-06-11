
package domain;

public class Empleado {
    protected String nombre;
    protected double sueldo;
    
    
    public Empleado(String nombre, double sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
        
    }
    
    //metodo de sobreescritura
    public String obtenerDetalles(){
        return "Nombre: "+ this.nombre +", Sueldo: "+ this.sueldo;
    }
}
