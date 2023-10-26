"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    FiguraGeometrica.prototype.calcularPerimetro = function () {
        throw new Error("Método no implementado");
    };
    FiguraGeometrica.prototype.calcularArea = function () {
        throw new Error("Método no implementado");
    };
    return FiguraGeometrica;
}());
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Cuadrado.prototype.calcularPerimetro = function () {
        return 4 * this.lado;
    };
    Cuadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    return Cuadrado;
}(FiguraGeometrica));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.radio;
    };
    Circulo.prototype.calcularArea = function () {
        return Math.PI * this.radio * this.radio;
    };
    return Circulo;
}(FiguraGeometrica));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function menu() {
    console.log("Menú:");
    console.log("1. Calcular perímetro y área de un cuadrado");
    console.log("2. Calcular perímetro y área de un círculo");
    console.log("0. Salir");
    rl.question("Elija una opción: ", function (opcion) {
        switch (opcion) {
            case "1":
                rl.question("Ingrese el lado del cuadrado: ", function (ladoCuadradoStr) {
                    var ladoCuadrado = parseFloat(ladoCuadradoStr);
                    var cuadrado = new Cuadrado(ladoCuadrado);
                    console.log("Perímetro del cuadrado: " + cuadrado.calcularPerimetro());
                    console.log("Área del cuadrado: " + cuadrado.calcularArea());
                    menu();
                });
                break;
            case "2":
                rl.question("Ingrese el radio del círculo: ", function (radioCirculoStr) {
                    var radioCirculo = parseFloat(radioCirculoStr);
                    var circulo = new Circulo(radioCirculo);
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
