// Exercice 4 : Inverser une chaîne de caractères

/* Écrivez une fonction en JavaScript appelée inverserChaine qui prend en entrée une chaîne de caractères et renvoie une nouvelle chaîne avec les caractères inversés. */

const chaine = "Bonjour";
const inverserChaine = (chaine) => {
    return chaine.split("").reverse().join("");
}

const chaineInverse = inverserChaine(chaine);
console.log(chaineInverse); // Devrait afficher "ruojnoB"
