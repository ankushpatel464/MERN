const express = require('express');
const path = require('path');

const rootDir = require('../util/path-util');

const hostRouter = express.Router();
const hostController = require('./../controllers/hostController');

hostRouter.get("/add-home", hostController.getAddHome);


hostRouter.post("/add-home", hostController.postAddHome);

exports.hostRouter = hostRouter;