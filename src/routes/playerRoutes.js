const express = require('express');
const playerController = require('../controllers/playerController');
const { createPlayerValidation, updatePlayerValidation } = require('../middleware/validatePlayer');
const router = express.Router(); 
const { validatePlayer, checkValidationResult } = require('../middleware/validatePlayer');

router.get('/', playerController.getAllPlayers);
// router.post('/', createPlayerValidation, playerController.createPlayer);
router.get('/:id', playerController.getPlayerById);
// router.put('/:id', updatePlayerValidation, playerController.updatePlayer);
router.post('/players', validatePlayer, checkValidationResult, playerController.createPlayer);
router.put('/players/:id', validatePlayer, checkValidationResult, playerController.updatePlayer);

module.exports = router;
