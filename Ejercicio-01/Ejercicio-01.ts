// Implementación de map
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubled = digits.map(function(digit: number): number {
    return digit * 2;
});

console.log(doubled);

// Implementación de find
const students = [
    {name: 'Leandro', age: 30, major:'Programador'},
    {name: 'Julian', age: 20, major:'Artista'},
    {name: 'Victoria', age: 25, major:'Profesora'},
    {name: 'Gaston', age: 19, major:'Programador'},
    {name: 'Julieta', age: 21, major:'Deportista'}
];

const studentOver20 = students.find(function(student: {
    name: string;
    age: number;
    major: string;
}): string | undefined {
    if (student.age > 20) {
        return student.name;
    };
});

console.log(studentOver20);

// Implementación de filter

const CSmajors = students.filter(function(student: {
    name: string;
    major: string;
}): boolean {
    return student.major == 'Programador'
});

console.log(CSmajors);

// Implementación de reduce

function getAvg(total: number, currVal: number): number {
    return total + currVal;
}

const averageScore = digits.reduce(getAvg) / digits.length;
console.log(averageScore);

// Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)

function zero(callback?: (x: number) => number) {
return callback ? callback(0) : 0;
}

function one(callback?: (x: number) => number) {
return callback ? callback(1) : 1;
}

function two(callback?: (x: number) => number) {
return callback ? callback(2) : 2;
}

function three(callback?: (x: number) => number) {
return callback ? callback(3) : 3;
}

function four(callback?: (x: number) => number) {
return callback ? callback(4) : 4;
}

function five(callback?: (x: number) => number) {
return callback ? callback(5) : 5;
}

function six(callback?: (x: number) => number) {
return callback ? callback(6) : 6;
}

function seven(callback?: (x: number) => number) {
return callback ? callback(7) : 7;
}

function eight(callback?: (x: number) => number) {
return callback ? callback(8) : 8;
}

function nine(callback?: (x: number) => number) {
return callback ? callback(9) : 9;
}


// Implementación de las funciones de cálculo

function add(rightOperand: number) {
return (leftOperand: number) => leftOperand + rightOperand;
}

function subtract(rightOperand: number) {
return (leftOperand: number) => leftOperand - rightOperand;
}

function multiply(rightOperand: number) {
return (leftOperand: number) => leftOperand * rightOperand;
}

function divide(rightOperand: number) {
return (leftOperand: number) => {
  if (rightOperand === 0) {
    throw new Error("División por cero no permitida");
  }
  return Math.floor(leftOperand / rightOperand);
};
}

// Ejemplos de uso

console.log(seven(multiply(five()))); // 35
console.log(four(add(nine()))); // 13
console.log(eight(subtract(three()))); // 5
console.log(six(divide(two()))); // 3