"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Cell = /** @class */ (function () {
    function Cell() {
        this.content = null;
    }
    Cell.prototype.markX = function () {
        this.content = 'X';
    };
    Cell.prototype.markO = function () {
        this.content = 'O';
    };
    Cell.prototype.isEmpty = function () {
        return this.content === null;
    };
    Cell.prototype.getContent = function () {
        return this.content || ' ';
    };
    return Cell;
}());
var Grid = /** @class */ (function () {
    function Grid() {
        this.cells = [];
        for (var i = 0; i < 9; i++) {
            var row = [];
            for (var j = 0; j < 9; j++) {
                row.push(new Cell());
            }
            this.cells.push(row);
        }
        this.currentPlayer = 'X'; // Inicia el turno del jugador X
        this.moves = 0;
    }
    Grid.prototype.getCell = function (row, col) {
        return this.cells[row][col];
    };
    Grid.prototype.getCurrentPlayer = function () {
        return this.currentPlayer;
    };
    Grid.prototype.getMoves = function () {
        return this.moves;
    };
    Grid.prototype.render = function () {
        console.log('  1   2   3   4   5   6   7   8   9');
        for (var i = 0; i < 9; i++) {
            console.log(' -----------------------------------');
            process.stdout.write("".concat(i + 1, " "));
            for (var j = 0; j < 9; j++) {
                process.stdout.write("| ".concat(this.cells[i][j].getContent(), " "));
            }
            console.log('|');
        }
        console.log(' -----------------------------------');
    };
    Grid.prototype.switchPlayer = function () {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    };
    Grid.prototype.checkForWinner = function () {
        // Comprueba combinaciones ganadoras en las filas
        for (var i = 0; i < 9; i++) {
            if (this.cells[i][0].getContent() !== ' ' &&
                this.cells[i][0].getContent() === this.cells[i][1].getContent() &&
                this.cells[i][0].getContent() === this.cells[i][2].getContent()) {
                return this.cells[i][0].getContent();
            }
        }
        // Comprueba combinaciones ganadoras en las columnas
        for (var j = 0; j < 9; j++) {
            if (this.cells[0][j].getContent() !== ' ' &&
                this.cells[0][j].getContent() === this.cells[1][j].getContent() &&
                this.cells[0][j].getContent() === this.cells[2][j].getContent()) {
                return this.cells[0][j].getContent();
            }
        }
        // Comprueba combinaciones ganadoras en las diagonales
        if (this.cells[0][0].getContent() !== ' ' &&
            this.cells[0][0].getContent() === this.cells[1][1].getContent() &&
            this.cells[0][0].getContent() === this.cells[2][2].getContent()) {
            return this.cells[0][0].getContent();
        }
        if (this.cells[0][2].getContent() !== ' ' &&
            this.cells[0][2].getContent() === this.cells[1][1].getContent() &&
            this.cells[0][2].getContent() === this.cells[2][0].getContent()) {
            return this.cells[0][2].getContent();
        }
        // Si no hay ganador, devuelve null
        return null;
    };
    Grid.prototype.checkForTie = function () {
        return this.moves === 9 * 9;
    };
    return Grid;
}());
var gameGrid = new Grid();
gameGrid.render();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function promptForMove() {
    rl.question("Turno del jugador ".concat(gameGrid.getCurrentPlayer(), ". Ingrese la fila y columna para marcar (por ejemplo, \"2 3\" para fila 2, columna 3): "), function (input) {
        var _a = input.split(' ').map(function (val) { return parseInt(val, 10); }), row = _a[0], col = _a[1];
        if (row >= 1 && row <= 9 && col >= 1 && col <= 9) {
            var cell = gameGrid.getCell(row - 1, col - 1);
            if (cell.isEmpty()) {
                if (gameGrid.getCurrentPlayer() === 'X') {
                    cell.markX();
                }
                else {
                    cell.markO();
                }
                gameGrid.render();
                gameGrid.moves++;
                var winner = gameGrid.checkForWinner();
                if (winner) {
                    console.log("\u00A1El jugador ".concat(winner, " ha ganado!"));
                    rl.close();
                }
                else if (gameGrid.checkForTie()) {
                    console.log('¡Empate!');
                    rl.close();
                }
                else {
                    gameGrid.switchPlayer();
                    promptForMove();
                }
            }
            else {
                console.log('¡La celda ya está ocupada! Elija otra.');
                promptForMove();
            }
        }
        else {
            console.log('Entrada no válida. Ingrese fila y columna válidas.');
            promptForMove();
        }
    });
}
promptForMove();
