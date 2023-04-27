
public class TetArgumentosVariables {

    private static int[] numeros;
    public static void main (String [] args){
       imprimirNumeros(3, 4, 5);
       imprimirNumeros(6, 7, 8);
       variosParametros("Juan","Gonzales" ,7, 8, 9);
       variosParametros("Marta","Garbinez" , 2, 3, 4);
    }
    private static void variosParametros(String nombre, String apellido, int ...numeros){
        System.out.println("Nombre: "+nombre+ "Apellido: "+apellido);
        imprimirNumeros(numeros); 
    }
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: "+numeros[i]);
        }
    }

  
}
