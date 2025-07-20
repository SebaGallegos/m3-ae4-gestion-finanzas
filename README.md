# Tarea M3-AE4-individual

## Contexto

Imagina que estás organizando tus finanzas personales. Necesitas una herramienta sencilla que te ayude a calcular cuánto dinero puedes ahorrar cada mes con base en tus ingresos y tus gastos. Para lograrlo, vas a implementar una serie de funciones en JavaScript que realicen estos cálculos y te ayuden a mantener tu presupuesto bajo control. A lo largo del ejercicio, pondrás en práctica conceptos fundamentales sobre funciones.

## Actividad y respuestas

1. ¿Qué es una función y para qué sirve? Escribe una breve definición con tus propias palabras sobre qué es una función en programación y cuál es su propósito.

    **Respuesta:** Una función es un bloque de código reutilizable que realiza una tarea específica. En programación, sirve para organizar el código, evitar la repetición y facilitar la lectura y el mantenimiento del mismo. Las funciones pueden recibir datos (parámetros), procesarlos y devolver un resultado (valor de retorno).

2. Definir funciones: Define una función llamada `calcularGastosTotales` que reciba tres parámetros: `renta`, `comida`, y `transporte`. Esta función debe calcular la suma total de los tres gastos y retornar el resultado.

3. Paso de parámetros en una función: Define una función llamada `calcularAhorroMensual` que reciba dos parámetros: `ingresosMensuales` y `gastosTotales`. Dentro de la función, resta los gastos a los ingresos y devuelve el ahorro mensual.

4. Retorno de una función: Usa `console.log()` para mostrar el resultado de invocar `calcularAhorroMensual` con datos de ejemplo. El valor retornado debe ser visible en consola.

5. Variables locales y variables globales: Declara una variable global llamada `moneda = "MXN"`. Luego, dentro de la función `mostrarResumenFinanciero`, define variables locales para los ingresos, gastos y ahorro. Imprime el resumen financiero en consola, incluyendo la moneda global.

6. Invocación de una función: Invoca `calcularGastosTotales` con valores de ejemplo (por ejemplo: 5000, 2000, 1500). Usa ese resultado como argumento para `calcularAhorroMensual`.

7. Alcance de las variables locales: Crea una función `verificarSaldo` que defina una variable local llamada `saldoSeguro` dentro de la función. Intenta imprimir `saldoSeguro` fuera de la función y observa qué error aparece. Explica por qué ocurre.

    **Respuesta:** Al intentar imprimir `saldoSeguro` fuera de la función `verificarSaldo`, se produce un error `ReferenceError: saldoSeguro is not defined` porque las variables declaradas en este caso con `let` (aunque también ocurre con `var` y `const`) dentro de una función no pueden ser accedidas fuera de su ámbito local.

8. El problema de las variables globales: Imagina que defines una variable global llamada `descuento = 100`. Luego, dentro de otra función llamada `calcularDescuento`, también defines `descuento = 50`. Ejecuta ambas funciones e imprime el valor de `descuento` antes y después de cada una. Analiza qué ocurrió con la variable global y por qué es importante evitar este tipo de situaciones.

9. Crear una función anidada: Crea una función llamada `gestionarFinanzas` que contenga dentro otra función llamada `imprimirResumen`. `gestionarFinanzas` debe calcular los gastos totales y el ahorro, y luego invocar la función `imprimirResumen` para mostrar un mensaje como: `"Tus gastos fueron de X y tu ahorro fue de Y."`
