//Exercice 23 : Suppression des doublons dans une chaîne

/*
 * Écrivez une fonction en JavaScript appelée supprimerDoublons qui prend en entrée une chaîne de caractères et renvoie une nouvelle chaîne où tous les caractères en double ont été supprimés, laissant uniquement une occurrence de chaque caractère.
 * 
 * 
 * !Assurez-vous de gérer les cas où la chaîne est vide.
 */


const supprimerDoublons = (str) => {
if(str === ""){
    return "Impossible de supprimer les doublons d'une chaîne vide";
}else{

    //1. split str en caractères individuels : "banana" => ["b","a","n","a","n","a"]
    let splitStr = str.split("");

    // Stockage des chars uniques :
    let uniqueChars = [];

    //2. parcourir le tableau de caractères
    for(let i = 0; i < splitStr.length;i++){
        //3. vérifier si le caractère est déjà présent dans le tableau
        if(uniqueChars.indexOf(splitStr[i]) === -1){

            //4. si le caractère n'est pas déjà présent, ajouter le caractère au tableau
           uniqueChars.push(splitStr[i]);
        }
        
    }
    //5. join le tableau en une chaîne de caractères : ["b","a","n","a"] => "ban"
    return uniqueChars.join("");
}

}


console.log(supprimerDoublons("allo")); // Devrait afficher "alo"
console.log(supprimerDoublons("banana")); // Devrait afficher "ban"
