# Blockchain challenge 

## Ynov 2020

## Collaborators

- Killian CAMBERT
- Jules GUERIN
- Paulin SIROT
- Victor AFFILE
- Adrien VAUCARD

## Initialisation
Pour initialiser le projet, vous devez **clonez** ou **téléchargez** le dossier ZIP du projet. Vérifiez que vous avez installé NodeJS. Si ce n'est pas le cas, téléchargez NodeJS et suivez les instructions.
> Pour installer toutes les dépendances, faites en sorte que votre version npm soit plus récente que :
> - express :  [![Node version](https://img.shields.io/node/v/express.svg?style=flat)](http://nodejs.org/download/)
> - body-parser : [![Node version](https://img.shields.io/node/v/body-parser.svg?style=flat)](http://nodejs.org/download/)
> - cryptojs : ![Node version](https://img.shields.io/node/v/body-parser.svg?style=flat)
>
> Pour vérifier votre version npm (Node Packages Manager) entrez cette commande :
> ```bash
> $ npm --version
> ````
> Ou cette commande : 
> ```bash
> $ npm --v
Après cela, entrez cette commande pour installer toutes les dépendances du projet enregistré dans les fichiers package.json & package-lock.json :
> ```bash
> $ cd ./blockchain-challenge
> $ npm install
## Création de la blockchain
Pour créer la blockchain, il faut effectuer les commandes suivantes :
>```bash
> $ cd blockchain
> $ cd src
> $ node app.js 
Après cela, la blockchain est créée. On peut le voir dans la console.
## Lancement du serveur local Angular
Pour lancer le serveur local, il faut effectuer les commandes suivantes :
>```bash
> $ cd blockchain-front
> $ ng serve --open 
L'option `--open` (ou juste `-o`) ouvre automatiquement le navigateur à l'adresse `http://localhost:port/`.
Il est possible aussi de changer le 'port' avec l'option `--port` suivi d'un chiffre comme `4300`.
Vous obtiendrez un résultat semblable à :
>```bash
>Angular Live Development Server is listening on localhost:4300, open your browser on http://localhost:4300/ 
