const express = require('express')
const app = express()
const currencies = require('./currencies.json')

// ajouter un middleware :
app.use(express.json())



app.get('/currencies', (req,res) => {
    res.status(200).json(parkings)
})

app.get('/currencies/:rank', (req,res) => {
    const rank = parseInt(req.params.rank)
    const currencie = currencies.find(currencie => currencie.rank === rank)
    res.status(200).json(currencie)
})



const { body, validationResult } = require('express-validator');

app.post(
    '/currencies',
    
    // symbol must be at least 2 chars long and max 4
    body('symbol').isLength({ max: 4 }),
    body('symbol').isLength({ min: 2 }),
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        currencie.create({
            id: req.body.id,
            symbol: req.body.symbol,
            name: req.body.name,
            supply: req.body.supply,
            maxSupply: req.body.maxSupply,
            marketCapUsd: req.body.marketCapUsd,
            volumeUsd24Hr: req.body.volumeUsd24Hr,
            priceUsd: req.body.priceUsd,
            changePercent24Hr: req.body.changePercent24Hr,
            vwap24Hr: req.body.vwap24Hr,
        }).then(currencie => res.status(200).json(currencie));
    },
);
/*
app.post('/currencies', (req,res) => {
    currencies.push(req.body)
    res.status(200).json(currencies)
})
*/
app.put('/currencies/:id', (req, res) => {
    const id = parseInt(req.params.id)
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

app.delete('/currencies/:id', (req, res) => {
    const rank = parseInt(req.params.rank)
    let currencie = currencies.find(currencie => currencie.rank === rank)
    currencies.splice(currencies.indexOf(currencie), 1)
    res.status(200).json(currencies)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
