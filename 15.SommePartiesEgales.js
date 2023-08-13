//Exercice 15 : Vérification de la somme des parties égales

/**
 * Écrivez une fonction en JavaScript appelée verifierSommePartiesEgales qui prend en entrée un tableau de nombres entiers et renvoie true si le tableau peut être divisé en deux parties égales (en termes de somme), sinon renvoie false.
Par exemple, dans le tableau [1, 2, 3, 4], il est possible de diviser le tableau en deux parties égales [1, 2] et [3, 4], chacune ayant une somme de 3. Dans le tableau [1, 5, 11, 5], il n'est pas possible de diviser le tableau en deux parties égales ayant la même somme.
 * 
 * !Assurez-vous de gérer les cas où le tableau est vide.
 * */

const verifierSommePartiesEgales = (tableau) => {
    if (tableau.length === 0){
        return false;
    } else {
        const somme = tableau.reduce((a, b) => a + b, 0);
        if (somme % 2 !== 0) {
            return false; // La somme totale doit être divisible par 2 pour avoir des parties égales
        }
        
        const moitieSomme = somme / 2;
        let partieActuelle = 0;
        
        for (let i = 0; i < tableau.length; i++) {
            partieActuelle += tableau[i];
            if (partieActuelle === moitieSomme) {
                return true; // Une partie ayant la moitié de la somme totale a été trouvée
            }
        }
        
        return false; // Aucune division égale n'a été trouvée
    }
}

console.log(verifierSommePartiesEgales([1, 2, 3, 4])); // Devrait afficher true
console.log(verifierSommePartiesEgales([1, 5, 11, 5])); // Devrait afficher false
