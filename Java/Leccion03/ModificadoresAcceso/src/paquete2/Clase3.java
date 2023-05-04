package paquete2;

import paquete1.Clase1;

public class Clase3 extends Clase1{
    public Clase3(){
        super("protected");
        this.atributoProtectd = "Accedemos desde la clase hija";
        System.out.println("AtributoProtecte = " + this.atributoProtectd);
        this.atributoPublico = "es totalmente publico";
    }
    
}
