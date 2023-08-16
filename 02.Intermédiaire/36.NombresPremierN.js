//Exercice 35 : Nombres premiers jusqu'à n

/**
Écrivez une fonction en JavaScript appelée nombresPremiers qui prend en entrée un nombre entier positif n et renvoie un tableau contenant tous les nombres premiers compris entre 2 et n.

Un nombre premier est un nombre qui n'est divisible que par 1 et lui-même (par exemple, 2, 3, 5, 7, etc.).

Assurez-vous de gérer les cas où n est inférieur à 2.

*/


const nombresPremiers = (n) => {

    if (n < 2) {

        return "Le nombre doit être supérieur ou égal à 2";


    } else {


        let array = [];

        for (let i = 2; i <= n; i++) {

            let isPremier = true;

            for (let j = 2; j < i; j++) {

                if (i % j == 0) {

                    isPremier = false;

                    break;

                } else {

                    isPremier = true;
                }



            }

            if (isPremier) {

                array.push(i);

            }

        }

        return array;

    }
}

console.log(nombresPremiers(10)); // devrait afficher [2, 3, 5, 7].
console.log(nombresPremiers(20)); // devrait afficher [2, 3, 5, 7, 11, 13, 17, 19].
console.log(nombresPremiers(1)); // devrait afficher [].