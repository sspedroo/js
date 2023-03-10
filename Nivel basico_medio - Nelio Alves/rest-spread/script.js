//REST: valores passados com virgula sejam convertido em um array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total;
}

const result1 = sum(1,2,3,4)

console.log(result1)

const result2 = Math.max(2,5,9,3)

console.log(result2)


//SPREAD: array => valores separados por virgula

const myNumbers = [2,3,10,5];
const result3 = Math.max(...myNumbers)

console.log(result3)

//SPREAD: objeto => valores separados por virgula

const item = {
    description: "Computador",
    price: 3000.0,
    quantity: 1
}

