// Exercice 6 : Implémenter un tri à bulles

/*
Écrivez une fonction en JavaScript appelée triABulles qui prend en entrée un tableau de nombres et renvoie le tableau trié en utilisant l'algorithme de tri à bulles.

L'algorithme de tri à bulles fonctionne en comparant les éléments adjacents et en les échangeant s'ils ne sont pas dans l'ordre. Ce processus se répète jusqu'à ce que le tableau soit complètement trié.

Assurez-vous de mettre en œuvre l'algorithme de tri à bulles et de manipuler le tableau directement (pas de création de tableau supplémentaire).
*/

const tableau = [5, 2, 8, 1, 3];

const triABulles = (tableau) => {
    const tabLength = tableau.length;

    // Utilisation d'une variable temporaire pour échanger les éléments
    let temp = 0;

    // Parcours du tableau avec deux boucles imbriquées
    for (let i = 0; i < tabLength; i++) {
        for (let j = 0; j < tabLength - 1; j++) {
            // Comparaison des éléments adjacents
            if (tableau[j] > tableau[j + 1]) {
                // Échange des éléments si nécessaire
                temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }

    return tableau;
}

// Appel de la fonction de tri et affichage du tableau trié
const tableauTrie = triABulles(tableau);
console.log(tableauTrie); // Devrait afficher [1, 2, 3, 5, 8]
