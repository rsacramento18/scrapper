const scrapper = require('./scrap');
const urls = require('./urls');

module.exports = (app) => {
  app.get("/getprices", ( async (req, res) => {
    const prices = [];

    prices.push( await scrapper.getPricesFromJumbo(urls.jumbo));
    prices.push( await scrapper.getPricesFromPingoDoce(urls.pingoDoce));
    prices.push( await scrapper.getPricesFromContinente(urls.continente));

    const merged = [].concat.apply([], prices);
    
    res.send(merged);
  }));
}
