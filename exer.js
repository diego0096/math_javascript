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
