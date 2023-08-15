//Exercice 30 : Recherche de la plus longue sous-chaîne sans répétition

/**
 * 
 * Écrivez une fonction en JavaScript appelée plusLongueSousChaine qui prend en entrée une chaîne de caractères et renvoie la longueur de la plus longue sous-chaîne continue qui ne contient pas de caractères répétés. En d'autres termes, il s'agit de trouver la longueur maximale d'une sous-chaîne dans laquelle chaque caractère n'apparaît qu'une seule fois.
 * 
 * !Gérer les chaines vides
 */

const plusLongueSousChaine = (chaine) => { 
    if (chaine.length === 0) {
        return "Impossible de tester une chaîne vide";
    } else {
        let splitChaine = chaine.split(""); // on sépare la chaine en tableau de caractères
        let sousChaine = []; // on crée un tableau vide qui va contenir les sous-chaines
        let maxLen = 0; // on initialise la longueur maximale à 0

        for (let i = 0; i < splitChaine.length; i++) {  // on parcourt le tableau de caractères
            if (sousChaine.indexOf(splitChaine[i]) === -1) { // si le caractère n'est pas dans le tableau
                sousChaine.push(splitChaine[i]); // on l'ajoute
                maxLen = Math.max(maxLen, sousChaine.length); // on compare la longueur maximale avec la longueur du tableau
            } else {
                sousChaine.shift(); // si le caractère est déjà dans le tableau, on supprime le premier élément
                i--; // on décrémente i pour ne pas sauter de caractère
            }
        }

        return maxLen; // on retourne la longueur maximale
    }
};

console.log(plusLongueSousChaine("abcabcbb")); // devrait renvoyer 3 ("abc" est la plus longue sous-chaîne sans répétition).
console.log(plusLongueSousChaine("bbbbb"));    // devrait renvoyer 1 ("b" est la plus longue sous-chaîne sans répétition).
console.log(plusLongueSousChaine("pwwkew"));   // devrait renvoyer 3 ("wke" est la plus longue sous-chaîne sans répétition).
console.log(plusLongueSousChaine("pwwkew")) //devrait renvoyer 3 ("wke" est la plus longue sous-chaîne sans répétition).

