//Exercice 21 : Vérification de la parité des chiffres

/*
Écrivez une fonction en JavaScript appelée verifierPariteChiffres qui prend en entrée un nombre entier positif n et renvoie true si tous les chiffres du nombre sont pairs, sinon renvoie false.


!Assurez-vous de gérer les cas où n est inférieur ou égal à 0.

*/

const verifierPariteChiffres = (n) => {


    if (n <= 0) {
        return "Impossible de vérifier la partié des chiffres d'un nombre négatif ou inférieur à 0";

    } else {

        // 1.split n en chiffres individuels : 12345 => [1,2,3,4,5]
        let nombre = n.toString();
        // 2. parcourir le tableau de chiffres
        for (let i = 0; i < nombre.length; i++) {
            // 3. vérifier si le chiffre est pair
            if ((nombre[i]) % 2 !== 0) {
                // 4. si le chiffre est impair, retourner false (sortir de la fonction)
                return false;
            } else {
                // 5. si on a parcouru tout le tableau, retourner true
                return true;
            }
        }


    }
}


console.log(verifierPariteChiffres(2468)); // Devrait afficher true (car tous les chiffres sont pairs)
console.log(verifierPariteChiffres(12345)); // Devrait afficher false (car 1 et 3 sont impairs)