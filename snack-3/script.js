const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


// .map method
const newArr = numbers.map(number => number +1);
console.log(newArr);


// for loop traditional
const newArr2 = [];
for (let i = 0; i < numbers.length; i++){
    newArr2.push(numbers[i] + 1);  
};console.log(newArr2);