const axios = require("axios");
const cheerio = require("cheerio");

const options = {
  method: 'GET',
  url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/search',
  params: {string: 'ethereum', time_utc_offset: '28800', lang_ID: '1'},
  headers: {
    'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
    'X-RapidAPI-Key': '0f478b5dd2mshced5f28c9d4a08ap108a85jsn8c51e4a41012'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.data);
}).catch(function (error) {
	console.error(error);
});