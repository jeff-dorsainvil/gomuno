const { SlashCommandBuilder } = require("@discordjs/builders");

function createSC(name, description, options = undefined) {
    /**
     * @description this function creates a slash command
     * @param {string} name - The name of the Slash command
     * @param {string} description - Description of the slash command
     * @param {Object} options - (optional) If the command contains options
     * @returns {SlashCommandBuilder}
     */

    // If we have options
    if (options) {
        // If the type of the option is Number
        if (options.type === "Number") {
            return new SlashCommandBuilder()
                .setName(name)
                .setDescription(description)
                .addNumberOption(option =>
                    option
                        .setName(options.name)
                        .setDescription(options.description)
                        .setRequired(options.isRequired)
                )
                .toJSON();
        }
    }

    return new SlashCommandBuilder().setName(name).setDescription(description);
}

module.exports = {
    createSC,
};
