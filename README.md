# jeuDuPendu

Affichage :

    bouton start
    les lettres ne sont pas accessible
    nombre de chances à 10
    pendu complet

calcul :

    count -> nombre de bonne lettres = 0
    w -> nombre de mauvais choix = 0

au click = function start (0 or 1) :

    - le bouton start disparait / les lettres sont accessible
    - pendu à 0

    affichage fantome des lettres 
    
    l'utilisateur choisi une lettre
        - si la lettre est présente dans le mot :
            - elle s'incrit à sa/ses place(s)
            - count++
        - sinon elle s'inscrit dans wrong
            - w++
