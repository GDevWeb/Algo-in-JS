+---------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|         |0    |1    |2    |3    |4    |5    |6    |7    |8    |9    |
+---------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|unités   |     |I    |II   |III  |IV   |V    |VI   |VII  |VIII |IX   |
+---------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|dizaines |     |X    |XX   |XXX  |XL   |L    |LX   |LXX  |LXXX |XC   |
+---------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|centaines|     |C    |CC   |CCC  |CD   |D    |DC   |DCC  |DCCC |CM   |
+---------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+

par exemple 4876 donne :
4.8.7.6
MMMM.DCCC.LXX.VI

Fonction convertirChiffreRomainEnNombre(chiffreRomain):
    tableCorrespondance = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    total = 0
    longueur = longueur(chiffreRomain)

    Pour i de 1 à longueur faire:
        valeurCourante = tableCorrespondance[chiffreRomain[i]]
        valeurPrecedente = tableCorrespondance[chiffreRomain[i-1]]
        Si valeurCourante > valeurPrecedente alors:
            total += valeurCourante - 2 * valeurPrecedente  // Soustraction pour compenser l'addition précédente
        Sinon:
            total += valeurCourante
    
    total += tableCorrespondance[chiffreRomain[longueur]]

    Retourner total
Fin Fonction
