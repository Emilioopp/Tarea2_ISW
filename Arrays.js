// 1
function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
console.log(sumaArray([1, 2, 3, 4, 5]));

// 2
function promedioArray(array) {
    let suma = sumaArray(array);
    return suma / array.length;
}
console.log(promedioArray([1, 2, 3, 4, 5]));

// 3
function convertirAMayusculas(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
console.log(convertirAMayusculas(['hola', 'mundo']));

// 4
function filtrarPares(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}
console.log(filtrarPares([1, 2, 3, 4, 5]));