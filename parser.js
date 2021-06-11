const cheerio = require("cheerio");


function parseAll(html) {
    const $ = cheerio.load(html);

    const title = $("span#productTitle").text().trim();
    
    let price = $("span#priceblock_saleprice").text().trim();
    
    if (price === "") {
        price = $("span#priceblock_ourprice").text().trim();
    }
    
    const productLinks = $("a")
        .map((index, element) => $(element).attr("href"))
        .get()
        .filter(link => link.startsWith("/dp/"));

    return { title, price, productLinks };
}


module.exports = parseAll;