package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class testEnumeraciones {

    private static String Continentes;
    
    public static void main(String[] args) {
      
       // System.out.println("Dia 1: "+Dias.LUNES);
        //indicarDiaSemana(Dias.LUNES);//Las enumeraciones se tratan como cadenas
        //Ahora no se deben utilizar comillas ahora se tratan con puntos
        System.out.println("Continente No.4: "+Continentes.AMERICA);
        System.out.println("No. de paises en el continente: "+Continentes.AMERICA.paises);
        System.out.println("No. de habitantes en el 4to. Continente: "
        +Continentes.AMERICA.gethabitantes());
        System.out.println("Continente No.2: "+Continentes.EUROPA);
        System.out.println("No. de paises en el continente: "+Continentes.EUROPA.paises);
        System.out.println("No. de habitantes en el 2to. Continente: "
        +Continentes.EUROPA.gethabitantes());
        System.out.println("Continente No.1: "+Continentes.AFRICA);
        System.out.println("No. de paises en el continente: "+Continentes.AFRICA.paises);
        System.out.println("No. de habitantes en el 1to. Continente: "
        +Continentes.AFRICA.gethabitantes());
        System.out.println("Continente No.3: "+Continentes.ASIA);
        System.out.println("No. de paises en el continente: "+Continentes.ASIA.paises);
        System.out.println("No. de habitantes en el 3to. Continente: "
        +Continentes.ASIA.gethabitantes());
        System.out.println("Continente No.5: "+Continentes.ASIA);
        System.out.println("No. de paises en el continente: "+Continentes.ASIA.paises);
        System.out.println("No. de habitantes en el 5to. Continente: "
        +Continentes.ASIA.gethabitantes());
    }

    
    private static void indicarDiaSemana(Dias dias){      
        switch(dias){

            case LUNES:
                System.out.println("Primer día de la semana");
                break; 
                
            case MARTES:
                System.out.println("Segundo día de la semana");
                break;
            
            case MIERCOLES:
                System.out.println("Tercer día de la semana");
                break;
                
            case JUEVES:
                System.out.println("Cuarto día de la semana");
                break;
                
            case VIERNES:
                System.out.println("Quinto día de la semana");
                break;
            
            case SABADO:
                System.out.println("Sexto día de la semana");
                break;
                
            case DOMINGO:
                System.out.println("Septimo día de la semana");
                break;
                
        }
    }
}


    
                                                            
                                                                            
        

   