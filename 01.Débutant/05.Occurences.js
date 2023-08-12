//Exercice 5 : Compter les occurrences des caractères dans une chaîne

/*
Écrivez une fonction en JavaScript appelée compterOccurrences qui prend en entrée une chaîne de caractères et renvoie un objet contenant le compte des occurrences de chaque caractère dans la chaîne.
*/

const chaine = "abracadabra";

const compterOccurrences = (chaine) => {

    let compteur = {};
    for (let i = 0; i < chaine.length; i++) {
        let lettre = chaine[i];
        if (compteur[lettre] === undefined) {
            compteur[lettre] = 1;
        } else {
            compteur[lettre]++;
        }
    }
    return compteur;
}

const occurrences = compterOccurrences(chaine);
console.log(occurrences); // Devrait afficher { a: 4, b: 2, r: 2, c: 1, d: 1 }
