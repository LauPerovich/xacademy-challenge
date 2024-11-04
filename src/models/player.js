const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fifa_version: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fifa_update: {
        type: DataTypes.STRING,
        allowNull: true
    },
    player_face_url: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    long_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    player_positions: {
        type: DataTypes.STRING,
        allowNull: false
    },
    club_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nationality_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    height_cm: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weight_kg: {
    type: DataTypes.INTEGER,
    allowNull: true
    },
    preferred_foot: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pace: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    shooting: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    passing: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dribbling: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    defending: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    physic: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'players',
    freezeTableName: true,
    timestamps: false
});

module.exports = Player;