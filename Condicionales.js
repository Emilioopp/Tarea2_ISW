const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// 1
if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El número mayor es ${numero1}`);
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El número mayor es ${numero2}`);
} else {
    console.log(`El número mayor es ${numero3}`);
}

// 2
if (numero1 < numero2 && numero1 < numero3) {
    console.log(`El número menor es ${numero1}`);
}
else if (numero2 < numero1 && numero2 < numero3) {
    console.log(`El número menor es ${numero2}`);
}
else {
    console.log(`El número menor es ${numero3}`);
}

// 3
if (numero1 % 2 === 0) {
    console.log(`El número ${numero1} es par`);
}
else {
    console.log(`El número ${numero1} es impar`);
}

// 4
if (numero2 % 2 === 0) {
    console.log(`El número ${numero2} es par`);
}
else {
    console.log(`El número ${numero2} es impar`);
}

// 5
if (numero3 % 2 === 0) {
    console.log(`El número ${numero3} es par`);
} else {
    console.log(`El número ${numero3} es impar`);
}

// 6
if (numero1 % 5 === 0) {
    console.log(`El número ${numero1} es múltiplo de 5`);
}
else {
    console.log(`El número ${numero1} no es múltiplo de 5`);
}

// 7
if (numero2 % 5 === 0) {
    console.log(`El número ${numero2} es múltiplo de 5`);
} else {
    console.log(`El número ${numero2} no es múltiplo de 5`);
}

// 8
if (numero3 % 5 === 0) {
    console.log(`El número ${numero3} es múltiplo de 5`);
}
else {
    console.log(`El número ${numero3} no es múltiplo de 5`);
}