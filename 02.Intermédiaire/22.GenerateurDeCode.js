//Exercice 22 : Générateur de code aléatoire

/**
 * 
 * Écrivez une fonction en JavaScript appelée genererCodeAleatoire qui prend en entrée un nombre longueur et renvoie une chaîne de caractères aléatoire de longueur longueur.

La chaîne de caractères générée doit être composée de caractères alphanumériques (lettres majuscules et minuscules, chiffres) et ne doit contenir aucun caractère spécial.
 * 

!Assurez-vous de gérer les cas où longueur est inférieur ou égal à 0.
 */

const genererCodeAleatoire = (longueur) => { 

    if(longueur <= 0) {
        return "Impossible de générer une chaîne de caractères de longueur nulle ou négative";
    }else{

        let str = ""; // On initialise une variable qui contiendra la chaîne de caractères aléatoires

        for(let i = 0; i < longueur; i++){ // On parcourt la chaîne de caractères
            let random = Math.floor(Math.random() * 62); // On génère un nombre aléatoire entre 0 et 61

            if(random < 10){ // Si le nombre est inférieur à 10
                str += String.fromCharCode(random + 48); // On ajoute un chiffre à la chaîne de caractères
            }else if(random < 36){ // Si le nombre est inférieur à 36
                str += String.fromCharCode(random + 55); // On ajoute une lettre majuscule à la chaîne de caractères
            }else{ // Si le nombre est supérieur ou égal à 36
                str += String.fromCharCode(random + 61); // On ajoute une lettre minuscule à la chaîne de caractères
            }
        }

        return str; // On retourne la chaîne de caractères

    }

}


console.log(genererCodeAleatoire(8)); // Devrait afficher une chaîne de 8 caractères aléatoires
console.log(genererCodeAleatoire(12)); // Devrait afficher une chaîne de 12 caractères aléatoires
