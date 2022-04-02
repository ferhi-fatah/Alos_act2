# Alos_act2
l'activite 2 de module Architecture logicielle orientée service 
- Thème  : Cryptome , API de crypto-monnaie .

## Etape1 :
l'installation de la librairie [express](https://expressjs.com/).

`$ npm install express `

## Etape2 :
Création du serveur Express .

```
const express = require('express')
const app = express() 
```

## Etape3 :
Définition des routes :
Pour tester nos routes , nous avons utiliser l'outil [Postman](https://www.postman.com/)  .
- l'accueille de l'API (get):
  
  ![image](https://user-images.githubusercontent.com/101930870/160936245-81d34291-1a2b-44b5-be20-f895afd54772.png)

- la liste des currencies (get): 
  
  ![image](https://user-images.githubusercontent.com/101930870/160936358-7764f23e-f380-4557-a1ce-ce4c72fe786a.png)

- la récupération de currencie par le rank (get):  
  
  ![image](https://user-images.githubusercontent.com/101930870/160936482-ee783e72-49b5-45ab-bc5e-7c04a295a39a.png)

- l'ajout d'un currencie (post) :
  
  ![image](https://user-images.githubusercontent.com/101930870/160936894-496f6b91-5724-4cd2-a9db-3122b97582ab.png)

- la modification de currencie (put) :
  
  ![1](https://user-images.githubusercontent.com/101930870/160937756-da463964-9998-4f40-9b16-f0b33b868345.PNG)

- la suppression de currencie (delet) :
   
  ![image](https://user-images.githubusercontent.com/101930870/160937415-cefbcea8-741d-4fff-8e71-67db2e6d005f.png)
  
- l'errorhandler ( la gestion des fausses routes ) :

  ![image](https://user-images.githubusercontent.com/62666792/161395748-b0cc0d22-a5c0-4b75-9aea-d2477b0c7647.png)
  ![image](https://user-images.githubusercontent.com/62666792/161395968-c53e5059-6229-41c0-bf70-7fa7467597c8.png)


## Etape4 :
Utilisation des middlwares validation des données ( [express-validator](https://express-validator.github.io/docs/) ) pour valide les données a l'ajout .

`$ npm install --save express-validator `

![image](https://user-images.githubusercontent.com/101930870/160938020-6343efd8-3f91-4849-8a66-e7fc511998fb.png)


## Etape5 :
le test des API avec [mocha](https://mochajs.org/) (Test-Driven Development).

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
le code est implemente au fichie [currencies.test.js](https://github.com/ferhi-fatah/Alos_act2/blob/main/test/currencies.test.js).

`$ npm test `

![image](https://user-images.githubusercontent.com/101930870/160941183-c72b5e11-09df-4c58-9eb0-546d0eafe208.png)
