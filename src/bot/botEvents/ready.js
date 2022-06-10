const mongo = require("../../db/dbconfig");

module.exports = async () => {
    /**
     * @description - code to execute when the bot is ready on the client. (it only runs once)
     */

    console.log("Ready...");

    // Open a DB connection when the bot is online
    mongo().catch(error => console.log(error));
};
