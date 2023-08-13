//Exercice 13 : Compter les nombres premiers

/**
 * Écrivez une fonction en JavaScript appelée compterNombresPremiers qui prend en entrée un nombre entier positif n et renvoie le nombre de nombres premiers inférieurs à n.

Un nombre premier est un nombre entier supérieur à 1 qui n'a aucun diviseur autre que 1 et lui-même.
 * 
 * ! Assurez-vous de gérer le cas où n est inférieur ou égal à 1.
 * 
 * */

const estPremier = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const compterNombresPremiers = (n) => {
    if (n <= 1) {
        return 0; // Retourner 0 si n est inférieur ou égal à 1
    } else {
        let compteur = 0;
        for (let i = 2; i < n; i++) {
            if (estPremier(i)) {
                compteur++;
            }
        }
        return compteur;
    }
};

console.log(compterNombresPremiers(10)); // Devrait afficher 4 (2, 3, 5 et 7 sont premiers)
console.log(compterNombresPremiers(20)); // Devrait afficher 8 (2, 3, 5, 7, 11, 13, 17 et 19 sont premiers)
