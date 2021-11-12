const puppeteer = require('puppeteer');

const scrapDiapers = async (arr) => {
  let diapers = [];

  for (let item in arr) {

  // arr.forEach(async (item) =>  {
    const scrap = await scrappeWeb(arr[item]);

    if(arr[item].supermarket === 'jumbo') diapers.push(processDataJumbo(scrap, arr[item]));
    if(arr[item].supermarket === 'pingoDoce') diapers.push(processDataPingoDoce(scrap, arr[item]));
    if(arr[item].supermarket === 'continente') diapers.push(processDataContinente(scrap, arr[item]));

    // if(item >= arr.length - 1) {
    // }
  }

  return diapers;
}

const processDataJumbo = (scrap, item) => {

  let price;
  let priceUnit;

  if (scrap.price) {
    price = scrap.price.replace(/^\s+|\s+$/g, '');
    price = Math.abs(price.substring(0, price.indexOf('€') - 1).replace(',','.'));
  }

  if (scrap.priceUnit) {
    priceUnit = scrap.priceUnit.replace(/^\s+|\s+$/g, '');
    priceUnit = Math.abs(priceUnit.substring(0, priceUnit.indexOf('€') - 1));
  }

  return {
    name: item.name,
    supermarket: item.supermarket,
    price: price ? price : 0,
    priceUnit: priceUnit ? priceUnit : 0,
    image: scrap.image,
  };

};

const processDataPingoDoce = (scrap, item) => {

  let price;
  let priceUnit;

  if( scrap.price ) {
    price = Math.abs(scrap.price.replace(/^\s+|\s+$/g, '').substring(0, scrap.price.indexOf('€')).replace(',', '.'));
    priceUnit = Math.round((price/scrap.qty) * 100) / 100;
  }

  return {
    name: item.name,
    supermarket: item.supermarket,
    price: price ? price : 0,
    priceUnit: priceUnit ? priceUnit : 0,
    image: scrap.image,
  };

};

const processDataContinente = (scrap, item) => {
  let price;
  let priceUnit;

  if(scrap.price){
    price = scrap.price.replace(/^\s+|\s+$/g, '');
    price = Math.abs(price.substring(1, price.length).replace(',','.'));
  }

  if (scrap.priceUnit) {
    priceUnit = scrap.priceUnit.replace(/^\s+|\s+$/g, '');
    priceUnit = Math.abs(priceUnit.substring(1, priceUnit.length).replace(',','.'));
  }

  return {
    name: item.name,
    supermarket: item.supermarket,
    price: price ? price : 0,
    priceUnit: priceUnit ? priceUnit : 0,
    image: scrap.image,
  };
};

const scrappeWeb = async(item) => {
  let scraps = {};

  try {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(item.url);

    if(item.price) {
      const [priceObj] = await page.$x(item.price);
      if (priceObj) {
        const price = await priceObj.getProperty('textContent');
        scraps.price = await price.jsonValue();
      }
    }

    if(item.priceUnit) {
      const [priceUnitObj] = await page.$x(item.priceUnit);
      if (priceUnitObj) {
        const priceUnit = await priceUnitObj.getProperty('textContent');
        scraps.priceUnit = await priceUnit.jsonValue();
      }
    }

    if(item.image) {
      const [imageObj] = await page.$x(item.image);
      if (imageObj) {
        const image = await imageObj.getProperty('src');
        scraps.image = await image.jsonValue();
      }
    }

    await browser.close();

    return scraps;
  }
  catch (e) {
    console.error(e);
  }
}

module.exports = {
  scrapDiapers,
  processDataJumbo,
  processDataPingoDoce,
  processDataContinente,
}
