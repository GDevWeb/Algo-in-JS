//Exercice 37 : Inversion d'un nombre

/**
Écrivez une fonction en JavaScript appelée inverserNombre qui prend en entrée un nombre entier et renvoie le nombre obtenu en inversant l'ordre de ses chiffres.

Par exemple, si le nombre est 12345, la fonction devrait renvoyer 54321.

Assurez-vous de gérer les cas où le nombre est négatif.

*/

const inverserNombre = (n) => {

    if(n < 0) { // si n est négatif

        let array = n.toString().split(""); // convertit le nombre en chaîne de caractères puis en tableau de caractères
        let arrayReverse = array.reverse(); // inverse le tableau
        let number = parseInt(arrayReverse.join("")); // convertit le tableau en chaîne de caractères puis en nombre entier
        return number * -1;  // retourne le nombre multiplié par -1

    }else {
            
            let array = n.toString().split(""); // ou let array = n.toString().split("").reverse();
            let arrayReverse = array.reverse(); // ou array.reverse().join("");
            let number = parseInt(arrayReverse.join("")); // ou Number(arrayReverse.join(""));
            return number;
    }


}



console.log(inverserNombre(12345)); // devrait afficher 54321.
console.log(inverserNombre(10000)); // devrait afficher 1.
console.log(inverserNombre(54321)); // devrait afficher 12345.
console.log(inverserNombre(-12345)); // devrait afficher -54321.