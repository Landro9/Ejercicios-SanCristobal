var PilaSinRepetidos = /** @class */ (function () {
    function PilaSinRepetidos() {
        this.elementos = new Set();
    }
    // Método para agregar elementos a la pila
    PilaSinRepetidos.prototype.push = function (elemento) {
        if (!this.elementos.has(elemento)) {
            this.elementos.add(elemento);
        }
        else {
            console.log("El elemento '".concat(elemento, "' ya est\u00E1 en la pila y no se agregar\u00E1."));
        }
    };
    // Método para sacar elementos de la pila
    PilaSinRepetidos.prototype.pop = function () {
        var elementosArray = Array.from(this.elementos);
        var elemento = elementosArray.pop();
        if (elemento !== undefined) {
            this.elementos.delete(elemento);
        }
        return elemento;
    };
    // Método para consultar la cantidad de elementos en la pila
    PilaSinRepetidos.prototype.size = function () {
        return this.elementos.size;
    };
    // Método para mostrar los elementos de la pila
    PilaSinRepetidos.prototype.mostrarElementos = function () {
        console.log('Elementos en la pila:', Array.from(this.elementos).join(', '));
    };
    return PilaSinRepetidos;
}());
var pilaSinRepetidos = new PilaSinRepetidos();
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mostrarMenu() {
    console.log('1. Agregar elemento');
    console.log('2. Sacar elemento');
    console.log('3. Mostrar tamaño');
    console.log('4. Mostrar elementos');
    console.log('5. Salir');
    rl.question('Seleccione una opción: ', function (respuesta) {
        if (respuesta === '1') {
            rl.question('Ingrese un número para agregar a la pila: ', function (numero) {
                pilaSinRepetidos.push(parseInt(numero));
                mostrarMenu();
            });
        }
        else if (respuesta === '2') {
            var elemento = pilaSinRepetidos.pop();
            if (elemento !== undefined) {
                console.log("Elemento sacado de la pila: ".concat(elemento));
            }
            else {
                console.log('La pila está vacía.');
            }
            mostrarMenu();
        }
        else if (respuesta === '3') {
            console.log("Tama\u00F1o de la pila: ".concat(pilaSinRepetidos.size()));
            mostrarMenu();
        }
        else if (respuesta === '4') {
            pilaSinRepetidos.mostrarElementos();
            mostrarMenu();
        }
        else if (respuesta === '5') {
            rl.close();
        }
        else {
            console.log('Opción no válida. Por favor, seleccione una opción válida.');
            mostrarMenu();
        }
    });
}
console.log('Bienvenido a la Pila de Números Sin Elementos Repetidos');
mostrarMenu();
rl.on('close', function () {
    console.log('Saliendo del programa.');
});
