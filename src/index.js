const { Client, Intents } = require("discord.js");

const { bot_token } = require("../config.json");
const handleAlert = require("./helpers/handleAlert");
const interactionCreateHandler = require("./bot/botEvents/interactionCreate");
const ready = require("./bot/botEvents/ready");

// Options for initializing the bot
const option = {
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
};

// Create a new Client instance
const client = new Client(option);

// When the client is ready, run this code (only once)
client.once("ready", ready);

// Send an alert to the client each 5 minutes if one of the conditions set by the user is met
setInterval(() => handleAlert(client), 300000);

// When there's an interaction
client.on("interactionCreate", interactionCreateHandler);

// Login to Discord with client's token
client.login(bot_token);

module.exports = client;
