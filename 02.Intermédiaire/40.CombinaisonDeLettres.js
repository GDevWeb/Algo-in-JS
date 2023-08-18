//Exercice 40 : Combinaisons de lettres**

/**

Écrivez une fonction en JavaScript appelée `combinaisonsLettres` qui prend en entrée une chaîne de caractères et renvoie toutes les combinaisons possibles de lettres présentes dans la chaîne. Les combinaisons doivent être renvoyées sous forme d'un tableau de chaînes de caractères.

*Niveau : Intermédiaire*

*/

const combinaisonsLettres = (chaine) => {

if(chaine.length == 0){

    return "La chaîne ne doit pas être vide";

}else{

    let combinaisons = [];

    for(let i = 0; i < chaine.length; i++){

        for(let j = i + 1; j <= chaine.length; j++){

            combinaisons.push(chaine.slice(i, j));
        }
    }

    return combinaisons;

}


}

console.log(combinaisonsLettres("abc")); // devrait afficher ["a", "ab", "abc", "ac", "b", "bc", "c"]
console.log(combinaisonsLettres("xyz")); // devrait afficher ["x", "xy", "xyz", "xz", "y", "yz", "z"]
console.log(combinaisonsLettres(""));    // devrait afficher "La chaîne ne doit pas être vide"

