//Exercice 34 : Somme des chiffres d'un nombre

/**
Écrivez une fonction en JavaScript appelée sommeChiffres qui prend en entrée un nombre entier positif et renvoie la somme de ses chiffres.

Par exemple, si le nombre est 123, la fonction devrait renvoyer 6 (1 + 2 + 3).

Assurez-vous de gérer les cas où le nombre est négatif ou nul.

*/

const sommeChiffres = (n) => {

    if(n <= 0 || isNaN(n)) {

        return "Le nombre doit être supérieur à 0";

}else {
    
        let array = n.toString().split("");
        let total = 0;
    
        for(let i = 0; i < array.length; i++){
    
            total += parseInt(array[i]);
    
        }
    
        return total;
    
}

}

console.log(sommeChiffres(123)); // devrait afficher 6.
console.log(sommeChiffres(102)); // devrait afficher 3.
console.log(sommeChiffres(8)); // devrait afficher 8.
console.log(sommeChiffres(0)); // devrait afficher "Le nombre doit être supérieur à 0".