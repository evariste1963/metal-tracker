import * as model from './model.js';
import addStackView from './views/addStackView.js';
import spotDataView from './views/spotDataView.js';
import statisticDataView from './views/statisticDataView.js';
import accountUpdateView from './views/accUpdateView.js';
import * as helpers from './helpers.js';
import { chartIt } from './views/chartView';
import puppeteer from 'puppeteer';

const btnUpdate = document.querySelector('.btn-update');

///////////////////////////////////////////////////////////////////////
////===developement result --- TO BE DELETED---\\\
let markUp = spotDataView._generateSpotMarkup(helpers.devData);
spotDataView.renderData(markUp);
let accMarkUp = accountUpdateView._generateAccMarkup(helpers.devAccount);
accountUpdateView.renderData(accMarkUp);
//=======================================\\
/////////////////////////////////////////////////////////////////////////

//get metal price on 'get latest price' button
async function controlGetMetalPrice() {
  try {
    [spotDataView, statisticDataView].forEach(fn => fn.renderSpinner());
    let markUp = await spotDataView._generateSpotMarkup(
      await model.getMetalPrice()
    );
    //render price update
    spotDataView.renderData(markUp);
  } catch (err) {
    [spotDataView, statisticDataView].forEach(fn => fn.renderError());
  }
}

async function controlGetAccountUpdate() {
  try {
    accountUpdateView.renderSpinner();
    //await account update;
    let markUp = await accountUpdateView._generateAccMarkup(
      await model.getAccountUpdate()
    );
    accountUpdateView.renderData(markUp);
  } catch (err) {
    accountUpdateView.renderError();
  }
}
const controlStackModal = function (e) {
  e.preventDefault();
  addStackView._toggleWindow();
  ///maybe change btnUploadStack to submit to submit (remove modal class)
};

//-- All EventListeners --\\

btnUpdate.addEventListener('click', async () => {
  await controlGetMetalPrice();
  setTimeout(controlGetAccountUpdate, 2000);
});

async function scrape(url) {
  console.log('scraping started');
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  //optional
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.resourceType() == 'font' || req.resourceType() == 'image') {
      req.abort();
    } else {
      req.continue();
    }
  });
  // end of optional

  await page.goto(url);

  // Waits until the `title` meta element is rendered
  await page.waitForSelector('title');

  const title = await page.title();
  console.info(`The title is: ${title}`);

  const [el] = await page.$x(
    '/html/body/main/div[3]/div/div/div/div/div/div[1]/div/div/div[1]/div/h1/span[2]'
  );
  const txt = await el.getProperty('textContent');
  const rawTxt = await txt.jsonValue();

  console.log({ rawTxt });

  browser.close();
}

//immediately pass controls to Views on startup (subscriber/publisher)
const init = function () {
  chartIt();
  addStackView.addHandlerModal(controlStackModal);

  scrape(
    'https://www.royalmint.com/gold-price/?utm_term=gold%20price&utm_campaign=PRM+-+Invest&utm_source=adwords&utm_medium=ppc&hsa_acc=9288023692&hsa_cam=13386978634&hsa_grp=122100981103&hsa_ad=554536144471&hsa_src=g&hsa_tgt=aud-1255044096217:kwd-17387132&hsa_kw=gold%20price&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw6pOTBhCTARIsAHF23fL_sAJbskxizG3wiCHy1a4esJBgm70tWyJA6IAjTfErqLMDWv36CfMaAk_uEALw_wcB'
  );
};
init();
