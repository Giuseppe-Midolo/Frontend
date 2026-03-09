const numeri = [1, 2, 3, 4, 5];
let sum = 0;
numeri.forEach(myFunction) ;
    

function myFunction(item) {
    sum += item;
}
console.log("La somma è: " + sum);

let media = sum / numeri.length;
console.log("La media è:", media);