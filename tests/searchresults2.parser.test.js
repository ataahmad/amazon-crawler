const fs = require("fs");
const parser = require("../parser");

const productPage2Html = fs.readFileSync("tests/html/productpage2.html");

let parserResult;

beforeAll(() => {
    parserResult = parser(productPage2Html);
});

describe("parsing html product page correctly", () => {
    test("title", () => {
        expect(parserResult.title).toBe(
            "Glorious Aura Keycaps for Mechanical Keyboards - PBT, Pudding, Double Shot, Black, Standard Layout | 104 Key, TKL, Compact Compatible (Aura (Black))"
        );
    });

    test("price", () => {
        expect(parserResult.price).toBe(
            "$24.99"
        );
    });

    test("product links", () => {
        console.log(parserResult.productLinks);
        expect(parserResult.productLinks.length).toBe(11)
    });

});