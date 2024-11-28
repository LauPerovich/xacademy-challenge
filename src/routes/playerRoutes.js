const express = require('express');
const playerController = require('../controllers/playerController');
const { createPlayerValidation, updatePlayerValidation } = require('../middleware/validatePlayer');
const router = express.Router(); 
const { validatePlayer, checkValidationResult } = require('../middleware/validatePlayer');

router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.post('/add', validatePlayer, checkValidationResult, playerController.createPlayer);
router.put('/edit/:id', validatePlayer, checkValidationResult, playerController.updatePlayer);

module.exports = router;
