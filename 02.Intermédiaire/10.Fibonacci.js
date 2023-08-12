//Exercice 10 : Générer une suite de Fibonacci

/*
Écrivez une fonction en JavaScript appelée suiteFibonacci qui prend en entrée un nombre n et renvoie un tableau contenant les n premiers nombres de la suite de Fibonacci.

La suite de Fibonacci est une séquence dans laquelle chaque nombre est la somme des deux nombres précédents, commençant généralement par 0 et 1.

!Assurez-vous de gérer le cas où n est inférieur ou égal à 0.

*/

const n = 8;

const suiteFibonacci = (n) => {

    if(n <= 0) {
        return false;
    }else if(n >= 0) {
        let fibonacci = [0,1] // On initialise le tableau avec les deux premiers nombres de la suite
        for(let i = 2; i < n; i++) { // On parcourt le tableau
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; // On ajoute à la suite le nombre qui est la somme des deux précédents
        }
        return fibonacci;
    }
}

const fibonacci = suiteFibonacci(n);
console.log(fibonacci); // Devrait afficher [0, 1, 1, 2, 3, 5, 8, 13]
