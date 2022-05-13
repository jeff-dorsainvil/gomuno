const axios = require("axios");
const { mesari_api_key } = require("../../config.json");

module.exports = async function () {
    /**
     * @description This function makes an api call to get the current price of ETH and returns it
     */

    try {
        const options = {
            method: "GET",
            url: "https://data.messari.io/api/v1/assets/eth/metrics/market-data",
            headers: {
                "x-messari-api-key": mesari_api_key,
            },
        };

        const response = await axios.request(options);

        currentPrice = response.data.data.market_data.price_usd;

        return currentPrice;
    } catch (error) {
        console.log(error);
    }
};
