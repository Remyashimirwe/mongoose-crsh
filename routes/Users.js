const express = require('express');
const {User} = require('../models/Crpms');
const UserRoutes = express();
UserRoutes.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});
UserRoutes.post('/', async (req,res)=>{
    const Users = await User.create(req.body);
    res.json(Users);
});
module.exports = UserRoutes;