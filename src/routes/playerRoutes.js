const express = require('express');
const playerController = require('../controllers/playerController');
const router = express.Router(); 

router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.post('/', playerController.createPlayer);
router.put('/:id', playerController.updatePlayer);


module.exports = router;
