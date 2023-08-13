//Exercice 20 : Implémenter un algorithme de tri rapide (QuickSort)


/** L'objectif de cet exercice est d'implémenter l'algorithme de tri rapide (QuickSort) en JavaScript. Le tri rapide est un algorithme de tri efficace qui divise récursivement un tableau en sous-tableaux et les trie en utilisant une approche de « diviser pour régner ».

 Énoncé détaillé :

Écrivez une fonction appelée triRapide qui prend en entrée un tableau d'entiers et trie le tableau en utilisant l'algorithme de tri rapide. Voici comment fonctionne l'algorithme :

Choisissez un élément de pivot dans le tableau. Cela pourrait être le premier, le dernier ou un élément choisi au hasard.
Divisez le tableau en deux sous-tableaux : les éléments plus petits que le pivot et les éléments plus grands que le pivot.
Triez récursivement les sous-tableaux en appliquant le tri rapide.
Concaténez les sous-tableaux triés avec le pivot au milieu pour obtenir le tableau trié final.

!Assurez-vous de gérer le cas où le tableau est vide ou ne contient qu'un seul élément.

*/

const triRapide = (array) => {
    if (array.length <= 1) {
        return "impossible de trier un tableau ne contenant qu'un seul élément ou vide !"; // Retourne le tableau tel quel
    } else {
        const pivot = array[0]; // Sélectionnez le premier élément comme pivot
        const left = [];
        const right = [];
        
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else if (array[i] > pivot) {
                right.push(array[i]);
            }
        }

        // Utilisez la récursion pour trier les sous-tableaux et concaténez-les
        return [...triRapide(left), pivot, ...triRapide(right)];
    }
}

console.log(triRapide([5, 2, 8, 16, 3])); // Devrait afficher [2, 3, 5, 8, 16]
console.log(triRapide([10, -7, 2, -15])); // Devrait afficher [-15, -7, 2, 10]
console.log(triRapide([])); // Devrait afficher []