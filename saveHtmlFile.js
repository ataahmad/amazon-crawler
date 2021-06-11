const httpRequest = require("./httpRequest");

async function saveHtml(url) {
    const html = await httpRequest.getRequest(url);

    await httpRequest.saveHtml(html);
}

saveHtml(
    "https://www.amazon.com/Glorious-Aura-Keycaps-Mechanical-Keyboards/dp/B07D6WMVMW/ref=sr_1_3?dchild=1&keywords=glorious+aura+keycaps+for+mechanical+keyboard+-+pbt&qid=1623339287&sr=8-3"
);