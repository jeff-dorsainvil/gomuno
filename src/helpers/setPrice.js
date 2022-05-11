const ServerModel = require("../db/schemas/ServerSchema");
const findAndUpdate = require("../db/generics/findAndUpdate");

module.exports = async function (whichPrice, interaction) {
    /**
     * @description this function set the min or the max price for the user
     * @param {String} whichPrice - This can be two values min for minimum price and max for maximum
     * @param {Object} interaction - Interaction
     */

    try {
        // Getting the price sent from the client
        const price = interaction.options.getNumber("price");

        const userName = interaction.user.username;
        const serverId = interaction.guild.id;
        const serverName = interaction.guild.name;

        switch (whichPrice) {
            case "min":
                // Getting the info for the servers the user has sent the command from
                var server = await ServerModel.findById(interaction.guild.id);
                if (!server) {
                    /* If we couldn't find the server's info from the database we create a new
                     * document associated to the server */

                    const data = {
                        _id: serverId,
                        server_name: serverName,
                        min_price: price,
                        max_price: 0,
                    };

                    await ServerModel.create(data);

                    interaction.reply(
                        `✅ | ${userName} Your minimum price has been set to ${price} `
                    );
                } else {
                    /**
                     * If we found the server's info in the db we simply update the min price for the
                     * user that initialized the command from the client
                     */

                    const data = {
                        min_price: price,
                    };

                    findAndUpdate(ServerModel, serverId, data);

                    await interaction.reply(
                        `✅ | ${userName} Your minimum price has been set to ${price} ✅`
                    );
                }
                break;
            case "max":
                // Getting the info for the servers the user has sent the command from
                var server = await ServerModel.findById(interaction.guild.id);
                if (!server) {
                    /* If we couldn't find the server's info from the database we create a new
                     * document associated to the server and we set the max price for the user */

                    const data = {
                        _id: serverId,
                        server_name: serverName,
                        min_price: 0,
                        max_price: price,
                    };

                    await ServerModel.create(data);

                    interaction.reply(
                        `✅ | ${userName} Your maximum price has been set to ${price} ✅`
                    );
                } else {
                    /**
                     * If we found the server's info in the db we simply update the max price for the
                     * user that initialized the command from the client
                     */

                    const data = {
                        max_price: price,
                    };

                    findAndUpdate(ServerModel, serverId, data);

                    await interaction.reply(
                        `✅ | ${userName} Your maximum price has been set to ${price} ✅`
                    );
                }
                break;
        }
    } catch (e) {
        console.log(e);
    }
};
