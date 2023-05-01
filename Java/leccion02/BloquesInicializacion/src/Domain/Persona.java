package Domain;

public class Persona {
    private final int idPersona;
    private static String contadorPersonas;

    
    static{   //Bloque de inizalisación automatico 
        System.out.println("Ejecucion del bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona= 10; no es un atributo estatico y por eso tenemos un error
    }
    
    {
        //bloque de inizalisacion NO ESTATICO (contexto dinamico)
        System.out.println("Ejecucion del bloque no estatico");
        this.idPersona = Persona.contadorPersonas++;
     
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    public Persona() {
        System.out.println("Ejecucion del constructor");
}
    public int getidPersona(){
        return this.idPersona;
        
    }
}
