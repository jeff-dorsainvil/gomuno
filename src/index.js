const { Client, Intents } = require("discord.js");

const { bot_token } = require("../config.json");
const mongo = require("./db/dbconfig");
const handleAlert = require("./helpers/handleAlert");
const interactionCreateHandler = require("./events/interactionCreate");

const option = {
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
};

// Create a new Client instance
const client = new Client(option);

// When the client is ready, run this code (only once)
client.once("ready", async () => {
    console.log("Ready...");

    // Open a DB connection when the bot is online
    mongo().catch(error => console.log(error));
});

// Checking if we should alert the client of the current price of ETH within 5 minutes interval
setInterval(() => handleAlert(client), 300000);

// When there's an interaction from the client
client.on("interactionCreate", interactionCreateHandler);

// Login to Discord with client's token
client.login(bot_token);

module.exports = client;
