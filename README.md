# jeuDuPendu

Affichage :

    bouton start
    les lettres ne sont pas accessible
    nombre de chances à 10
    pendu complet

calcul :

    wordNbr -> nombre de mot trouvé = 0
    count -> nombre de bonne lettres = 0
    w -> nombre de mauvais choix = 0

au click = function start (0 or 1) :

    si param = 0 ? Les mots sont mélangés & wordNbr = 0 : wordNbr++
    - le bouton start disparait / les lettres sont accessible
    - pendu à 0
    ? chaque lettre devient visible ?
    - count = 0 -> nombre de bonne réponse

si ( wordNbr < au nbr total && count < taille du mot && w < 10 chances) :

    function (wordNbr) : affichage fantome des lettres 
    
    l'utilisateur choisi une lettre
        - la lettre est présente dans le mot :
            - elle s'incrit à sa/ses place(s)
            count++ * nombre de places
            - sinon elle s'inscrit dans wrong
            w++
    sinon si (wordNbr === nbr total) :

        TOUS LES MOTS SONT TROUVES
    
    sinon :

        affichage = count === taille du mot ? win : loose
        mot suivant (comptage wordNbr++) soit restart (remise à zéro)
