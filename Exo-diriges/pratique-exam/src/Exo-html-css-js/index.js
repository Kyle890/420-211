/* Exo 1

const liste1 = []
const var1 = 0
const var2 = {
    actif: true,
    ident:"S33-12B",
    position: [45.61835861911019, -73.60698829870468]
}

(liste1.length == 0) && console.log("la liste1 est vide")


console.log((var1 == 0) ? "var1 vaut 0" : "var1 est différent de 0");


(var1 === 0) && (var2.position = []);


liste1.push((var2.actif) ? 1 : 0); */

/* Exo 2

let nbRandom1 = Math.floor(Math.random() * 100);
let nbRandom2 = Math.floor(Math.random() * 100);

const add = (nbRandom1, nbRandom2) => {
    console.log("Addition entre " + nbRandom1 + " et " + nbRandom2 + " est égal à " + (nbRandom1 + nbRandom2));
}

add(nbRandom1, nbRandom2)

const sub = (nbRandom1, nbRandom2) => {
    console.log("Soustraction entre " + nbRandom1 + " et " + nbRandom2 + " est égal à " + (nbRandom1 - nbRandom2));
}

sub(nbRandom1, nbRandom2)

const mult = (nbRandom1, nbRandom2) => {
    console.log("Multiplication entre " + nbRandom1 + " et " + nbRandom2 + " est égal à " + (nbRandom1 * nbRandom2));
}

mult(nbRandom1, nbRandom2)

const div = (nbRandom1, nbRandom2) => {
    if( nbRandom2 != 0){
        console.log("Division " + nbRandom1 + " et " + nbRandom2 + " est égal à " + (nbRandom1 / nbRandom2));
    } else{
        console.log("On ne fait pas division par 0.")
    }
}

div(nbRandom1, nbRandom2) */

/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const mergedArray = [...arr1,...arr2];
console.log(mergedArray)*/

/*
const user = { name: "John", years: 30 };

const {name, years: age} = user;
const isAdmin = false;

console.log(name);
console.log(age);
console.log(isAdmin);*/

/*let items = ["Egg", 0.25, 12];

[name, quantity, price] = items;

console.log(`Item: ${name}, Quantité: ${quantity}, Prix: ${price}`);*/

/*const person = [12, "Chris", "Owen"];

[age, firstName, lastName] = person

console.log(`Personne : - Age: ${age}, Nom: ${firstName} ${lastName}`);*/

/*const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
];

// Votre code ici : 
[student1,[student2, student3],[student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);*/

/*function combineAllArrays(...arrays) {
    return arrays.flat();  // Utilise flat() pour aplatir les tableaux imbriqués
  }

  function combineAllArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }
*/  

