//Exercice 17 : Vérification de caractères uniques

/**Écrivez une fonction en JavaScript appelée caracteresUniques qui prend en entrée une chaîne de caractères et renvoie true si tous les caractères dans la chaîne sont uniques, c'est-à-dire qu'aucun caractère ne se répète. Sinon, la fonction devrait renvoyer false. 
 * 
 * !Assurez-vous de gérer les cas où la chaîne est vide ou nulle.
*/

const caracteresUniques = (chaine) => {

    if (chaine === "") { //cas si chaine vide 
        return false;
    } else {
        let chaineSplit = chaine.split(""); //split la chaine en tableau
        let tableauUnique = [...new Set(chaineSplit)]; //créer un tableau avec les valeurs uniques du tableau chaineSplit
        if (chaineSplit.length === tableauUnique.length) { //si la longueur du tableau chaineSplit est égale à la longueur du tableau tableauUnique, alors tous les caractères sont uniques
            return true;
        } else {
            return false;
        }
    }
}


console.log(caracteresUniques("abcd")); // Devrait afficher true (tous les caractères sont uniques)
console.log(caracteresUniques("hello")); // Devrait afficher false (le caractère 'l' se répète)


// solution 2 : 

// const caracteresUniques = (chaine) => {
//     if (chaine === null || chaine === "") {
//         return false;
//     }

//     const caractereVus = {};

//     for (let caractere of chaine) {
//         if (caractereVus[caractere]) {
//             return false; // Le caractère a déjà été vu, donc ce n'est pas unique
//         }
//         caractereVus[caractere] = true; // Marquer le caractère comme vu
//     }

//     return true; // Tous les caractères sont uniques
// }

// console.log(caracteresUniques("abcd"));  // Devrait afficher true
// console.log(caracteresUniques("hello")); // Devrait afficher false

