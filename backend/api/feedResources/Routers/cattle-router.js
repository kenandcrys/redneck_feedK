// DO NOT CHANGE THIS FILE
const express = require('express')
const router = express.Router()
const cm = require('../models/cattle-model')

router.get('/', async (_req, res, next) => {

    try {
        const equine = await cm.getAll();
        res.status(200).json(equine);
    } catch(err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {

    try {
        
        const id = req.params.id;
        const cattleById = await cm.getById(id);

        if(cattleById){
            res.status(200).json(cattleById);
        } else {
            res.json({
                status: 404,
                message: "Id not found"
            })
        }
    } catch (err) {
        next(err);
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const { name, description, pricePerBag, pricePer20, pricePer40, url } = req.body;

        const result = await cm.updateById(id, { name, description, pricePerBag, pricePer20, pricePer40, url });

        if (result > 0) {
            res.status(204).json({
                message: "Updated successfully",
            });
        } else {
        res.json({
            status : 400,
            message: "bad Request - Invalid data provided"
        })
        }
    } catch (err) {
        next(err);
    }
});


router.post("/", async (req, res, next) => {
    try {
        const { name, description, pricePerBag, pricePer20, pricePer40, url } = req.body;

        if (!name || !pricePerBag || !pricePer20 || !pricePer40 || !url) {
            return res.status(400).json({ error: "Missing required data" });
        }

        const newResourceId = await cm.create(name, description, pricePerBag, pricePer20, pricePer40, url);
        const newResource = await cm.getById(newResourceId);

        if (newResource) {
            res.status(201).json(newResource);
        } else {
            return res.status(500).json({ error: "Failed to create the resource" });
        }
    } catch (err) {
        next(err);
    }
});



router.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await cm.deleteById(id);

        if (result > 0) {
            res.json({
                status: 204,
                message: "Delete Success"
            });
        } else {
          res.json({
            status: 404,
            message: "Item not found"
          })
        }
    } catch (err) {
        next(err);
    }
});



module.exports = router
