// 1
function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

// 2
function convertirAMinusculas(texto) {
    return texto.toLowerCase();
}

// 3
function restarNumeros(num1, num2) {
    return num1 - num2;
}

// 4
function dividirNumeros(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir entre cero";
    }
    return num1 / num2;
}

// 5
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}

// 6
function longitudString(texto) {
    return texto.length;
}

console.log(convertirAMayusculas("hola"));
console.log(convertirAMinusculas("HOLA"));
console.log(restarNumeros(10, 5));
console.log(dividirNumeros(10, 2));
console.log(multiplicarNumeros(10, 2));
console.log(longitudString("hola"));