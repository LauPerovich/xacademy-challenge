const { check, validationResult } = require('express-validator');

const validatePlayer = [
    check('player_face_url').optional().isURL().withMessage('La foto debe ser una URL'),
    check('long_name').notEmpty().withMessage('El nombre de la jugadora es un campo requerido'),
    check('player_positions').notEmpty().withMessage('La posición de la jugadora es un campo requerido'),
    check('age').isInt({ min: 1 }).withMessage('La edad debe ser un número positivo'),
    check('club_name').optional(),
    check('nationality_name').optional(),
    check('age').notEmpty().isInt({ min: 1, max: 120 }).withMessage('La edad debe ser un número positivo'),
    check('height_cm').optional().isInt().withMessage('Ingresa la altura en cm'),
    check('wight_kg').optional().isInt(),
    check('preferred_foot').optional(),
    check('pace').isInt({ min: 1, max: 100 }),
    check('shooting').isInt({ min: 1, max: 100 }),
    check('passing').isInt({ min: 1, max: 100 }),
    check('dribbling').isInt({ min: 1, max: 100 }),
    check('defending').isInt({ min: 1, max: 100 }),
    check('physic').isInt({ min: 1, max: 100 })
];

const checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validatePlayer, checkValidationResult };