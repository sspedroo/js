let num = [5, 9, 2, 8, 3]
let i = 0

let posi = num.indexOf(8)
console.log(posi)
/*
for(i = 0 ; i < num.length; i++){
    console.log(num[i])
}
*/

for(let pos in num) {
    console.log(num[pos])
}
