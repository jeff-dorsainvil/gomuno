const mongoose = require("mongoose");

// Creating a new Schema for managing servers
const ServersSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    server_name: {
        type: String,
        required: true,
    },
    min_price: Number,
    max_price: Number,
});

module.exports = mongoose.model("servers", ServersSchema);
