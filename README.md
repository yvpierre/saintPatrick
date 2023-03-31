
# Saint Patrick



## Lancement du projet (nécessite npm et maven)

A la racine (Saint Patrick)

```bash
  npm install concurrently --save-dev
```
```bash
  npm start
```

Ouvrir le projet 'back-spring'

-Run PatrickApplication

Url
```bash
  http://localhost:3000/
```

## Connexion bdd

Pour se connecter à la BDD exterieur

Url : `https://auth-db966.hstgr.io/index.php?db=u776154520_test`

User : `u776154520_test`

Password : `4w=IdgDh^Re`

## Utilisation

- Pour utiliser l'app en local, il faut mettre le profil spring à dev, avoir une base de donnée mySQL et l'y connecter au back-end via les variables d'envirronnement : dbName et dbMdp. L'url par défaut pointe sur une BDD nommée saint_patrick (en créer une du même nom ou adapter l'url à la votre)
- Sur le profil prod, le back-end pointe sur une BDD distante

## Cahier des charges

Thème : `Saint-Patrick`

Règles de gestion : 
- Un article appartient à une catégorie permettant de trier les articles sur le site
- Une commande peut contenir plusieurs articles, elle détient les informations du client et un état (livrée ou non)
- On ne peut pas supprimer un article du catalogue si il est dans une commande
- Le site présente les articles et permet de les ajouter à un panier puis passer une fausse commande
- La partie admin permet de suppprimer/modifier/créer un article

Règle du panier: 
- A partir de 50 euros, -20%

## Ateurs

- [YVENOU Pierre]()
- [LORY Arthur]()
- [CHAMINADE Pierre]()
- [FOUCHER Pablo]()

