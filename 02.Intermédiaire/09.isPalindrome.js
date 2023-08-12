//Exercice 9 : Vérifier si une chaîne est un palindrome

/**
 * Écrivez une fonction en JavaScript appelée estPalindrome qui prend en entrée une chaîne de caractères et renvoie true si la chaîne est un palindrome, c'est-à-dire qu'elle reste la même si on la lit de gauche à droite et de droite à gauche. Sinon, la fonction doit renvoyer false.
 * 
 * !Assurez-vous de prendre en compte la casse et de gérer les espaces éventuels dans la chaîne.
 */

const chaine1 = "radar";
const chaine2 = "bonjour";
const estPalindrome = (chaine) => {

    let reverseChaine = chaine.split("").reverse("").join("");

    if (chaine === reverseChaine) {
        return true;
    } else {
        return false;
    }
}
console.log(estPalindrome(chaine1)); // Devrait afficher true
console.log(estPalindrome(chaine2)); // Devrait afficher false
