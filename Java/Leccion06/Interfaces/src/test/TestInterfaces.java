package test;


import accesodatos.*;


public class TestInterfaces {
    
    public static void main(String[] args) {
        IAccesosDatos datos = new ImplementacionMysql(); 
        //datos.listar();
        //Imprimir(datos);
        datos = new ImplementacionOracle();
        //datos.listar();
         Imprimir(datos);
    }
  
    public static void Imprimir(IAccesosDatos datos){
        datos.listar();
        
}
}
