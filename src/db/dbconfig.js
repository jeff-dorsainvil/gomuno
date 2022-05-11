const mongoose = require("mongoose");

const { db_url } = require("../../config.json");

module.exports = async function () {
    /**
     * @description - When called this function create a connection with the db and makes
     * the db accessible to other files
     */

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
    };

    await mongoose.connect(db_url, options);
};
