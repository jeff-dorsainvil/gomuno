const { botStatus } = require("../../helpers/constants");
const commands = require("../botCommands/allCommands");

module.exports = async function (interaction) {
    /**
     * @description This function takes an interaction object as parameter then it checks if the interaction is a command. If it's a command it performs some actions if it is not a command it
     * simply returns nothing
     *
     * @param {Object} interaction - interaction object
     * @returns {undefined} nothing is returned
     */

    // If the interaction isn't a command
    if (!interaction.isCommand()) return;

    // If the Bot is off for maintenance
    if (botStatus.OFF_FOR_MAINTENANCE)
        interaction.reply("I am not active currently, I'll be back soon :)");

    const { commandName } = interaction;
    // Transforming the command so it can match with the uppercase command in the codebase
    const command = commandName.replaceAll("-", "_").toUpperCase();

    // Firing the appopriate function based on the command
    commands[command].handler(interaction);
};
