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
    
});
