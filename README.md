# Alos_act2
l'activite 2 de module Architecture logicielle orientée service 

## Etape1 :
l'installation de la librairie express 

`$ npm install express `

## Etape2 :
Création du serveur Express 

```
const express = require('express')
const app = express() 
```
## Etape3 :
Définition des ressources et ses routes

## Etape4 :
Utilisation des middlwares validation des données ( express-validator )

`$ npm install --save express-validator `

## Etape5 :
le test des API avec mocha 

#### l'installation :

```
$ npm i express --save
$ npm i mocha chai chai-http --save-dev
```
#### l'ajout de scripte au package.json fichie :

```
"scripts": {
"test": "mocha"
}
```
#### l'execution de code  :
le code est implemente au fichie currencies.test.js

`$ npm test `


