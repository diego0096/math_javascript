const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount')
const pResult = document.querySelector('#result')

const inputCupon = document.querySelector('#cupon');
const btn2 = document.querySelector('#calculate');
const inputPrecio = document.querySelector('#precio');
const pResultado = document.querySelector('#resultado');

const inputCoupon = document.querySelector('#cup')
const btn3 = document.querySelector('#calcu');
const inputPr = document.querySelector('#pr');
const pRes = document.querySelector('#resul')

/* const arr = [
    {
        cupon: 'hola',
        discount: 30
    },
    {
        cupon: 'mundo',
        discount: 20
    }
]

for (i = 0; i < arr.length; i++) {
    let item = arr[i];
    console.log(item.cupon)
} */

btn.addEventListener('click', calcularPrecioConDescuento);

btn2.addEventListener('click', calcularCupon);

btn3.addEventListener('click', cuponObj)

function calcularCupon() {
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;

    if (!precio || !cupon) {
        pResultado.innerText = 'Por favor llena el formulario';
        return;
    }

    let descuento;

    if (cupon == 'DiegoQuijano') {
        descuento = 30;
    } else if (cupon == 'felipezuniga') {
        descuento = 25;
    } else {
        pResultado.innerText = 'El cupon no es valido';
        return;
    };

    const nuevoPrecio = (precio * (100 - cupon)) / 100;

    pResultado.innerText = 'El nuevo precio con descuento es $' + nuevoPrecio;
}

function calcularPrecioConDescuento() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        pResult.innerText = 'Por favor llena el formulario';
        return;
    };

    if (discount > 100) {
        pResult.innerText = 'Sobrepasaste el 100%';
        return;
    };



    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}

const couponsObj = {
    'diego': 30,
    'felipe': 25,
    'quijano': 15
}

function cuponObj() {
    const prec = Number(inputPr.value)
    const coup = inputCoupon.value;

    if (!prec || !coup) {
        pRes.innerText = 'Por favor llena el formulario';
        return;
    }

    let desc;

    if (couponsObj[coup]) {
        desc = couponsObj[coup];
    } else {
        pRes.innerText = 'Cupon invalido';
    }

    const newP = (prec * (100 - coup)) / 100;
    pRes.innerText = 'El precio con descuento es' + newP;
}

const couponList = [];

couponList.push({
    name: 'diego',
    discount: 30
})