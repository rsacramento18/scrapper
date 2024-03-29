const diapers = [
    { 
      supermarket: 'jumbo',
      name: 'Dodot Sensitive 40',
      url: 'https://www.auchan.pt/pt/beleza-higiene-e-bebe/fraldas-e-toalhitas-de-bebe/fraldas-t0-t2-recem-nascido-6-kg/fralda-dodot-sensitive-t1-2-5-kg-44un/3304546.html',
      image: '//*[@id="pdpCarousel-3304546"]/div/div[1]/img',
      qty: 40,
      priceUnit: '//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[5]/div/span',
      price: '//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[7]/div/div/div/span/span/span',
    },
    { 
      supermarket: 'jumbo',
      name: 'Dodot Sensitive 80',
      url: 'https://www.auchan.pt/pt/beleza-higiene-e-bebe/fraldas-e-toalhitas-de-bebe/fraldas-t0-t2-recem-nascido-6-kg/fraldas-dodot-sensitive-t1-2-5kg-80un/3306154.html',
      image: '//*[@id="pdpCarousel-3306154"]/div/div[1]/img',
      qty: 80,
      priceUnit: '//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[5]/div/span',
      price: '//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[7]/div/div/div/span/span/span',
    },
    { 
      supermarket: 'jumbo',
      name: 'Fraldas Chico Ulra T1 Soft 27 un',
      url: 'https://www.auchan.pt/pt/beleza-higiene-e-bebe/fraldas-e-toalhitas-de-bebe/fraldas-t0-t2-recem-nascido-6-kg/fraldas-chicco-ultra-t1-soft-27un/2961790.html',
      image: '//*[@id="pdpCarousel-2961790"]/div/div/img',
      qty: 27,
      priceUnit: '//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[5]/div/span',
      price: '//*[@id="maincontent"]/div[2]/div[1]/div[2]/div/div[7]/div/div/div/span/span/span',
    },
    {
      supermarket: 'pingoDoce',
      name: 'Extra Care PingoDoce Cuida Bebe',
      url: 'https://www.pingodoce.pt/produtos/marca-propria-pingo-doce/cuida-bebe/fraldas-sensitive-extra-care-t1-2-5kg-pingo-doce-cuida-bebe-28-unid/',
      image: '/html/body/div[5]/div[1]/div/div/div/div[2]/div[1]/img',
      qty: 28,
      price: '/html/body/div[5]/div[1]/div/div/div/div[1]/div/div[2]/span',
    },
    {
      supermarket: 'continente',
      name: 'Dodot Sensitive 80',
      url:  'https://www.continente.pt/produto/fraldas-sensitive-2-5kg-t1-dodot-7375114.html',
      image: '//*[@id="slick-slide00"]/img',
      priceUnit: '//*[@id="maincontent"]/div/div/div[2]/div[2]/div[1]/div[3]/div[3]/div[1]/div/div/div[2]/span[1]',
      price: '//*[@id="maincontent"]/div/div/div[2]/div[2]/div[1]/div[3]/div[3]/div[1]/div/div/div[1]/span[1]/span/span[1]',
    },
    {
      supermarket: 'continente',
      name: 'Dodot Sensitive 140',
      url: 'https://www.continente.pt/produto/box-fraldas-sensitive-xxl-2-5kg-t1-dodot-7146854.html',
      image: '//*[@id="slick-slide00"]/img',
      priceUnit: '//*[@id="maincontent"]/div/div/div[2]/div[2]/div[1]/div[4]/div[3]/div[1]/div/div/div[2]/span[1]',
      price: '//*[@id="maincontent"]/div/div/div[2]/div[2]/div[1]/div[4]/div[3]/div[1]/div/div/div[1]/span/span/span[1]',
    },
]

module.exports = {
  diapers
};
