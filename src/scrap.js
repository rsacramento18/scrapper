const puppeteer = require('puppeteer');

getPricesFromJumbo = async (obj) => {
  let prices = [];

  for (x of obj.items) {
    const scrapes = await scrappeWeb(x.url, obj.xpaths)
    prices.push({
      name: x.name,
      price: scrapes.price,
      priceUnit: scrapes.priceUnit,
      image: scrapes.image,
    });
  }

  return prices;
};

getPricesFromPingoDoce = async (obj) => {
  let prices = [];

  for (x of obj.items) {
    const scrapes = await scrappeWeb(x.url, obj.xpaths)
    const priceUnit = Math.abs(scrapes.price.substring(0, scrapes.price.indexOf('€')))/x.qty;

    prices.push({
      name: x.name,
      price: scrapes.price,
      priceUnit: priceUnit + '€',
      image: scrapes.image,
    });
  }

  return prices;
};

getPricesFromContinente = async (obj) => {

  let prices = [];

  for (x of obj.items) {
    const scrapes = await scrappeWeb(x.url, obj.xpaths)
    prices.push({
      name: x.name,
      price: scrapes.price,
      priceUnit: scrapes.priceUnit,
      image: scrapes.image,
    });
  }

  return prices;
};

scrappeWeb = async(url, xpaths) => {
  let scraps = {};

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  console.log(xpaths);

  if(xpaths.price) {
    const price = await page.$x(xpaths.price);
    console.log(price);
    scraps.price = price.getAttribute('innerHTML');
  }

  if(xpaths.priceUnit) {
    const priceUnit = await page.$x(xpaths.priceUnit);
    scraps.priceUnit = priceUnit.getAttribute('innerHTML');
  }

  if(xpaths.image) {
    const image = await page.$x(xpaths.image);
    scraps.image = image.getAttribute('src');
  }

  await browser.close();

  return scraps;
}

module.exports = {
  getPricesFromJumbo,
  getPricesFromPingoDoce,
  getPricesFromContinente,
}
