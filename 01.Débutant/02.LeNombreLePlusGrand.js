// Exercice 2 : Trouver le nombre le plus grand

// Écrivez une fonction en JavaScript appelée nombreLePlusGrand qui prend en entrée un tableau de nombres et renvoie le nombre le plus grand présent dans ce tableau.

const tableau = [12, 45, 6, 23, 87, 3];


const nombreLePlusGrand = (tableau) => {
    // TODO
    return Math.max(...tableau)
}

const plusGrand = nombreLePlusGrand(tableau);

console.log(plusGrand); // Devrait afficher le nombre le plus grand dans le tableau
