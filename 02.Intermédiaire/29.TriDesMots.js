//Exercice 27 : Tri de mots

/**
 * 
 * Écrivez une fonction en JavaScript appelée triMots qui prend en entrée une chaîne de mots séparés par des espaces et renvoie une nouvelle chaîne où les mots sont triés par ordre alphabétique.
 * 
 * !Assurez-vous de gérer le cas où la chaîne est vide.
 */

const triMots = (str) => {
    if (str.length === 0) {
        return ""; // Retourner une chaîne vide si l'entrée est vide
    } else {
        // 1. Split la chaîne en tableau en utilisant l'espace comme séparateur
        let splitStr = str.split(" ");

        // 2. Trier le tableau de mots par ordre alphabétique
        let sortedWords = splitStr.sort();

        // 3. Joindre les mots triés en une seule chaîne avec des espaces
        let result = sortedWords.join(" ");

        return result;
    }
}

console.log(triMots("banane orange pomme kiwi")); // Devrait afficher "banane kiwi orange pomme"
console.log(triMots("chat chien cheval")); // Devrait afficher "cheval chat chien"
console.log(triMots("")); // Devrait afficher ""
