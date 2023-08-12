// Exercice 8 : Recherche binaire dans un tableau trié

/*
Écrivez une fonction en JavaScript appelée rechercheBinaire qui prend en entrée un tableau trié de nombres et un nombre cible, et renvoie l'index de la position du nombre cible dans le tableau. Si le nombre cible n'est pas présent dans le tableau, la fonction doit renvoyer -1.

L'algorithme de recherche binaire consiste à diviser récursivement le tableau en deux moitiés et à comparer le nombre cible avec l'élément au milieu. Si le nombre cible est inférieur, on continue la recherche dans la première moitié, sinon dans la seconde moitié.

**Assurez-vous de gérer les cas où le nombre cible n'est pas présent dans le tableau.
*/

const tableauTrie = [2, 4, 6, 8, 10, 12, 14, 16];
const cible = 10;

const rechercheBinaire = (tableau, cible, debut = 0, fin = tableau.length - 1) => {

    while (debut <= fin) {
        let milieu = Math.floor((debut + fin) / 2);

        if (tableau[milieu] === cible) {
            return milieu; // Renvoie l'index de la cible si elle est trouvée
        } else if (tableau[milieu] < cible) {
            debut = milieu + 1;
        } else {
            fin = milieu - 1;
        }
    }

    return -1; // Renvoie -1 si la cible n'est pas trouvée
}

const index = rechercheBinaire(tableauTrie, cible);
console.log(index); // Devrait afficher 4 (index de 10 dans le tableau)
