package test;

public class TestAutoboxingUnboxing {

    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
        Clases envolventes de tipo primitivos
        
        int = la clase envolvente es Integer
        long = la clase envolvente es Long
        float = la clase envolvente es Float
        double = la clase envolvente es Double
        boolen = la clase envolvente es Boolean
        byte = la clase envolvente es Byte
        char = la clase envolvente es Character
        short = la clase envolvente es Short
         */

        int enteroPrim = 10;
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10;
        System.out.println("entero = " + entero.doubleValue());
    
        int entero2 = entero; //Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
