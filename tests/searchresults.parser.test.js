const fs = require("fs");
const parser = require("../parser");

const productPage1Html = fs.readFileSync("tests/html/productpage1.html");

let parserResult;

beforeAll(() => {
    parserResult = parser(productPage1Html)
});

describe("parsing html product page correctly", () => {
    test("title", () => {
        expect(parserResult.title).toBe(
            "NPET K10 Gaming Keyboard USB Wired Floating Keyboard, Quiet Ergonomic Water-Resistant Mechanical Feeling Keyboard, Ultra-Slim Rainbow LED Backlit Keyboard for Desktop, Computer, PC"
        );
    });

    test("price", () => {
        expect(parserResult.price).toBe(
            "$21.99"
        );
    });

    test("product links", () => {
        console.log(parserResult.productLinks);
        expect(parserResult.productLinks.length).toBe(18)
    });

});

