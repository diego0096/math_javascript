function str() {
    const arr = ['cat', 'game', 'socks']
/* const a = [...arr]

console.log(a) */

const newArr = [];

for (i = 0; i < arr.length; i++) {
    let element = '*****\\n*' + arr[i] + '*\\n*****';
    newArr.push(element)
}

console.log(arr)
console.log(newArr)

}

str();


const array = ['acv', 'iyh', 'ihj']

const ar = array.map(item => '---' + item + '+++')

console.log(array)
console.log(ar)



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const acumulator = arr.reduce((accumulator,currentValue) => accumulator + currentValue)

console.log(acumulator)

const prom = acumulator/arr.length

console.log(prom)


const arra = [1, 2, 3, 4]

let list = 0;
    for (let i = 0; i <= arra.length; i++) {
        list = list + arra[i];
        if(list % 2 == 0) {
            console.log(list);
        }
    }

function par (arra) {
    
}