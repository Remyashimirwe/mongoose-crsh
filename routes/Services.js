const express = require('express');
const {Services} = require('../models/Crpms');
const ServiceControl = express();
ServiceControl.get('/', async (req, res) => {
    const services = await Services.find();
    res.json(services);
});
ServiceControl.post('/', async (req, res) => {
    const service = await Services.create(req.body);
    res.json(service);
});
module.exports = ServiceControl;