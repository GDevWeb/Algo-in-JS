//Exercice 33 : Générateur de séquences croissantes

/**
Écrivez une fonction en JavaScript appelée genererSequenceCroissante qui prend en entrée un nombre entier n et renvoie un tableau contenant une séquence croissante de nombres commençant à 1 jusqu'à n.

Par exemple, si n est 5, la fonction devrait renvoyer [1, 2, 3, 4, 5].

Assurez-vous de gérer le cas où n est inférieur ou égal à 0.

*/

const genererSequenceCroissante = (n) => {

    if(n <= 0) { // si n est inférieur ou égal à 0

        return "Le nombre doit être supérieur à 0"; // affiche un message d'erreur


    }else{ // sinon

        let array = []; // initialise un tableau vide

        for(let i = 1; i <= n; i++){ // boucle sur les nombres de 1 à n

            array.push(i); // on ajoute i au tableau

        }

        return array;
    }


}

console.log(genererSequenceCroissante(5)); // devrait afficher [1, 2, 3, 4, 5].
console.log(genererSequenceCroissante(3)); // devrait afficher [1, 2, 3].
console.log(genererSequenceCroissante(0)); // devrait afficher [].