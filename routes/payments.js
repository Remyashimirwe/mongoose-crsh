const express = require('express');
const {Payments} = require('../models/Crpms');
const paymentsControl = express();
paymentsControl.get('/', async (req, res) => {
    const payments =await Payments.find();
    res.json(payments);
})
paymentsControl.post('/', async (req, res) => {
    const payment = await Payments.create(req.body);
    res.json(payment);
})
module.exports = paymentsControl;