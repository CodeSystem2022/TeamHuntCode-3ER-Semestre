package domain;

public class Rectangulo extends FigurasGeometricas{
//Consmtructor
    public Rectangulo(String tipoFigura){
        super(tipoFigura);
        
    }

   
    @Override
    public void dibujar(){//implementando el metodo
        System.out.println("Se imprime un: "+this.getClass().getSimpleName());
    }
    
   
    
}
