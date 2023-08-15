//Exercice 31 : Rotation d'une chaîne

/**
 * 
 * 
 * Écrivez une fonction en JavaScript appelée estRotation qui prend en entrée deux chaînes de caractères chaine1 et chaine2 et renvoie true si chaine2 est une rotation de chaine1, sinon renvoie false. Une rotation de chaine1 est obtenue en déplaçant les caractères de chaine1 vers la droite ou la gauche et en les plaçant à la fin de la chaîne.
 * 
 * !Assurez-vous de gérer les cas où les chaînes sont vides.
 * 
 */

const estRotation = (chaine1, chaine2) => {

    // si les chaînes sont vides
    if (chaine1.length === 0 || chaine2.length === 0) {

        // on renvoie un message d'erreur
        return "impossible de tester les chaînes vides";

        // sinon
    } else {
        // si les chaînes n'ont pas la même longueur
        if (chaine1.length !== chaine2.length) {
            // on renvoie false
            return false;
        }
        // on concatène la première chaîne avec elle-même
        const chaineConcat = chaine1 + chaine1;

       // on renvoie true si la chaîne concaténée contient la deuxième chaîne 
        return chaineConcat.includes(chaine2);
    }
};

console.log(estRotation("abcd", "dabc"));   // devrait renvoyer true
console.log(estRotation("hello", "ohell")); // devrait renvoyer false
console.log(estRotation("hello", "lohel")); // devrait renvoyer false
