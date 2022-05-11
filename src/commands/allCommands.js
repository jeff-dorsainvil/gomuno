const getDescriptions = require("../helpers/description");
const getEthPrice = require("../helpers/getEthPrice");
const getPrice = require("../helpers/getPrice");
const setPrice = require("../helpers/setPrice");

const commands = {
    DESCRIPTION: {
        name: "description",
        description:
            "This command gives a brief description of what the bot does.",
        handler: async function (interaction) {
            /**
             * @description - This function fires when /description is fired on the client. It sends
             * back a brief description of what Gomuno does to the client.
             * @param {object} interaction - interaction object
             * @returns {void}
             */

            console.log(interaction.options.getMember(interaction.user.id));
            // Sending back the description to the client
            await interaction.reply(
                getDescriptions(interaction.user.username, commandsList)
            );
        },
    },
    SET_MIN_PRICE: {
        name: "set-min-price",
        description: "Sets the lower price.",
        options: {
            type: "Number",
            isRequired: true,
            name: "price",
            description: "The price you want to set as the new min price",
        },
        handler: interaction => setPrice("min", interaction),
    },
    SET_MAX_PRICE: {
        name: "set-max-price",
        description: "This sets the higher price.",
        options: {
            type: "Number",
            isRequired: true,
            name: "price",
            description: "The price you want to set as the new max price",
        },
        handler: interaction => setPrice("max", interaction),
    },
    GET_MIN_PRICE: {
        name: "get-min-price",
        description:
            "This will return the lower price that has been set previously",
        handler: interaction => getPrice("min", interaction),
    },
    GET_MAX_PRICE: {
        name: "get-max-price",
        description:
            "This will return the higher price that has been set previously",
        handler: interaction => getPrice("max", interaction),
    },
    GET_ETH_PRICE: {
        name: "get-eth-price",
        description:
            "This will return the current Ethereum price when requested",
        handler: async function (interaction) {
            const ethPrice = await getEthPrice();
            interaction.reply(
                `👀 | Current ETH price in USD is **$${ethPrice.toFixed(2)}**`
            );
        },
    },
};

// Generating the commads
var commandsList = Object.keys(commands)
    .map((key, index) => {
        return `${index + 1}. /${commands[key].name} - ${
            commands[key].description
        } \n`;
    })
    .join(" ");

module.exports = commands;
