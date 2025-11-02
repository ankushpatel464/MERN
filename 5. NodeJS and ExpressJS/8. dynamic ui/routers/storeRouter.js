const express = require('express');
const path = require('path');

const rootDir = require('../util/path-util');
const { registeredHomes } = require("./hostRouter");

const storeRouter = express.Router();

storeRouter.get("/",(req,res,next)=>{
    console.log(registeredHomes);
    res.render('index',{homes:registeredHomes,pageTitle:'Our AirBNB'});
});

module.exports = storeRouter;