const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// forEach method
people.forEach((printName) => console.log(printName.name));

// for loop traditional
for (let i = 0; i < people.length; i++){
    console.log(people[i].name);
}