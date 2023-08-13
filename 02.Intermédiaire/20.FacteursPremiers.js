//Exercice 18 : Calcul du facteur premier le plus élevé

/*
Écrivez une fonction en JavaScript appelée facteurPremierPlusEleve qui prend en entrée un nombre entier positif n et renvoie le facteur premier le plus élevé de ce nombre.

Un facteur premier est un nombre premier qui divise exactement un autre nombre sans laisser de reste. Par exemple, les facteurs premiers de 12 sont 2 et 3.

! Assurez-vous de gérer les cas où n est inférieur ou égal à 1.

*/

const facteurPremierPlusEleve = (n) => {

    if(n <= 1){
        return "n doit être supérieur à 1";
    }else{
        let facteurPremier = 2;
        let facteurPremierPlusEleve = 0;

        while(facteurPremier <= n){ // Tant que le facteur premier est inférieur ou égal à n
            if(n % facteurPremier === 0){ // Si n est divisible par le facteur premier
                facteurPremierPlusEleve = facteurPremier; // On stocke le facteur premier
                n = n / facteurPremier; // On divise n par le facteur premier
            }else{
                facteurPremier++; // Sinon on incrémente le facteur premier
            }
        }

        return facteurPremierPlusEleve; // On retourne le facteur premier le plus élevé
    }

}

console.log(facteurPremierPlusEleve(12)); // Devrait afficher 3 (car 3 est le plus grand facteur premier de 12)
console.log(facteurPremierPlusEleve(35)); // Devrait afficher 5 (car 5 est le plus grand facteur premier de 35)
