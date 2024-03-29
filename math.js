console.group('Cuadrado')
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado ** 2;

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado ** 2
    }
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});
console.groupEnd('Cuadrado')

console.group('Triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calculaTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
};

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isosceles')
    } else {
        return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4)
    }
};

function calcularAlturaTrianguloescaleno(a, b, c) {
    const s = (c ** 2 + a ** 2 + b ** 2) / (2 * b);
    const h = Math.sqrt(c ** 2 - s ** 2);
    return h;
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});
console.groupEnd('Triangulo')

console.group('Circulo')
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    }
};

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
})
console.groupEnd('Circulo')


const arr = [1, 2, 3, 4, 5]

const a = Math.max(...arr);

console.log(a)

const b = Math.max.apply(null, arr)

console.log(b)


function calcularPorcentaje(porcentaje, precio) {
    return (precio * (100 - porcentaje)) / 100
}
