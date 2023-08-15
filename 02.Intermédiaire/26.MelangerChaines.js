//Exercice 24 : Mélange aléatoire d'une chaîne

/**
 * 
 * Écrivez une fonction en JavaScript appelée melangerChaine qui prend en entrée une chaîne de caractères et renvoie une nouvelle chaîne où les caractères sont mélangés de manière aléatoire.
 * 
 * !Assurez-vous de gérer le cas où la chaîne est vide.
 * 
 */


const melangerChaine = (chaine) => {

    if (chaine.length === 0) {
        return "Erreur chaîne vide";
    }else {

        //1. On transforme la chaîne en tableau
        let tab = chaine.split("");
        //2. On mélange le tableau
        tab.sort(() => Math.random((a,b) => a - b));
        //3. On retransforme le tableau en chaîne
        let chaineMelangee = tab.join("");
        //4. On retourne la chaîne mélangée
        return chaineMelangee;

    }


}


console.log(melangerChaine("algorithmes")); // Devrait afficher une chaîne mélangée aléatoirement
console.log(melangerChaine("hello")); // Devrait afficher une chaîne mélangée aléatoirement
console.log(melangerChaine("")); // Devrait afficher une chaîne vide
