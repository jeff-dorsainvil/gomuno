module.exports = function (username, commandsList) {
    /**
     * @description - This function returns the available commands
     * @param {string} username - The name of the user that fired the command on the client
     * @returns {string} - The available commands
     */

    // Gomuno description
    const botDescription = `**Description:** \n Hey  ${username} 🤠, \n my name is Gomuno I keep track of the price of Ethereum and let you set a minimum and a maximum price to get notified when the price of ETH hit the minimum or the maximum price that you set. \n\n **Available commands: ** \n _ ${commandsList}_`;

    return botDescription;
};
