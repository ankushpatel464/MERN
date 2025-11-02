const express = require('express');
const path = require('path');

const rootDir = require('../util/path-util');

const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","add-home.html"));
});

hostRouter.post("/add-home",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","home-added.html"));
});

module.exports = hostRouter;