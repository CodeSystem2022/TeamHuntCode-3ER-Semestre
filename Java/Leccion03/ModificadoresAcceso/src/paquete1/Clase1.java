package paquete1;

public class Clase1 {
    public String atributoPublico = "Valor atributo public";
    protected String atributoProtectd = "valor atributo protected";
    
    public Clase1(){
        System.out.println("Constructor publico");
    }
    
    protected Clase1(String atributoPublic){
        System.out.println("Construtor protected");
    }
    
    public void metodoPublico(){
            System.out.println("Metodo public");
    }
    
    protected void metodoProtected(){
        System.out.println("Metodo protected");
    }
}
