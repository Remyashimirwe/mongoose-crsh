const express = require('express');
const {ServiceRecords} = require('../models/Crpms');
const ServiceRecordControl = express();
ServiceRecordControl.get('/', async (req, res) => {
    const serviceRecords = await ServiceRecords.find();
    res.json(serviceRecords);
});
ServiceRecordControl.post('/', async (req, res) => {
    const serviceRecord = await ServiceRecords.create(req.body);
    res.json(serviceRecord);
});
module.exports = ServiceRecordControl;