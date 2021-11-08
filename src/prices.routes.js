const scrapper = require('./scrap');
const urls = require('./urls');

module.exports = (app) => {
  app.get("/getprices", ( async (req, res) => {
    const prices = {
      jumbo: await scrapper.getPricesFromJumbo(urls.jumbo),
      pingoDoce: await scrapper.getPricesFromPingoDoce(urls.pingoDoce),
      continente: await scrapper.getPricesFromContinente(urls.continente),
    }

    res.send(prices);
  }));
}
