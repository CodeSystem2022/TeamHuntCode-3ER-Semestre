import java.util.Scanner;

public class calculadora {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) { // ciclo infinito
            mostrarMenu();
            try {
                int operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 5) {
                    if (operacion == 5) {
                        System.out.println("Hasta pronto...");
                        break; // Rompe el ciclo
                    } else {
                        ejecutarOperacion(operacion, entrada);
                    }
                } else {
                    System.out.println("Opción errónea: " + operacion);
                }
                System.out.println();
            } catch (Exception e) {
                System.out.println("Ocurrió un error: " + e.getMessage());
                System.out.println();
            }
        } // Fin del while
    }

    private static void mostrarMenu() {
        // Mostrar menu
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicación
                4. División
                5. Salir
                """);
        System.out.println("¿Operación a realizar?");
    }

    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        Double resultado;
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división: " + resultado);
            }
            default -> System.out.println("Opción errónea: " + operacion);
        } // fin del switch
    }
}





