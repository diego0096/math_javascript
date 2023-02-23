function calcularPromedio(lista) {

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    }

    const promedio = sumaLista / sumaLista.length;
    console.log(promedio)
    return promedio
}


function calcProm(list) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumList = list.reduce(sumarTodosElementos);
    const prom = sumList / list.length;
    console.log(prom);
    return prom
}

function esPar(lists) {
    return !(lists.length % 2)
}
function esImpar(lists) {
    return lists.length % 2;
}

function calcularMediana(lists) {
    const listaEsPar = esPar(lists);

    if (listaEsPar) {
        const indexMitadListaPar1 = (lists.length / 2) - 1;
        const indexMitadListaPar2 = lists.length / 2;

        /* const listaMitades = [lists[indexMitadListaPar1], lists[indexMitadListaPar2]] */
        const listaMitades = [];

        listaMitades.push(lists[indexMitadListaPar1])
        listaMitades.push(lists[indexMitadListaPar2])
        const medianaListaPar = calcularPromedio(listaMitades)
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lists.length / 2);
        const medianaListaImpar = lists[indexMitadListaImpar]
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

calcularMediana([10, 20, 30, 40])


const arr = [1, 6, 2, 7, 5, 4, 9]

