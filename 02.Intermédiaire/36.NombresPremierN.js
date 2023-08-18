//Exercice 35 : Nombres premiers jusqu'à n

/**
Écrivez une fonction en JavaScript appelée nombresPremiers qui prend en entrée un nombre entier positif n et renvoie un tableau contenant tous les nombres premiers compris entre 2 et n.

Un nombre premier est un nombre qui n'est divisible que par 1 et lui-même (par exemple, 2, 3, 5, 7, etc.).

Assurez-vous de gérer les cas où n est inférieur à 2.

*/


const nombresPremiers = (n) => {

    if (n < 2) { // si n est inférieur à 2

        return "Le nombre doit être supérieur ou égal à 2"; // affiche un message d'erreur


    } else {


        let array = []; // initialise un tableau vide

        for (let i = 2; i <= n; i++) { // boucle sur les nombres de 2 à n

            let isPremier = true; // initialise la variable isPremier à true

            for (let j = 2; j < i; j++) { // boucle sur les nombres de 2 à i

                if (i % j == 0) { // si i est divisible par j

                    isPremier = false; // isPremier passe à false

                    break; // on sort de la boucle

                } else {

                    isPremier = true; // isPremier reste à true
                }



            }

            if (isPremier) { // si isPremier est true

                array.push(i); // on ajoute i au tableau

            }

        }

        return array;

    }
}

console.log(nombresPremiers(10)); // devrait afficher [2, 3, 5, 7].
console.log(nombresPremiers(20)); // devrait afficher [2, 3, 5, 7, 11, 13, 17, 19].
console.log(nombresPremiers(1)); // devrait afficher [].