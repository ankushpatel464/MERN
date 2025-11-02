const express = require('express');
const path = require('path');

const rootDir = require('../util/path-util');

const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","add-home.html"));
});

const registeredHomes = [];

hostRouter.post("/add-home",(req,res,next)=>{
    registeredHomes.push(req.body);
    res.render("home-added", {pageTitle: 'Home Hosted'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;