// The commands the users will have access to from the client
const commandNames = {
    DESCRIPTION: "description",
    SET_MIN_PRICE: "set-min-price",
    SET_MAX_PRICE: "set-max-price",
    GET_MIN_PRICE: "get-min-price",
    GET_MAX_PRICE: "get-max-price",
    GET_ETH_PRICE: "get-eth-price",
};

// Innactive commands
const innactiveCommands = [];

// Bot status
const botStatus = {
    OFF_FOR_MAINTENANCE: false,
};

module.exports = { innactiveCommands, botStatus, commandNames };
