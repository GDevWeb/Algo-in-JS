// Niveau débutant :
        // 1. Calculer la somme des nombres pairs d'une liste. 

const tableau  = [1,2,3,4,5,6,7,8,9,10];
const sommeDesNombresPaires = tableau.filter((element) => element % 2 === 0).reduce((acc, element) => acc + element, 0);

const somme = sommeDesNombresPaires;

console.log(somme);