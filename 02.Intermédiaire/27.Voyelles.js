//Exercice 25 : Comptage des voyelles

/**
 * 
 * Écrivez une fonction en JavaScript appelée compterVoyelles qui prend en entrée une chaîne de caractères et renvoie le nombre de voyelles présentes dans la chaîne. Les voyelles à prendre en compte sont les lettres a, e, i, o, et u (en minuscules), et vous devez ignorer la casse (c'est-à-dire que les lettres en majuscules doivent également être considérées comme des voyelles).
 * 
 * !Assurez-vous de gérer le cas où la chaîne est vide.
 */


const compterVoyelles = (str) => {

    if (str.length === 0){

        return "impossible de tester une chaine vide"

    }else{

        //1. On passe tout en minuscule :
        str = str.toLowerCase();
        // 2. On split la chaine :
        let tab = str.split("");
        // 3. On stocke dans un tableau les voyelles : 
        let voyelles = ["a", "e", "i", "o", "u"];
        // 4. On initialise un compteur :
        let compteur = 0;
        // 5. On parcourt le tableau :
        for (let i = 0; i < tab.length; i++) {
            // 6. On vérifie si la lettre est une voyelle :
            if (voyelles.includes(tab[i])) {
                // 7. On incrémente le compteur :
                compteur++;
            }
        }

        return compteur;

    }


}

console.log(compterVoyelles("Hello, world!")); // Devrait afficher 3 (e, o, o)
console.log(compterVoyelles("Bonjour à tous")); // Devrait afficher 5 (o, u, a, o, u)
console.log(compterVoyelles("")); // Devrait afficher 0
