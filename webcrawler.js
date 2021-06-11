/*
1. Visit a page
2. Get Title, Price and product links from the page
3. Add page to visited links array (Map? <--- Probably should iteration would require a database to be structures with hashes)
4. Add new product links to our links to visit array
5. Go to step 1 with the next link in the to visit array
*/


const { parseSync } = require("@babel/core");
const httpRequest = require("./httpRequest");
const parser = require("./parser");


let visitedLinks = [];
let linksToVisit = [
    "/Glorious-Aura-Keycaps-Mechanical-Keyboards/dp/B07D6WMVMW/ref=sr_1_3?dchild=1&keywords=glorious+aura+keycaps+for+mechanical+keyboard+-+pbt&qid=1623339287&sr=8-3"
];

async function main() {
    while (linksToVisit.length > 0) {
        try {
            const currentUrl = linksToVisit.pop();
            if (visitedLinks.includes(currentUrl)) {
                continue;
            }
            console.log("now crawling " + currentUrl);

            const html = await httpRequest.getRequest(
                "https://www.amazon.com" + currentUrl
            );

            const parsedResult = parser(html);

            const cleanLinks = parsedResult.productLinks.map(link =>
                link.slice(0,14)
            );

            linksToVisit = linksToVisit.concat(cleanLinks);
            console.log(parsedResult);
            visitedLinks.push(currentUrl);

            // Do not want to DDOS Amazon
            await sleep(5000);
        } catch (err) {
            console.error(err);
        }
    }
};

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

main();