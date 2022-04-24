'use strict';
import Puppeteer from Puppeteer;

async function scrape(url){

    const browser = await Puppeteer.launch();
    const page = await new browser.newPage();
    await page.goTo(url);

    const [el] = await page.$x('//*[@id="content"]/div[3]/div/div/div/div/div/div[1]/div/div/div[1]/div/h1/span[2]');
const txt = await el.getproperty('textContent');
const rawTxt = await txt.jsonValue();

console.log({ rawTxt});
}