const puppeteer = require('puppeteer');

getPricesFromJumbo = async (obj) => {
  let prices = [];

  for (x of obj.items) {
    obj.xpaths.image = x.image;
    const scrapes = await scrappeWeb(x.url, obj.xpaths)

    let price = scrapes.price.replace(/^\s+|\s+$/g, '');
    price = Math.abs(price.substring(0, price.indexOf('€') - 1).replace(',','.'));

    let priceUnit = scrapes.priceUnit.replace(/^\s+|\s+$/g, '');
    priceUnit = Math.abs(priceUnit.substring(0, priceUnit.indexOf('€') - 1));

    prices.push({
      name: x.name,
      supermarket: 'Jumbo',
      price: price,
      priceUnit: priceUnit,
      image: scrapes.image,
    });
  }

  return prices;
};

getPricesFromPingoDoce = async (obj) => {
  let prices = [];

  for (x of obj.items) {
    obj.xpaths.image = x.image;
    const scrapes = await scrappeWeb(x.url, obj.xpaths)
    const price = Math.abs(scrapes.price.replace(/^\s+|\s+$/g, '').substring(0, scrapes.price.indexOf('€')).replace(',', '.'));
    const priceUnit = Math.round((price/x.qty) * 100) / 100;

    prices.push({
      name: x.name,
      supermarket: 'Pingo Doce',
      price: price,
      priceUnit: priceUnit,
      image: scrapes.image,
    });
  }

  return prices;
};

getPricesFromContinente = async (obj) => {

  let prices = [];

  for (x of obj.items) {
    obj.xpaths.image = x.image;
    const scrapes = await scrappeWeb(x.url, obj.xpaths)
    let price = scrapes.price.replace(/^\s+|\s+$/g, '');
    price = Math.abs(price.substring(1, price.length).replace(',','.'));

    let priceUnit = scrapes.priceUnit.replace(/^\s+|\s+$/g, '');
    priceUnit = Math.abs(priceUnit.substring(1, priceUnit.length).replace(',','.'));


    prices.push({
      name: x.name,
      supermarket: 'Continente',
      price: price,
      priceUnit: priceUnit,
      image: scrapes.image,
    });
  }

  return prices;
};

scrappeWeb = async(url, xpaths) => {
  let scraps = {};

  try {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    console.log(url);
    console.log(xpaths);

    if(xpaths.price) {
      const [priceObj] = await page.$x(xpaths.price);
      const price = await priceObj.getProperty('textContent');
      scraps.price = await price.jsonValue();
    }

    if(xpaths.priceUnit) {
      const [priceUnitObj] = await page.$x(xpaths.priceUnit);
      const priceUnit = await priceUnitObj.getProperty('textContent');
      scraps.priceUnit = await priceUnit.jsonValue();
    }

    if(xpaths.image) {
      const [imageObj] = await page.$x(xpaths.image);
      const image = await imageObj.getProperty('src');
      scraps.image = await image.jsonValue();
    }
  

    await browser.close();

    return scraps;
  }
  catch (e) {
    console.error(e);
  }
}

module.exports = {
  getPricesFromJumbo,
  getPricesFromPingoDoce,
  getPricesFromContinente,
}
