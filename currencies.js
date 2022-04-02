const express = require('express')
const app = express()
const currencies = require('./currencies.json')


// *********** the cryptom api ***********

app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome To cryptom Testing API" });
});


// ajouter un middleware :
app.use(express.json())


// *********** the currencies list ***********

app.get('/currencies', (req, res) => {
  res.status(200).json(currencies)
})


// *********** the currencies by the rank ***********

app.get('/currencies/:rank', (req, res) => {
  const rank = parseInt(req.params.rank)
  const currencie = currencies.find(currencie => currencie.rank === rank)
  res.status(200).json(currencie)
})


// *********** l'ajout de currencies ***********

const { body, validationResult } = require('express-validator');


app.post(
  '/currencies',

  // symbol must be at least 2 chars long and max 4 :
  body('symbol').isLength({ max: 4 }),
  body('symbol').isLength({ min: 2 }),
  // id , name and sympbol must be alphabetic :
  body('id').isAlpha(),
  body('symbol').isAlpha(),
  body('name').isAlpha(),
  // maxSupply ,marketCapUsd , priceUsd ,vwap24Hr must be + :
  body('supply').isDecimal({ min: 0 }),
  body('marketCapUsd').isDecimal({ min: 0 }),
  body('priceUsd').isDecimal({ min: 0 }),
  body('vwap24Hr').isDecimal({ min: 0 }),
  // changePercent24Hr :
  body('changePercent24Hr').isDecimal(),


  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions :

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    currencies.push(req.body)
    res.status(200).json(currencies)
  })


// *********** la modification d'un currencies ***********
  
app.put('/currencies/:rank', (req, res) => {
  const rank = parseInt(req.params.rank)
  let currencie = currencies.find(currencie => currencie.rank === rank)
    currencie.id = req.body.id,
    currencie.symbol = req.body.symbol,
    currencie.name = req.body.name,
    currencie.supply = req.body.supply,
    currencie.maxSupply = req.body.maxSupply,
    currencie.marketCapUsd = req.body.marketCapUsd,
    currencie.volumeUsd24Hr = req.body.volumeUsd24Hr,
    currencie.priceUsd = req.body.priceUsd,
    currencie.changePercent24Hr = req.body.changePercent24Hr,
    currencie.vwap24Hr = req.body.vwap24Hr,


    res.status(200).json(currencie)
})


// *********** la suppression d'un currencies ***********

app.delete('/currencies/:rank', (req, res) => {
  const rank = parseInt(req.params.rank)
  let currencie = currencies.find(currencie => currencie.rank === rank)
  currencies.splice(currencies.indexOf(currencie), 1)
  res.status(200).json(currencies)
})

// *********** Error Handling ***********

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
   
  });
  
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;
  
  next(err);
});

app.listen(3000, () => {
  console.log("Serveur à l'écoute")
})

module.exports = app;



