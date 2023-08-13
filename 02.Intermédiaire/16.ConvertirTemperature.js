//Exercice 16 : Conversion de température

/**Écrivez une fonction en JavaScript appelée convertirTemperature qui prend en entrée une température en degrés Celsius et renvoie la même température convertie en degrés Fahrenheit. La formule de conversion est la suivante : température en Fahrenheit = (température en Celsius * 9/5) + 32. 
 * 
 * !Assurez-vous de gérer les cas où la température en Celsius est négative.
*/

const convertirTemperature = (temperature) => {
    if (temperature < 0) {
        return "La température ne peut pas être négative";
    } else {
        return (temperature * 9/5) + 32;
    }
}

console.log(convertirTemperature(-1)); // Devrait afficher "La température ne peut pas être négative"
console.log(convertirTemperature(0));  // Devrait afficher 32
console.log(convertirTemperature(100)); // Devrait afficher 212
