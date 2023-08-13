//Exercice 19 : Inversion de chaîne

/**
 * Écrivez une fonction en JavaScript appelée inverserChaine qui prend en entrée une chaîne de caractères et renvoie une nouvelle chaîne avec les caractères inversés.
 * 
 * !Assurez-vous de gérer le cas où la chaîne est vide et de renvoyer un message approprié dans ce cas.
 */


const inverserChaine = (chaine) => {

    if(chaine.length === 0){
        return "Chaine vide";
    }else{
        let ChaineInverse = chaine.split("").reverse().join("");

        return ChaineInverse;
    }
}


console.log(inverserChaine("hello")); // Devrait afficher "olleh"
console.log(inverserChaine("algorithm")); // Devrait afficher "mhtirogla"
