const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const studente = students.find(student => student.name === 'Marco Lanci');
/* console.log(studente) */

const classStudente = studente ? studente.class : 'Studente non trovato';

console.log(classStudente)



let studentClass = 'Studente non trovato';
for (let i = 0; i < students.length; i++){
  if (students[i].name === 'Marco Lanci'){
    studentClass = students[i].class;
  }
}
console.log(studentClass)