const express = require('express');
const path = require('path');

const rootDir = require('../util/path-util');

const storeRouter = express.Router();

storeRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","index.html"));
});

module.exports = storeRouter;