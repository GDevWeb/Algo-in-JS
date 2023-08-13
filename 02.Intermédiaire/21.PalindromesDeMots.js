//Exercice 19 : Palindromes de mots

/*
Écrivez une fonction en JavaScript appelée palindromesMots qui prend en entrée une chaîne de mots séparés par des espaces et renvoie un tableau contenant les mots qui sont des palindromes.

Un palindrome est un mot, une phrase, un nombre ou une séquence de caractères qui se lit de la même manière de gauche à droite et de droite à gauche, en ignorant la casse et les espaces.

!Assurez-vous de gérer les cas où la chaîne est vide.

*/

const palindromesMots = (str) => {


    if(str === "") {
        return "Impossible de traiter une chaîne vide";
    }else{
        let strSplit = str.split(" "); // On sépare la chaîne de caractères en mots
        let strReverse = ""; // On initialise une variable qui contiendra le mot inversé
        let tabPalindromes = []; // On initialise un tableau qui contiendra les palindromes

        for(let i = 0; i < strSplit.length; i++){ // On parcourt le tableau de mots
            strReverse = strSplit[i].split("").reverse().join(""); // On inverse le mot

            if(strSplit[i] === strReverse){ // Si le mot est égal à son inverse
                tabPalindromes.push(strSplit[i]); // On l'ajoute au tableau de palindromes
            }
        }

        return tabPalindromes; // On retourne le tableau de palindromes
    }
}

console.log(palindromesMots("radar hello world racecar")); // Devrait afficher ["radar", "racecar"]
console.log(palindromesMots("")); // Devrait afficher []


