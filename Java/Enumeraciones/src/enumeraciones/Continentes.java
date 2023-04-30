package enumeraciones;

public enum Continentes {
    
    AFRICA (54, "3.2 billones"),
    EUROPA (46, "2.1 billones"),
    ASIA (51, "4.5 billones"),
    AMERICA (35, "23 billones"),
    OCEANIA (14, "2 billones");
    
    private final int paises;
    private final String habitantes;
    
Continentes(int paises, String habitantes){
         this.paises = paises;
         this.habitantes = habitantes;
         
    }
//Metodo GET
    public int getPaises(){
        return this.paises;
    
    }
   public String gethabitantes(){
       return this.habitantes;
       
   }

}
