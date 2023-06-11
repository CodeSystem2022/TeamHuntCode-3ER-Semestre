package domain;

public abstract class FigurasGeometricas {
    protected String tipoFigura;
    
    protected FigurasGeometricas(String tipoFigura){
        this.tipoFigura = tipoFigura;
    }
//metodo abstracto
public abstract void dibujar();


//Agregamos get and set

    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }

    @Override
    public String toString() {
        return "Figuras geometrica{" + "tipoFigura= " + tipoFigura + '}'; //To change body of generated methods, choose Tools | Templates.
    }


}
