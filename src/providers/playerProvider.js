// const { updatePlayer } = require('../controllers/playerController');
const { Player } = require('../models');
const { Op } = require('sequelize');

const getAllPlayers = async (options) => {
    try {
        // console.log("Intentando obtener jugadores...");
        const players = await Player.findAll(
            // { where: { [Op.or]:options } }
        );
        // if (!players) return res.status(404).json({ message: 'No se encontraron jugadoras con ese criterio de búsqueda'});
        res.status(200).json(players);
        } catch (error) {
            throw error;
        // console.error("Error al obtener los jugadores:", error);
        // res.status(500).json({ message: "Error al obtener los jugadores" });
        }
}

const getPlayer = async (id) => {
    // const { id } = req.params;
    try {
        const player = await Player.findByPk(id);
        if (!player) return res.status(404).json({ message: 'Jugadora no encontrada'});
        res.status(200).json(player);
    } catch (error) {
        throw error;
        // res.status(500).json({ message: 'Error al obtener a la jugadora', error });
    }
}

const createPlayer = async (playerOptions) => {
    try {
        const newPlayer = await Player.create(playerOptions);
        return newPlayer;
        // res.status(201).json(newPlayer);
    } catch (error) {
        throw error;
    }
}

const updatePlayer = async (playerId, playerOptions) => {
    try {
        await getPlayer(playerId);
        const [numRowsUpdated] = await Player.updatePlayer(playerOptions, { 
            where: { id: playerId }
        });
        console.log(`Se actualizaron ${numRowsUpdated} en la base de datos`);
        return Player.findByPk(playerId);
        // res.status(201).json(newPlayer);
    } catch (error) {
        throw error;
    }
}

module.exports = { getAllPlayers, getPlayer, createPlayer, updatePlayer };