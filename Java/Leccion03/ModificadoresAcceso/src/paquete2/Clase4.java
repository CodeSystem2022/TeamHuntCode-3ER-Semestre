package paquete2;

public class Clase4 {

    private String atributoPtivate = "atributo Privado";

    private Clase4() {
        System.out.println("Constructor privado");
    }

    //Creamos un constructor public para podeer crear objetos
    public Clase4(String argumento) {
        this();
        System.out.println("Constructor publico");
    }

    //Metodo private
    private void metodoPrivado() {
        System.out.println("Metodo privado");
    }

    public String getAtributoPtivate() {
        return atributoPtivate;
    }

    public void setAtributoPtivate(String atributoPtivate) {
        this.atributoPtivate = atributoPtivate;
    }
    
}
