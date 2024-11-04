const Player = require('../models/player');

const getAllPlayers = async (req, res) => {
    try {
        console.log("Intentando obtener jugadores...");
        const players = await Player.findAll();
        res.status(200).json(players);
    } catch (error) {
        console.error("Error al obtener las jugadoras:", error);
        res.status(500).json({ message: "Error al obtener las jugadoras" });
    }
};

const getPlayerById = async (req, res) => {
    const { id } = req.params;
    try {
        const player = await Player.findByPk(id);
        if (!player) return res.status(404).json({ message: 'Jugadora no encontrada'});
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener a la jugadora', error });
    }
};

const createPlayer = async (req, res) => {
    const { 
        long_name, player_positions, club_name, nationality_name, age, 
        height_cm, weight_kg, preferred_foot, pace, shooting, passing, dribbling,
        defending, physic, player_traits 
        } = req.body;
    try {
        const newPlayer = await Player.create({ 
            long_name, player_positions, club_name, nationality_name, age, 
            height_cm, weight_kg, preferred_foot, pace, shooting, passing, dribbling,
            defending, physic, player_traits
        });
        res.status(201).json(newPlayer);
    } catch (error) {
        console.error('Error al crear la jugadora:', error);
        res.status(400).json({
            message: 'Error al crear la jugadora',
            error: error.errors || error.message,
        });
    }
};

const updatePlayer = async (req, res) => {
    const { id } = req.params;
    const { 
        long_name, player_positions, club_name, nationality_name, age, 
        height_cm, weight_kg, preferred_foot, pace, shooting, passing, dribbling,
        defending, physic, player_traits
    } = req.body;
    try {
        const player = await Player.findByPk(id);
        if (!player) return res.status(404).json({ message: 'Jugadora no encontrada'});

        player.long_name = long_name;
        player.player_positions = player_positions;
        player.club_name = club_name;
        player.nationality_name = nationality_name;
        player.age = age;
        player.height_cm = height_cm;
        player.weight_kg = weight_kg;
        player.preferred_foot = preferred_foot;
        player.pace = pace;
        player.shooting = shooting;
        player.passing = passing;
        player.dribbling = dribbling;
        player.defending = defending;
        player.physic = physic;
        player.player_traits = player_traits;
        await player.save();

        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la jugadora', error });
    }
};

module.exports = { getAllPlayers, getPlayerById, createPlayer, updatePlayer };
