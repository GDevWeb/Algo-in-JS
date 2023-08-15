//Exercice 28 : Inversion des mots

/**
 * 
 * Écrivez une fonction en JavaScript appelée inverserMots qui prend en entrée une chaîne de mots séparés par des espaces et renvoie une nouvelle chaîne où l'ordre des mots a été inversé.
 * 
 * !Assurez-vous de gérer le cas où la chaîne est vide.
 */

const inverserMots = (str) => {
    if (str.length === 0) {
        return "Erreur, impossible de tester une chaîne vide !";
    } else {
        // 1. Split la chaîne en mots :
        let mots = str.split(" ");
        
        // 2. Reverse l'ordre des mots :
        let motsInverse = mots.reverse();
        
        // 3. Join les mots pour former une chaîne :
        let nouvelleChaine = motsInverse.join(" ");
        
        return nouvelleChaine;
    }
}

console.log(inverserMots("Bonjour tout le monde")); // Devrait afficher "monde le tout Bonjour"
console.log(inverserMots("JavaScript est génial")); // Devrait afficher "génial est JavaScript"
console.log(inverserMots("")); // Devrait afficher ""
