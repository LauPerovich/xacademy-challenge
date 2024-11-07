const { sequelize } = require('../config/dbConfig');
const Player = require('../models/player');
const { Op } = require('sequelize');
const fs = require('fs');
const { exportToCSV } = require('../utils/csvHelper');

const getAllPlayers = async (req, res) => {
    const { fifa_version, long_name, player_positions, club_name, nationality_name, preferred_foot, download } = req.query;

    const whereConditions = {};
    if (fifa_version) {
        whereConditions.fifa_version = { [Op.like]: `%${fifa_version}%` };
    }
    if (long_name) {
        whereConditions.long_name = { [Op.like]: `%${long_name}%` };
    }
    if (player_positions) {
        whereConditions.player_positions = { [Op.like]: `%${player_positions}%` };
    }
    if (club_name) {
        whereConditions.club_name = { [Op.like]: `%${club_name}%` };
    }
    if (nationality_name) {
        whereConditions.nationality_name = { [Op.like]: `%${nationality_name}%` };
    }
    if (preferred_foot) {
        whereConditions.preferred_foot = { [Op.like]: `%${preferred_foot}%` };
    }

    try {
        if (download === 'true') {
            const players = await Player.findAll({ where: whereConditions });
            const filePath = exportToCSV(players.map(player => player.toJSON()), 'players_list.csv');
            return res.download(filePath, 'players_list.csv', err => {
                if (err) {
                    res.status(500).json({ message: "Error al descargar el archivo CSV", error: err });
                }
                fs.unlinkSync(filePath); 
            });
        } else {
            
            const limit = parseInt(req.query.limit) || 20;
            const offset = parseInt(req.query.offset) || 0;

            const { count, rows } = await Player.findAndCountAll({
                where: whereConditions,
                limit: limit,
                offset: offset
            });

            return res.status(200).json({
                total: count,
                totalPages: Math.ceil(count / limit),
                players: rows
            });
        }

    } catch (error) {
        res.status(500).json({ message: "Error al obtener las jugadoras", error });
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
        player_face_url, long_name, player_positions, club_name, nationality_name, age, 
        height_cm, weight_kg, preferred_foot, pace, shooting, passing, dribbling,
        defending, physic
        } = req.body;
    try {
        const newPlayer = await Player.create({ 
            player_face_url, long_name, player_positions, club_name, nationality_name, age, 
            height_cm, weight_kg, preferred_foot, pace, shooting, passing, dribbling,
            defending, physic
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
        player_face_url, long_name, player_positions, club_name, nationality_name, age, 
        height_cm, weight_kg, preferred_foot, pace, shooting, passing, dribbling,
        defending, physic
    } = req.body;
    try {
        const player = await Player.findByPk(id);
        if (!player) return res.status(404).json({ message: 'Jugadora no encontrada'});

        player.player_face_url = player_face_url;
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
        await player.save();

        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la jugadora', error });
    }
};

module.exports = { getAllPlayers, getPlayerById, createPlayer, updatePlayer };
