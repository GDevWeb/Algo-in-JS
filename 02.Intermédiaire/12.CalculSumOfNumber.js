//Exercice 12 : Calculer la somme des chiffres d'un nombre

/**
 * 
 * Écrivez une fonction en JavaScript appelée sommeChiffres qui prend en entrée un nombre entier positif et renvoie la somme de ses chiffres.
 * 
 * !Assurez-vous de gérer le cas où le nombre est inférieur ou égal à 0.
 * 
 * 
 * */


const sommeChiffres = (n) => {
    if (n <= 0) {
        return false;
    } else {
        n = n.toString();
        let somme = 0;
        for (let i = 0; i < n.length; i++) {
            somme += parseInt(n[i]);
        }
        return somme;
    }
}

console.log(sommeChiffres(123)); // Devrait afficher 6 (1 + 2 + 3)
console.log(sommeChiffres(456)); // Devrait afficher 15 (4 + 5 + 6)
