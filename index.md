# Introduction

- Qu'est-ce qui se joue en terme de design ?
- Pourquoi traiter ce sujet ? Pourquoi je travaille sur ça ? Pas juste un coup de cœur personnel mais une ambition plus large.
- Quel est le problème intellectuel, quelle est la difficulté ?
- Montrer l'actualité du sujet 
- Différents contextes : montrer les situations où il y a un problème à traiter
- Enjeux : différents aspects, points de vue qui vont déterminer le positionnement. Montrer que les problèmes sont larges même si l'on en traite qu'une partie.

# Algorithmes

## Qu'est-ce qu'un algorithme ?

**Un algorithme est une suite finie d'instructions qui vise à être exécutée afin de produire un résultat.** Pour comprendre ou enseigner la notion d'algorithme, on fait bien souvent appel à des cas concrets que l'on rencontre dans la vie quotidienne. Une recette de cuisine, par exemple, constitue un algorithme : on y trouve des *entrées* (les ingrédients, quantités, ustensiles utilisés) ainsi que des instructions (casser en morceaux, cuire au bain-marie, couper en dés). Enfin, le résultat obtenu lorsqu'on suit minutieusement cette recette de cuisine est, bien évidemment, le plat préparé. Cette vision nous fournit une première définition du concept d'algorithme, donnée par Serge Abiteboul[^2] et Gilles Dowek[^3].
[^2]: Serge Abiteboul est checheur à l'<abbr title="Institut national de recherche en informatique et en automatique">INRIA</abbr>  et professeur à l'<abbr title="École normale supérieure">ENS</abbr> de Paris-Saclay. Sa recherche porte sur la gestion de données, d'information et de connaissances.
[^3]: Gilles Dowek est également chercheur à l'<abbr title="Institut national de recherche en informatique et en automatique">INRIA</abbr> et professeur à l'<abbr title="École normale supérieure">ENS</abbr> de Paris-Saclay. Ses travaux portent sur la formalisation des mathématiques, les systèmes de traitement des démonstrations, la physique du calcul et la sûreté des systèmes aéronautiques et spatiaux.

> Un algorithme est un procédé qui permet de résoudre un problème, sans avoir besoin d'inventer une solution à chaque fois. Avec cette définition, il est clair que, depuis l'aube de l'humanité, nous inventons, utilisons et transmettons des algorithmes : cuisine, taille du silex, pêche à la ligne, culture des lentilles et du blé, etc.[^4]

[^4]: <cite>1:11</cite>

**Dans cette définition générique de la notion d'algorithmes s'inscrit une catégorie spécifique plus réduite, un ensemble que l'on nomme *algorithmes symboliques*.** Ceux-ci manipulent des symboles écrits : chiffres, lettres, assemblés en nombres, en mots et en phrases, et vecteurs de sens. Étymologiquement, le terme *algorithme* est d'ailleurs issu de la combinaison du mot latin *algorismus* – dérivé du nom du mathématicien Al-Khwarizmi[^1] – et du mot grec *arithmos*, qui signifie "nombre". Cette proximité entre les notions d'algorithmique et de mathématiques s'est confirmé grâce aux progrès techniques des deux siècles passés. À ce jour, par abus de langage et en raison de notre contexte technologique contemporain, la notion d'algorithmes symboliques a presque remplacé celle, plus générique, d'algorithmes : l'informatique a orienté l'emploi même du mot.
[^1]: Muhammad Ibn Mūsā al-Khuwārizmī, généralement appelé *Al-Khwarizmin* (latinisé en *Algoritmi*), était un mathématicien, géographe, astrologue et astronome perse, notamment auteur d'un ouvrage classifiant les procédés algébriques existants à son époque.

## Algorithmes et programmes

Remontons aux origines des algorithmes symboliques, il y a 5&nbsp;000 ans. À cette époque, les mathématiciens ont déjà mis au point des algorithmes servant à résoudre des calculs algébriques simples tels que des additions et des multiplications, mais ceux-ci sont exécutés à la main, par des personnes en chair et en os. Des tâches répétitives qu'on aurait tout intérêt à déléguer aux machines, afin que celles-ci s'effectuent *mécaniquement*.

S'en suit cinq millénaires d'innovations techniques. Les premiers abaques[^7], suivis quelques siècles plus tard de leurs proches dérivés, les bouliers, assistent les hommes dans ces calculs mais ne sont pas encore autonomes. Au Moyen Âge, les cloches au sommet des cathédrales sonnent chaque heure sans intervention humaine : ce sont les premières machines capables d'exécuter des algorithmes symboliques. En 1642, l'inventeur français Blaise Pascal[^8] met au point la première machine à calculer, qu'il nomme "machine arithmétique" ; elle est retravaillée quelques 30 ans plus tard par Gottfried Leibniz[^9] qui y ajoute une interface permettant de réaliser de façon automatique des multiplications et des divisions.
[^7]: Le terme *abaque* désigne tout instrument mécanique plan facilitant le calcul.
[^8]: Blaise Pascal était un mathématicien, physicien, inventeur et philosophe français. À 19 ans, il invente la première machine à calculer, dénommée *machine d’arithmétique*, puis *roue pascaline* et enfin *pascaline*.
[^9]: Gottfried Leibniz était un philosophe, scientifique, mathématicien et logicien allemand.

En 1801, l'inventeur lyonnais Joseph Jacquard met au point un système de métier à tisser qui portera son nom : le fameux "métier Jacquard". Celui-ci combine les métiers à tisser classiques avec le principe de cartes perforées inventé en 1728 par Jean-Baptiste Falcon – qui lui-même reprenait l'idée des rubans perforés que Basile Bouchon, son maître, proposait trois ans plus tôt. En perçant ou non un trou à un emplacement spécifique d'une carte, on peut programmer la machine : une fois insérée en *entrée* de la machine,  les cartes guident les crochets qui soulèvent les "fils de chaînes" – dont l'agencement produit le motif sur le textile tissé. Ce dispositif est souvent considéré comme la première forme de stockage d'informations binaires (*tout* ou *rien*, *vrai* ou *faux*), et le métier Jacquard comme l'ancêtre de l'ordinateur.

Mais ces machines ne sont pas encore des ordinateurs à proprement parler. Il leur manque pour atteindre ce statut une caractéristique majeure : l'universalité. En effet,  les exemples de machines cités plus haut n'ont chacun qu'une fonction ; là où un ordinateur est polyvalent, *universel*, capable d'exécuter n'importe quel algorithme symbolique imaginable : en résumé, une "machine à tout faire".

**Au cours du XX^ème^ siècle, l'apparition des premières machines analytiques va transformer les usages des algorithmes.** En 1834, le visionnaire britannique Charles Babbage[^6] débute le développement d'une machine d'un concept alors nouveau, qu'il qualifie de "machine analytique". Celle-ci reprend la principe des machines à calculer mécaniques qui existent alors depuis plusieurs siècles déjà. Mais l'inventeur a l'idée d'ajouter à ces systèmes le principe des cartes perforées apparues avec les métiers Jacquard. Les composants de cette machine sont similaires à ceux qui composent un ordinateur moderne.

> - un dispositif d'entrée comporte deux lecteurs de cartes perforées (instructions et données) ; ces cartes sont issues des techniques du métier à tisser.
> - un organe de commande gère le transfert des nombres et leur mise en ordre pour le traitement ;
> - un moulin est chargé d'exécuter les opérations sur les nombres ;
> - un magasin permet de stocker les résultats intermédiaires ou finaux ;
trois types d'imprimantes sont prévus.[^10]

[^10]: [Machine analytique](https://fr.wikipedia.org/wiki/Machine_analytique) sur Wikipédia


Pendant qu'il travaille sur ce projet, Babbage entre en correspondance avec Ada Lovelace. Pionnière de la science informatique, c'est elle qui, en 1843, sera à l'origine du premier algorithme destiné à être exécuté sur une machine : la machine à différences de Charles Babbage. Cet algorithme, considéré comme le premier programme informatique à proprement parler, sert alors à calculer la suite des nombres de Bernouilli[^5]. Ada Lovelace est ainsi connue comme la première programmeuse de l'histoire.
[^6]: Charles Babbage était un mathématicien et inventeur britannique du XIX^ème^ siècle. Il fut l'un des principaux précurseurs de l'informatique.
[^5]: En mathématiques, les nombres de Bernoulli constituent une suite de nombres rationnels. Ces nombres ont d'abord été étudiés par Jacques Bernoulli, mathématicien et physicien suisse du XVII^ème^siècle.



## Approche fondamentale
Séquence, affectation, itération, condition


# Écriture(s)

## Qu'est-ce que l'écriture ?

## Des langages naturels aux langages artificiels

- Langages naturels
- Langages informatiques (classiques)
    - paradigmes
    - pseudo-code
    - langages ésotériques

## Outils d'écriture algorithmique

- lignes de code (règles et conventions)
    - conventions de nommage (camelCase, snake_case…)
    - lisibilité (indentation, syntax highlighting…)
- organigrammes (flowcharts)
- représentation visuelle (scratch)
- modifier l'existant
    - refactoring
    - versionning (git, commits, diff…)

---

### État de l'art (systèmes…)

- Problématiques possibles :
    - création
    - apprentissage
    - visualiser
    - jouer
- Deux approches :
    - Que permet tel catégorie d'interface/d'écriture algorithme (pour, but, objectif)
    - Questionner l'interface en soi (pourquoi on écrit en lignes, et pourquoi pas autrement). Travailler le matériau.
- Dans quel environnement, quel terrain ?
    - Creative coding
    - Live coding
    - …

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIzMDQxNzUzMF19
-->