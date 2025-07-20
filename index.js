// TODO: Comentar esto

// Función utilitaria para "simplificar" el llamado a console.log
const msg = (mensaje) => console.log(mensaje);

// 1
// TODO: Explicar en mis propias palabras que son las funciones y porque son útiles
// Ejemplo, son porciones de codigo que permiten su reutilización y es muy util
// porque evitamos escribir el mismo código y bla bla... (pendiente de revisar)

msg("Ejercicio 2");

// 2
function calcularGastosTotales(renta, comida, transporte){
    return renta + comida + transporte;
}

// 3
function calcularAhorroMensual(ingresosMensuales, gastosTotales) {
    return ingresosMensuales - gastosTotales;
}

// 4
console.log(calcularAhorroMensual(50000,calcularGastosTotales(15000, 5000, 5000)));

// 5
const moneda = "MXN";

function mostrarResumenFinanciero(ingresos, gastos, ahorro) {
    let ingresos_resumen = ingresos;
    let gastos_resumen = gastos;
    let ahorro_resumen = ahorro;

    return `Ingresos: $${ingresos_resumen} ${moneda}, Gastos: $${gastos_resumen} ${moneda}, Ahorro: $${ahorro_resumen} ${moneda}.`
}

console.log(mostrarResumenFinanciero(10000, 5000, 5000));

// 6
const resultado_gasto_total = calcularGastosTotales(5000, 2000, 1500);
console.log(`Ahorro mensual: $${calcularAhorroMensual(10000, resultado_gasto_total)} ${moneda}`)

// 7
function verificarSaldo() {
    let saldoSeguro = 10000;
}

// console.log(saldoSeguro);
// TODO: Responder que ocurrió y porqué.

// 8 
var descuento = 100;

function calcularDescuento(){
    descuento = 50;
    console.log(`Dentro de la función, descuento es ${descuento}`);
}

console.log(`Antes de la función, descuento es ${descuento}`);
calcularDescuento();
console.log(`Después de la función, descuento es ${descuento}`);

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