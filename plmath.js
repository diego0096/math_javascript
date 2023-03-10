class plMath {
    static esPar(){}
    static esImpar(){}
}

const plMath = {}

plMath.calcularPromedio = function calcularPromedio(lista) {

let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    }

    const promedio = sumaLista / sumaLista.length;
    console.log(promedio)
    return promedio
}

plMath.esPar = function esPar(lists) { 
    return !(lists.length % 2)
}
plMath.esImpar = function esImpar(lists) {
    return lists.length % 2;
}

plMath.calcProm = function calcProm(list) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumList = list.reduce(sumarTodosElementos);
    const prom = sumList / list.length;
    console.log(prom);
    return prom
}

plMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lists = ordenarLista(listaDesordenada);
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

/* calcularMediana([10, 20, 30, 40]) */


plMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        if (valorAcumulado > nuevoValor) {
            return 1;
        } else if (valorAcumulado == nuevoValor) {
            return 0;
        } else if (valorAcumulado < nuevoValor) {
            return -1;
        }

        //Otra forma de hacer el ordenamiento sin las condicionales
        return valorAcumulado - nuevoValor;
        //Lista al reves
        return nuevoValor - valorAcumulado;
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    return lista;
}

plMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
    console.log(listaCount);

    const listaArray = Object.entries(listaCount)
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1]
    /* console.log({listaArray, listaCount, listaOrdenada, listaMaxNumber}); */
    /* console.log('La moda es: ' + listaMaxNumber[0]); */
    const listaMaxNumberAnt = listaOrdenada[listaOrdenada.length - 2]

    if(listaMaxNumber[1] === listaMaxNumberAnt[1]) {
        var moda = 'No hay moda'
    } else {
        var moda = listaMaxNumber[0];
    }
    return moda;
}

plMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort2(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort2);
    return lista;
}