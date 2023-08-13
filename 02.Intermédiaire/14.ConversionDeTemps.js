//Exercice 14 : Conversion de temps

/**
 * Écrivez une fonction en JavaScript appelée convertirTemps qui prend en entrée un nombre de minutes et renvoie une chaîne de caractères représentant la conversion de ces minutes en heures et minutes. Par exemple, si l'entrée est 150, la fonction devrait renvoyer "2 heures et 30 minutes".
 * 
 * !Assurez-vous de gérer les cas où le nombre de minutes est nul ou négatif.
 */

const convertirTemps = (minutes) => {
    if (minutes <= 0) {
        return "Le nombre de minutes doit être supérieur à zéro.";
    } else {
        const heures = Math.floor(minutes / 60); // Math.floor() arrondit à l'entier inférieur
        const minutesRestants = minutes % 60; // % est l'opérateur modulo
        
        if (heures === 0) { // Si le nombre d'heures est nul, on ne l'affiche pas
            return `${minutesRestants} minutes`; // On affiche seulement les minutes
        } else if (minutesRestants === 0) { // Si le nombre de minutes restantes est nul, on ne l'affiche pas
            return `${heures} heures`; // On affiche seulement les heures
        } else {
            return `${heures} heures et ${minutesRestants} minutes`; // On affiche les heures et les minutes
        }
    }
}

console.log(convertirTemps(150)); // Devrait afficher "2 heures et 30 minutes"
console.log(convertirTemps(90));  // Devrait afficher "1 heure et 30 minutes"
console.log(convertirTemps(60));  // Devrait afficher "1 heure"
console.log(convertirTemps(30));  // Devrait afficher "30 minutes"
console.log(convertirTemps(0));   // Devrait afficher "Le nombre de minutes doit être supérieur à zéro."
console.log(convertirTemps(-10)); // Devrait afficher "Le nombre de minutes doit être supérieur à zéro."

