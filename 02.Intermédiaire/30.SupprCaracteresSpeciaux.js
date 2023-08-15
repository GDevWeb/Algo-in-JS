//Exercice 28 : Élimination des caractères spéciaux


/**
 * 
 * Écrivez une fonction en JavaScript appelée eliminerCaracteresSpeciaux qui prend en entrée une chaîne de caractères et renvoie une nouvelle chaîne où tous les caractères spéciaux ont été supprimés, ne laissant que les lettres * et les chiffres.
* ! Assurez-vous de gérer le cas où la chaîne est vide.
 * 
 * 
 * 
 */


const eliminerCaracteresSpeciaux = (str) => {   

    if(str.length === 0){

        return "Erreur, Impossible de tester une chaîne vide";

    }else{

        let regex = /[a-zA-Z0-9]/g; // On utilise une expression régulière pour trouver les caractères alphanumériques
        let newStr = str.match(regex).join(""); // On utilise la méthode match() pour trouver les caractères alphanumériques et la méthode join() pour les concaténer en une chaîne de caractères
        return newStr; // On retourne la nouvelle chaîne de caractères


    }

}



console.log(eliminerCaracteresSpeciaux("Hello, world!")); // Devrait afficher "Helloworld"
console.log(eliminerCaracteresSpeciaux("123abc$%^")); // Devrait afficher "123abc"
console.log(eliminerCaracteresSpeciaux("")); // Devrait afficher ""
