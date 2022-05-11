const ServerSchema = require("../db/schemas/ServerSchema");
const getEthPrice = require("./getEthPrice");
const { server_id, target_channel } = require("../../config.json");

module.exports = async function (client) {
    /**
     * @description This function handles the alerts for eth. it gets the min, the max price from
     * the db and compares them to the current price of ETH. If the current price goes lower
     * or higher than the min or the max price we notify the client.
     * @param {Object} client -
     */
    try {
        const ethPrice = await getEthPrice();
        const fixedEthPrice = Math.trunc(Number(ethPrice));

        const { min_price, max_price } = await ServerSchema.findOne({
            _id: server_id,
        });

        const channel = await client.channels.cache.get(target_channel);

        // If the current price is lower or equals to the db min_price
        if (fixedEthPrice <= min_price) {
            await channel.send(
                `📣 | Eth reached your min price of $${min_price} and worth $${Number(
                    ethPrice
                ).toFixed(2)} now`
            );
        } else if (fixedEthPrice >= max_price) {
            await channel.send(
                `📣 | Eth reached your maximum price of $${max_price} and worth $${Number(
                    ethPrice
                ).toFixed(2)} now`
            );
        }
    } catch (e) {
        console.log(e);
    }
};
