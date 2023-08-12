//Exercice 3 : Vérifier si un nombre est premier

/*
Écrivez une fonction en JavaScript appelée estNombrePremier qui prend en entrée un nombre entier positif et renvoie true s'il s'agit d'un nombre premier, sinon renvoie false.

Un nombre premier est un nombre entier positif supérieur à 1 qui n'a que deux diviseurs distincts : 1 et lui-même.
*/

const nombre = 2;
;

const estPremier = (nombre) => {
    if ((nombre > 1) && (nombre % nombre === 0) && (nombre % 1 === 0)) {
        return true;
    }else {
        return false;
    }
}
estPremier(nombre);
console.log(estPremier(nombre)); 
