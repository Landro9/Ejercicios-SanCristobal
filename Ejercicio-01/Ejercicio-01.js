// Implementación de map
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var doubled = digits.map(function (digit) {
    return digit * 2;
});
console.log(doubled);
// Implementación de find
var students = [
    { name: 'Leandro', age: 30, major: 'Programador' },
    { name: 'Julian', age: 20, major: 'Artista' },
    { name: 'Victoria', age: 25, major: 'Profesora' },
    { name: 'Gaston', age: 19, major: 'Programador' },
    { name: 'Julieta', age: 21, major: 'Deportista' }
];
var studentOver20 = students.find(function (student) {
    if (student.age > 20) {
        return student.name;
    }
    ;
});
console.log(studentOver20);
// Implementación de filter
var CSmajors = students.filter(function (student) {
    return student.major == 'Programador';
});
console.log(CSmajors);
// Implementación de reduce
function getAvg(total, currVal) {
    return total + currVal;
}
var averageScore = digits.reduce(getAvg) / digits.length;
console.log(averageScore);
// Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)
function zero(callback) {
    return callback ? callback(0) : 0;
}
function one(callback) {
    return callback ? callback(1) : 1;
}
function two(callback) {
    return callback ? callback(2) : 2;
}
function three(callback) {
    return callback ? callback(3) : 3;
}
function four(callback) {
    return callback ? callback(4) : 4;
}
function five(callback) {
    return callback ? callback(5) : 5;
}
function six(callback) {
    return callback ? callback(6) : 6;
}
function seven(callback) {
    return callback ? callback(7) : 7;
}
function eight(callback) {
    return callback ? callback(8) : 8;
}
function nine(callback) {
    return callback ? callback(9) : 9;
}
// Implementación de las funciones de cálculo
function add(rightOperand) {
    return function (leftOperand) { return leftOperand + rightOperand; };
}
function subtract(rightOperand) {
    return function (leftOperand) { return leftOperand - rightOperand; };
}
function multiply(rightOperand) {
    return function (leftOperand) { return leftOperand * rightOperand; };
}
function divide(rightOperand) {
    return function (leftOperand) {
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
