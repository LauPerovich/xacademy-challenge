const playerProvider = require('../providers/playerProvider');

const getAllPlayers = async (options) => {
    return await playerProvider.getAllPlayers(options);
}

const getPlayer = async (id) => {
    return await playerProvider.getPlayer(id);
}

const createPlayer = async (player) => {
    return await playerProvider.createPlayer(player);
}

const updatePlayer = async (id, player) => {
    return await playerProvider.updatePlayer(id, player);
}

module.exports = { getAllPlayers, getPlayer, createPlayer, updatePlayer };