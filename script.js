import java.util.Scanner;

public class MiniApp {

    // --- FUNCIONES DE CALCULADORA ---

    public static double sumar(double a, double b) {

        return a + b;

    }

    public static double restar(double a, double b) {

        return a - b;

    }

    public static double multiplicar(double a, double b) {

        return a * b;

    }

    public static double dividir(double a, double b) {

        if (b == 0) {

            System.out.println("Error: no se puede dividir entre 0");

            return 0;

        }

        return a / b;

    }

    // --- FUNCIONES DE CONVERTIDOR ---

    public static double mxnToUsd(double cantidad) {

        double tasa = 0.058; // 1 MXN = 0.058 USD (valor ejemplo)

        return cantidad * tasa;

    }

    public static double usdToMxn(double cantidad) {

        double tasa = 17.20; // 1 USD = 17.20 MXN (valor ejemplo)

        return cantidad * tasa;

    }

    // --- MAIN PROGRAM ---

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int opcion;

        do {

            System.out.println("\n==========================");

            System.out.println("   MINI-APP INTERACTIVA");

            System.out.println("==========================");

            System.out.println("1. Calculadora");

            System.out.println("2. Convertidor de divisas");

            System.out.println("3. Salir");

            System.out.print("Elige una opción: ");

            opcion = sc.nextInt();

            switch (opcion) {

                // ---------- CALCULADORA ----------

                case 1:

                    System.out.print("Ingresa número 1: ");

                    double n1 = sc.nextDouble();

                    System.out.print("Ingresa número 2: ");

                    double n2 = sc.nextDouble();

                    System.out.println("\nOperaciones:");

                    System.out.println("1. Sumar");

                    System.out.println("2. Restar");

                    System.out.println("3. Multiplicar");

                    System.out.println("4. Dividir");

                    System.out.print("Elige operación: ");

                    int op = sc.nextInt();

                    double resultado = 0;

                    switch (op) {

                        case 1: resultado = sumar(n1, n2); break;

                        case 2: resultado = restar(n1, n2); break;

                        case 3: resultado = multiplicar(n1, n2); break;

                        case 4: resultado = dividir(n1, n2); break;

                        default:

                            System.out.println("Opción no válida.");

                            continue;

                    }

                    System.out.println("Resultado: " + resultado);

                    break;

                // ---------- CONVERTIDOR ----------

                case 2:

                    System.out.println("\nCONVERTIDOR MXN ↔ USD");

                    System.out.println("1. MXN a USD");

                    System.out.println("2. USD a MXN");

                    System.out.print("Elige una opción: ");

                    int con = sc.nextInt();

                    System.out.print("Cantidad: ");

                    double cantidad = sc.nextDouble();

                    if (con == 1) {

                        System.out.println("USD: " + mxnToUsd(cantidad));

                    } else if (con == 2) {

                        System.out.println("MXN: " + usdToMxn(cantidad));

                    } else {

                        System.out.println("Opción inválida.");

                    }

                    break;

                // ---------- SALIR ----------

                case 3:

                    System.out.println("Saliendo... ¡Gracias por usar la app!");

                    break;

                default:

                    System.out.println("Opción no válida.");

            }

        } while (opcion != 3);

        sc.close();

    }

}