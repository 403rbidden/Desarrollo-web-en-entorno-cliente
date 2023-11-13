# Desarrollo Web en Entorno Cliente
Utilización de las características específicas de lenguajes y entornos de programación en el desarrollo de aplicaciones para clientes web.

Indicaciones:
- Los ejercicios pueden tener más de una solución.
Buscar la manera más óptima teniendo en cuenta el número de instrucciones, sentencias y estructuras, etc.
- Utilizar un único fichero ".html".

Crear arhivo html.
```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Desarrollo web en entorno cliente</title>
        <script src="Ruta\NombreDelScript.js"></script>
    </head>
    <body>
    </body>
</html>
```

Ejercicio 1
- Realiza un script que solicite el nombre, apellido y edad.
- Salude a su nombre completo y muestre si es mayor de edad o no.
- Mayor de edad se considerará a partir de 18 años inclusive.
- Ejemplo de mensaje “Hola, NOMBRE APELLIDO.
- Eres mayor de edad” o “Hola, NOMBRE APELLIDO.
- Eres menor de edad”.

Ejercicio 2
- Realiza un script para que pida al usuario dos números y solicite que operación quiere realizar (1 Sumar, 2 Restar, 3 Multiplicar, 4 Dividir). 
- Finalmente muestre el resultado de la operación e indique si quiere repetir la operación (S/N). 
- El programa finaliza cuando el usuario introduce "N".

Ejercicio 3
Realiza un script para validar un DNI y que muestre si es correcto o no. Un DNI cumple las siguientes características:
- Está formado por un total de 8 dígitos y una letra. 
- Los dígitos pueden tomar el valor de 0 a 99999999.
- La letra puede ser T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E.
- Para saber que letra le corresponde se realiza una división de la parte numérica por 23 y con el resto se determina la letra correspondiente.
- La siguiente tabla muestra el valor del resto y la letra correspondiente.

| RESTO | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |
|-------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|----|----|----|----|----|----|
| LETRA | T | R | W | A | G | M | Y | F | P | D | X  | B  | N  | J  | Z  | S  | Q  | V  | H  | L  | C  | K  | E  |

Se pide que la funcionalidad se divida en funciones, una función que permita obtener la letra según un número y una función que valide un DNI.

