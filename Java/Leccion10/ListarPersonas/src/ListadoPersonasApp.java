import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //empezamos con el menú
        var salir = false;
        while(!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada,personas);
            }catch (Exception e){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }
    }//fin metodo main
    private static void mostrarMenu(){
        //mostramos las opciones
        System.out.println("""
        ****** Listado de Personas ******
        1. Agregar
        2. Listar
        3. Salir
             """);
        System.out.print("Digite una de las opciones: ");
    }//Fin del metodo mostrarMenu
    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //revisamos la opcion digital a traves de un switch
        switch (opcion){
            case 1-> {//agregar una persona a lista
                System.out.println("Digite su nombre: ");
                var nombre = entrada.nextLine();
                System.out.println("Digite su telefono: ");
                var tel = entrada.nextLine();
                System.out.println("Digite su correo: ");
                var email = entrada.nextLine();
                //creamos el objeto de persona
                var persona = new Persona(nombre, tel, email);
               //gregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" elementos");
            }//fin caso 1
            case 2->{ //listar personas
                System.out.println("Listado de personas: ");
                //mejoras con lambda y el metodo de referncia
                //personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println);
            }//final caso 2
            case 3 ->{//Salir ciclo
                System.out.println("Hasta Pronto...");
                salir = true;
            }//fin caso 3
            default -> System.out.println("Opcion incorrecta: "+opcion);
        }//fin del switch
        return salir;
    }//Fin del metodo ejecutarOperacion
}