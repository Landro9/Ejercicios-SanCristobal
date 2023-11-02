import * as readline from 'readline';

// Clase que representa una celda en el tablero
class Cell {
  private content: string | null;

  constructor() {
    this.content = null;
  }

  markX() {
    this.content = 'X'; // Marca la celda con una "X"
  }

  markO() {
    this.content = 'O'; // Marca la celda con una "O"
  }

  isEmpty() {
    return this.content === null;  // Verifica si la celda está vacía
  }

  getContent() {
    return this.content || ' '; // Obtiene el contenido de la celda ("X", "O" o espacio en blanco)
  }
}

// Clase que representa el tablero de juego
class Grid {
  private cells: Cell[][];
  private currentPlayer: string;
  private moves: number;

  constructor() {
    this.cells = [];
    for (let i = 0; i < 9; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 9; j++) {
        row.push(new Cell());
      }
      this.cells.push(row);
    }
    this.currentPlayer = 'X'; // Inicia el turno del jugador X
    this.moves = 0;
  }

  getCell(row: number, col: number) {
    return this.cells[row][col];
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  getMoves() {
    return this.moves;
  }

   // Renderiza el tablero en la consola
  render() {
    console.log('   1   2   3   4   5   6   7   8   9');
    for (let i = 0; i < 9; i++) {
      console.log(' -------------------------------------');
      process.stdout.write(`${i + 1} `);
      for (let j = 0; j < 9; j++) {
        process.stdout.write(`| ${this.cells[i][j].getContent()} `);
      }
      console.log('|');
    }
    console.log(' -------------------------------------');
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  // Verifica si hay un ganador
  checkForWinner() {
    // Comprueba combinaciones ganadoras en las filas
    for (let i = 0; i < 9; i++) {
      if (
        this.cells[i][0].getContent() !== ' ' &&
        this.cells[i][0].getContent() === this.cells[i][1].getContent() &&
        this.cells[i][0].getContent() === this.cells[i][2].getContent()
      ) {
        return this.cells[i][0].getContent();
      }
    }
  
    // Comprueba combinaciones ganadoras en las columnas
    for (let j = 0; j < 9; j++) {
      if (
        this.cells[0][j].getContent() !== ' ' &&
        this.cells[0][j].getContent() === this.cells[1][j].getContent() &&
        this.cells[0][j].getContent() === this.cells[2][j].getContent()
      ) {
        return this.cells[0][j].getContent();
      }
    }
  
    // Comprueba combinaciones ganadoras en las diagonales
    if (
      this.cells[0][0].getContent() !== ' ' &&
      this.cells[0][0].getContent() === this.cells[1][1].getContent() &&
      this.cells[0][0].getContent() === this.cells[2][2].getContent()
    ) {
      return this.cells[0][0].getContent();
    }
    if (
      this.cells[0][2].getContent() !== ' ' &&
      this.cells[0][2].getContent() === this.cells[1][1].getContent() &&
      this.cells[0][2].getContent() === this.cells[2][0].getContent()
    ) {
      return this.cells[0][2].getContent();
    }
  
    // Si no hay ganador, devuelve null
    return null;
  }
  
  // Verifica si el juego termina en empate
  checkForTie() {
    return this.moves === 9 * 9;
  }
}

// Instancia del tablero de juego
const gameGrid = new Grid();
gameGrid.render();

// Lectura de entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función que solicita al usuario ingresar su movimiento
function promptForMove() {
  rl.question(`Turno del jugador ${gameGrid.getCurrentPlayer()}. Ingrese la fila y columna para marcar (por ejemplo, "2 3" para fila 2, columna 3): `, (input) => {
    const [row, col] = input.split(' ').map((val) => parseInt(val, 10));
    if (row >= 1 && row <= 9 && col >= 1 && col <= 9) {
      const cell = gameGrid.getCell(row - 1, col - 1);
      if (cell.isEmpty()) {
        if (gameGrid.getCurrentPlayer() === 'X') {
          cell.markX();
        } else {
          cell.markO();
        }
        gameGrid.render();

        const winner = gameGrid.checkForWinner();
        if (winner) {
          console.log(`¡El jugador ${winner} ha ganado!`);
          rl.close();
        } else if (gameGrid.checkForTie()) {
          console.log('¡Empate!');
          rl.close();
        } else {
          gameGrid.switchPlayer();
          promptForMove();
        }
      } else {
        console.log('¡La celda ya está ocupada! Elija otra.');
        promptForMove();
      }
    } else {
      console.log('Entrada no válida. Ingrese fila y columna válidas.');
      promptForMove();
    }
  });
}

// Inicia el juego solicitando el primer movimiento
promptForMove();