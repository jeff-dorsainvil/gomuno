const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const commands = require("./allCommands");
const { createSC } = require("../helpers/createSlashCommand");
const { client_id, server_id, bot_token } = require("../../config.json");

// module.exports =
(async function () {
    /**
     * @description This function publish the commands and make them available to the clients
     */

    // Generating a SlashCommand for each command in the commands array
    const keys = Object.keys(commands);
    const newCommands = [
        ...keys.map(key => {
            const obj = commands[key];
            return createSC(
                obj.name,
                obj.description,
                obj.options || undefined
            );
        }),
    ];

    const rest = new REST({ version: "9" }).setToken(bot_token);
    const body = { body: newCommands };

    // Uploading the commands to the Guilds
    await rest
        .put(Routes.applicationGuildCommands(client_id, server_id), body)
        .then(() => console.log("Commands registered!"))
        .catch(error => console.error(error.rawError));
})();
