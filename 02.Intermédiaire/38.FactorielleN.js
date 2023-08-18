//Exercice 38 : Factorielle d'un nombre

/**
 * Écrivez une fonction en JavaScript appelée factorielle qui prend en entrée un nombre entier positif n et renvoie sa factorielle, c'est-à-dire le produit de tous les nombres entiers positifs de 1 à n.

Par exemple, si n est 5, la factorielle de 5 est 5 x 4 x 3 x 2 x 1 = 120.

Assurez-vous de gérer le cas où n est nul.

*/

const factorielle = (n) => {

    if(n == 0){ // si n est égal à 0
            
            return 1; // retourne 1

    }else {


        let total = 1;  // initialise la variable total à 1

        for(let i = 1; i <= n; i++){ // boucle sur les nombres de 1 à n
                
                total *= i; // multiplie total par i
    
            }
        
            return total;



    }

}



console.log(factorielle(5)); // devrait afficher 120.
console.log(factorielle(3)); // devrait afficher 6.
console.log(factorielle(1)); // devrait afficher 1.
console.log(factorielle(0)); // devrait afficher 1.