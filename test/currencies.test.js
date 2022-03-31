const app = require("../try");
const chai = require("chai");
const chaiHttp = require("chai-http");


const { expect } = chai;

chai.use(chaiHttp);

describe("Server!", () => {
    it("welcomes to the cryptom api", done => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals("success");
                expect(res.body.message).to.equals("Welcome To cryptom Testing API");
                done();
            });
    });

    it("get currencies list", done => {
        chai
            .request(app)
            .get('/currencies')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("get currencies from the rank", done => {
        chai
            .request(app)
            .get('/currencies/:rank')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("l'ajout de currencies", done => {
        chai
            .request(app)
            .post('/currencies')
            .send({
                "id": "bitshares",
                "rank": 26,
                "symbol": "BTS",
                "name": "BitShares",
                "supply": "2648020000.0000000000000000",
                "maxSupply": "3600570502.0000000000000000",
                "marketCapUsd": "417946480.6234385711480000",
                "volumeUsd24Hr": "3707830.5197623489175103",
                "priceUsd": "0.1578335815527974",
                "changePercent24Hr": "-0.5262835077445962",
                "vwap24Hr": "0.1597890049426776"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });


    it("la modification d'un currencies", done => {
        chai
            .request(app)
            .put('/currencies/1')
            .send({
                "id": "bitcoin",
                "symbol": "BTC",
                "name": "Bitcoinnnn",
                "supply": "25233111.0000000000000000",
                "maxSupply": "65900000.0000000000000000",
                "marketCapUsd": "119150835874.4699281625807300",
                "volumeUsd24Hr": "2927959461.1750323310959460",
                "priceUsd": "6929.8217756835584756",
                "changePercent24Hr": "1.1301417214350335",
                "vwap24Hr": "7175.0663247679233209"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("la suppression d'un currencies", done => {
        chai
            .request(app)
            .delete('/currencies/:rank')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });


});
