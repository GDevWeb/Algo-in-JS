// Exercice 7 : Trouver les éléments communs entre deux tableaux

/**
 * Écrivez une fonction en JavaScript appelée elementsCommuns qui prend en entrée deux tableaux de nombres et renvoie un nouveau tableau contenant les éléments qui sont présents dans les deux tableaux.
 * 
 * 
 * Assurez-vous de gérer les cas où les tableaux sont vides ou n'ont pas d'éléments en commun.
 */

const tableau1 = [1, 2, 3, 4, 5];
const tableau2 = [3, 4, 5, 6, 7];

const elementsCommuns = (tableau1, tableau2) => {
    let tableauCommun = [];

    for (let i = 0; i < tableau1.length; i++) {
        for (let j = 0; j < tableau2.length; j++) {
            if (tableau1[i] === tableau2[j]) {
                tableauCommun.push(tableau1[i]);
                break; // On sort de la boucle interne
            }
        }
    }

    return tableauCommun;
}

const communs = elementsCommuns(tableau1, tableau2);
console.log(communs); // Devrait afficher [3, 4, 5]
