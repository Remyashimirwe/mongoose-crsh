const express = require('express');
const {Cars} = require('../models/Crpms');
const CarsControl = express();
CarsControl.get('/', async (req, res)=> {
    const cars =await Cars.find();
    res.json(cars);
});
CarsControl.post('/', async (req, res) => {
    const car = await Cars.create(req.body);
    res.json(car);
});
module.exports = CarsControl;