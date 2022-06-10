const dbSearch = require("../db/generics/find");
const ServerModel = require("../db/schemas/ServerSchema");

module.exports = async function (whichPrice, interaction) {
    /**
     * @description This function gets the required price from the database and sends
     *  it to the client
     * @param {String} whichPrice - This can be either min for minimum price or max for maximum price
     * @param {Object} interaction
     * @returns {undefined}
     */

    switch (whichPrice) {
        case "min":
            try {
                const serverData = await dbSearch(ServerModel, {
                    _id: interaction.guild.id,
                });

                interaction.reply(
                    `The current min price is: $${serverData.min_price}`
                );
            } catch (error) {
                console.log(error);
            }

            break;
        case "max":
            try {
                const serverData = await dbSearch(ServerModel, {
                    _id: interaction.guild.id,
                });

                interaction.reply(
                    `The current max price is: $${serverData.max_price}`
                );
            } catch (error) {
                console.log(error);
            }

            break;
    }
};
