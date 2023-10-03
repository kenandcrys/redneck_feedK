// DO NOT CHANGE THIS FILE
const express = require('express')
// const { checkSchemeId, validateScheme, validateStep } = require('../Middleware/cattle-middleware')


const router = express.Router()


const cm = require('../models/Equine-model')

router.get('/', async (_req, res, next) => {

    try {
        const horses = await cm.getAll();
        
        res.status(200).json(horses);
    } catch(err) {
        next(err);
    }

})


module.exports = router
