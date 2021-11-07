const puppeteer = require('puppeteer');

getPricesFromJumbo =  async (url, xpath) => {

  let price = scrappeWeb(url, xpath);
  price = price.split(' ');

  return price[0];
};

getPricesFromPingoDoce =  async (url, xpath) => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = page.$x('//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[5]/div/span');

  let price = await el.getPropperty('innerHTML');
  price = price.split(' ');

  return price[0];
};

scrappeWeb = async(url, xpath) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = page.$x('//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[5]/div/span');

  let price = await el.getPropperty('innerHTML');
  return price;
}

module.exports = {
  getPricesFromJumbo,
}
