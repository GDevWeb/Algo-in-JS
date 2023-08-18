//Exercice 39 : Calcul du nombre de diviseurs**

/*
Écrivez une fonction en JavaScript appelée `nombreDiviseurs` qui prend en entrée un nombre entier positif `n` et renvoie le nombre de diviseurs de `n`.

Un diviseur est un nombre entier qui divise un autre nombre sans laisser de reste. Par exemple, les diviseurs de 12 sont 1, 2, 3, 4, 6 et 12.

Assurez-vous de gérer le cas où `n` est nul.

*Niveau : Intermédiaire*
**/


const nombreDiviseurs = (n) => {

    if (n <= 0) {

        return "Le nombre doit être supérieur ou égal à 1";

    } else {


        let diviseurs = 0; // initialise la variable diviseurs à 0

        for (let i = 1; i <= n; i++) { // boucle sur les nombres de 1 à n

            if (n % i == 0) { // si n modulo i est égal à 0

                diviseurs++; // on incrémente diviseurs
                console.log(i);

            } 

        }

        return diviseurs;
    }


}


console.log(nombreDiviseurs(12)); // devrait afficher 6 (1, 2, 3, 4, 6, 12)
console.log(nombreDiviseurs(7));  // devrait afficher 2 (1, 7)
console.log(nombreDiviseurs(1));  // devrait afficher 1 (1)
console.log(nombreDiviseurs(0));  // devrait afficher "Le nombre doit être supérieur à 0"


