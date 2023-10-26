import * as readline from 'readline';

class FiguraGeometrica {
    calcularPerimetro(): number {
        throw new Error("Método no implementado");
    }

    calcularArea(): number {
        throw new Error("Método no implementado");
    }
}

class Cuadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Circulo extends FiguraGeometrica {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("Menú:");
    console.log("1. Calcular perímetro y área de un cuadrado");
    console.log("2. Calcular perímetro y área de un círculo");
    console.log("0. Salir");

    rl.question("Elija una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                rl.question("Ingrese el lado del cuadrado: ", (ladoCuadradoStr) => {
                    const ladoCuadrado = parseFloat(ladoCuadradoStr);
                    const cuadrado = new Cuadrado(ladoCuadrado);
                    console.log("Perímetro del cuadrado: " + cuadrado.calcularPerimetro());
                    console.log("Área del cuadrado: " + cuadrado.calcularArea());
                    menu();
                });
                break;
            case "2":
                rl.question("Ingrese el radio del círculo: ", (radioCirculoStr) => {
                    const radioCirculo = parseFloat(radioCirculoStr);
                    const circulo = new Circulo(radioCirculo);
                    console.log("Perímetro del círculo: " + circulo.calcularPerimetro());
                    console.log("Área del círculo: " + circulo.calcularArea());
                    menu();
                });
                break;
            case "0":
                console.log("Saliendo del programa");
                rl.close();
                break;
            default:
                console.log("Opción no válida");
                menu();
                break;
        }
    });
}

menu();
