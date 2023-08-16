//Exercice 33 : Générateur de séquences croissantes

/**
Écrivez une fonction en JavaScript appelée genererSequenceCroissante qui prend en entrée un nombre entier n et renvoie un tableau contenant une séquence croissante de nombres commençant à 1 jusqu'à n.

Par exemple, si n est 5, la fonction devrait renvoyer [1, 2, 3, 4, 5].

Assurez-vous de gérer le cas où n est inférieur ou égal à 0.

*/

const genererSequenceCroissante = (n) => {

    if(n <= 0) {

        return "Le nombre doit être supérieur à 0";


    }else{

        let array = [];

        for(let i = 1; i <= n; i++){

            array.push(i);

        }

        return array;
    }


}

console.log(genererSequenceCroissante(5)); // devrait afficher [1, 2, 3, 4, 5].
console.log(genererSequenceCroissante(3)); // devrait afficher [1, 2, 3].
console.log(genererSequenceCroissante(0)); // devrait afficher [].