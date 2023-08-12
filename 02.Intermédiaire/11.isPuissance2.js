//Exercice 11 : Vérifier si un nombre est une puissance de 2

/**
 * Écrivez une fonction en JavaScript appelée estPuissanceDeDeux qui prend en entrée un nombre entier positif et renvoie true si le nombre est une puissance de 2, sinon renvoie false.

Un nombre est une puissance de 2 si et seulement si son écriture binaire ne contient qu'un seul chiffre 1 suivi de zéros. Par exemple, 1, 2, 4, 8, 16 sont des puissances de 2.
 * 
 * Assurez-vous de gérer le cas où le nombre est inférieur ou égal à 0.
 * 
 */

const estPuissanceDeDeux = (n) => {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0; // Vérifie si le nombre est une puissance de 2
}

console.log(estPuissanceDeDeux(8)); // Devrait afficher true
console.log(estPuissanceDeDeux(12)); // Devrait afficher false
