//Écrivez une fonction en JavaScript appelée trouverPlusGrand qui prend en entrée un tableau de nombres entiers et renvoie le plus grand élément du tableau.

/**
 * Écrivez une fonction en JavaScript appelée trouverPlusGrand qui prend en entrée un tableau de nombres entiers et renvoie le plus grand élément du tableau.
 * 
 * !Assurez-vous de gérer le cas où le tableau est vide et de renvoyer un message approprié dans ce cas.
 */

const trouverPlusGrand = (tableau) => {
    if (tableau.length === 0){
        return "Tableau vide";
    }else{
        let plusGrand = tableau.reduce((a, b) => Math.max(a, b));
        return plusGrand;
    }
}

console.log(trouverPlusGrand([5, 2, 8, 16, 3])); // Devrait afficher 16
console.log(trouverPlusGrand([-10, -7, -2, -15])); // Devrait afficher -2
console.log(trouverPlusGrand([])); // Devrait afficher "Tableau vide"