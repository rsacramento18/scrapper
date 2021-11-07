const scrapper = require('./scrap');
const urls = require('./urls');

module.exports = (app) => {
  app.get("/getprices", ((req, res) => {
    const prices = {
      jumbo: [
        {
          name: 'Dodot Sensitive 44',
          price: scrapper.getPricesFromJumbo(urls.jumbo.dodotSensitive44),
        },
        {
          name: 'Dodot Sensitive 80',
          price: scrapper.getPricesFromJumbo(urls.jumbo.dodotSensitive80),
        },
      ],
      pingoDoce: [
        {
          name: 'Sensitive Extra Care',
          price: scrapper.getPricesFromJumbo(urls.jumbo.dodotSensitive80),
        },
      ],
    }

  }));
}
