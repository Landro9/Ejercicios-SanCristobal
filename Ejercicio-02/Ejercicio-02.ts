class PilaSinRepetidos<T> {
    private elementos: Set<T> = new Set();

    // Método para agregar elementos a la pila
    push(elemento: T): void {
        if (!this.elementos.has(elemento)) {
            this.elementos.add(elemento);
        } else {
            console.log(`El elemento '${elemento}' ya está en la pila y no se agregará.`);
        }
    }

    // Método para sacar elementos de la pila
    pop(): T | undefined {
        const elementosArray = Array.from(this.elementos);
        const elemento = elementosArray.pop();
        if (elemento !== undefined) {
            this.elementos.delete(elemento);
        }
        return elemento;
    }

    // Método para consultar la cantidad de elementos en la pila
    size(): number {
        return this.elementos.size;
    }

    // Método para mostrar los elementos de la pila
    mostrarElementos(): void {
        console.log('Elementos en la pila:', Array.from(this.elementos).join(', '));
    }
}

const pilaSinRepetidos = new PilaSinRepetidos<number>();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('1. Agregar elemento');
    console.log('2. Sacar elemento');
    console.log('3. Mostrar tamaño');
    console.log('4. Mostrar elementos');
    console.log('5. Salir');

    rl.question('Seleccione una opción: ', (respuesta) => {
        if (respuesta === '1') {
            rl.question('Ingrese un número para agregar a la pila: ', (numero) => {
                pilaSinRepetidos.push(parseInt(numero));
                mostrarMenu();
            });
        } else if (respuesta === '2') {
            const elemento = pilaSinRepetidos.pop();
            if (elemento !== undefined) {
                console.log(`Elemento sacado de la pila: ${elemento}`);
            } else {
                console.log('La pila está vacía.');
            }
            mostrarMenu();
        } else if (respuesta === '3') {
            console.log(`Tamaño de la pila: ${pilaSinRepetidos.size()}`);
            mostrarMenu();
        } else if (respuesta === '4') {
            pilaSinRepetidos.mostrarElementos();
            mostrarMenu();
        } else if (respuesta === '5') {
            rl.close();
        } else {
            console.log('Opción no válida. Por favor, seleccione una opción válida.');
            mostrarMenu();
        }
    });
}

console.log('Bienvenido a la Pila de Números Sin Elementos Repetidos');
mostrarMenu();

rl.on('close', () => {
    console.log('Saliendo del programa.');
});