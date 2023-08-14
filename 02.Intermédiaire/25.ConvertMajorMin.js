const majusculesMinusculesAlternes = (str) => {
    if (str === "") {
        return "Impossible de convertir les majuscules et minuscules d'une chaîne vide";
    } else {
        let majuscule = true;

        const newStr = str.replace(/[a-zA-Z]/g, (match) => {
            if (majuscule) {
                majuscule = false;
                return match.toUpperCase();
            } else {
                majuscule = true;
                return match.toLowerCase();
            }
        });

        return newStr;
    }
}

console.log(majusculesMinusculesAlternes("Bonjour tout le monde")); // Devrait afficher "BoNjOuR ToUt lE MoNdE"
console.log(majusculesMinusculesAlternes("JavaScript est super")); // Devrait afficher "JaVaScRiPt eSt sUpEr"
console.log(majusculesMinusculesAlternes("")); // Devrait afficher ""
