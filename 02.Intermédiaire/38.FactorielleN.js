//Exercice 38 : Factorielle d'un nombre

/**
 * Écrivez une fonction en JavaScript appelée factorielle qui prend en entrée un nombre entier positif n et renvoie sa factorielle, c'est-à-dire le produit de tous les nombres entiers positifs de 1 à n.

Par exemple, si n est 5, la factorielle de 5 est 5 x 4 x 3 x 2 x 1 = 120.

Assurez-vous de gérer le cas où n est nul.

*/

const factorielle = (n) => {

    if(n == 0){
            
            return 1;

    }else {


        let total = 1; // ou let total = n;

        for(let i = 1; i <= n; i++){
                
                total *= i; // ou total *= i;
    
            }
        
            return total;



    }

}



console.log(factorielle(5)); // devrait afficher 120.
console.log(factorielle(3)); // devrait afficher 6.
console.log(factorielle(1)); // devrait afficher 1.
console.log(factorielle(0)); // devrait afficher 1.