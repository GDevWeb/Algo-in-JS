//Exercice 32 : Conversion de nombres romains en nombres décimaux
/**
Écrivez une fonction en JavaScript appelée `convertirNombreRomain` qui prend en entrée une chaîne de caractères représentant un nombre romain et renvoie la valeur équivalente en nombre décimal. Les chiffres romains sont représentés par les caractères suivants : 

- I : 1
- V : 5
- X : 10
- L : 50
- C : 100
- D : 500
- M : 1000

La valeur d'un nombre romain est la somme des valeurs de ses chiffres. Cependant, si un chiffre est placé avant un chiffre de valeur supérieure, il doit être soustrait de la valeur totale. Par exemple, "IV" représente 4 (5 - 1).

Assurez-vous de gérer les cas où la chaîne est vide et de valider que la chaîne contient bien des caractères romains valides.

*/


const convertirNombreRomain = (chiffreRomain) => {  

    let tableCorrespondance = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };  // initialise un objet contenant les correspondances entre les chiffres romains et les chiffres décimaux
    
    let total = 0;  // initialise la variable total à 0
    
    let longueur = chiffreRomain.length; // initialise la variable longueur à la longueur de la chaîne de caractères

    for (let i = 0; i < longueur; i++) { // boucle sur la chaîne de caractères

        let valeur = tableCorrespondance[chiffreRomain[i]]; // initialise la variable valeur à la valeur correspondant au chiffre romain
        let valeurSuivante = tableCorrespondance[chiffreRomain[i + 1]]; // initialise la variable valeurSuivante à la valeur correspondant au chiffre romain suivant

        if (valeurSuivante) { // si valeurSuivante existe
            if (valeur >= valeurSuivante) { // si valeur est supérieure ou égale à valeurSuivante
                total += valeur; // on ajoute valeur à total
            } else { // sinon
                total += valeurSuivante - valeur; // on ajoute valeurSuivante - valeur à total
                i++; // on incrémente i
            }
        } else { // sinon
            total += valeur; // on ajoute valeur à total
        }


    }
    
    return total;
    
    
}


console.log(convertirNombreRomain("III")); // devrait afficher 3.
console.log(convertirNombreRomain("IX"));  // devrait afficher 9.
console.log(convertirNombreRomain("LVIII")); // devrait afficher 58.
