/**
 * Programa que simula una gestión de finanzas
 * para practicar funciones en JavaScript
 * 
 * @author Sebastián Gallegos Frías
 */

console.log("Ejercicio 2");

// 2
function calcularGastosTotales(renta, comida, transporte){
    return renta + comida + transporte;
}

console.log("Ejercicio 3");

// 3
function calcularAhorroMensual(ingresosMensuales, gastosTotales) {
    return ingresosMensuales - gastosTotales;
}

console.log("Ejercicio 4");

// 4
console.log(calcularAhorroMensual(50000,calcularGastosTotales(15000, 5000, 5000)));

console.log("Ejercicio 5");

// 5
const moneda = "MXN";

function mostrarResumenFinanciero(ingresos, gastos, ahorro) {
    let ingresos_resumen = ingresos;
    let gastos_resumen = gastos;
    let ahorro_resumen = ahorro;

    return `Ingresos: $${ingresos_resumen} ${moneda}, Gastos: $${gastos_resumen} ${moneda}, Ahorro: $${ahorro_resumen} ${moneda}.`
}

console.log(mostrarResumenFinanciero(10000, 5000, 5000));

console.log("Ejercicio 6");

// 6
const resultadoGastoTotal = calcularGastosTotales(5000, 2000, 1500);
console.log(`Ahorro mensual: $${calcularAhorroMensual(10000, resultadoGastoTotal)} ${moneda}`)

console.log("Ejercicio 7 se ejecutará al final.");
// 7 -> Se ejecutará al final del archivo porque sucederá un error.

console.log("Ejercicio 8");
// 8 
var descuento = 100;

function calcularDescuento(){
    descuento = 50;
    console.log(`Dentro de la función, descuento es ${descuento}`);
}

console.log(`Antes de la función, descuento es ${descuento}`);
calcularDescuento();
console.log(`Después de la función, descuento es ${descuento}`);

console.log("Ejercicio 9");

// 9
function gestionarFinanzas() {
    // calcular gasto total y ahorro
    const renta = 10000;
    const comida = 3000;
    const transporte = 2000;
    const ingresosMensuales = 50000;
    const gastosTotales = calcularGastosTotales(renta, comida, transporte);
    const ahorroMensual = calcularAhorroMensual(ingresosMensuales, gastosTotales);
    // imprimir resumen financiero
    imprimirResumen();

    function imprimirResumen() {
        console.log(`Tus gastos fueron de $${gastosTotales} ${moneda} y tu ahorro fue de $${ahorroMensual} ${moneda}.`);
    }
}

gestionarFinanzas();

console.log("Ejercicio 7");

function verificarSaldo() {
    let saldoSeguro = 10000;
}

console.log(saldoSeguro);