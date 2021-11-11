const scrapper = require('./scrap');
const urls = require('./urls');

module.exports = (app) => {
  app.get("/getprices", ( async (req, res) => {
    const diapers = await scrapper.scrapDiapers(urls.diapers);

    
    res.send(diapers);
  }));
}
