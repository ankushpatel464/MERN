const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const {hostRouter} = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter')
const rootDir = require('./util/path-util');
const errorController = require('./controllers/errorController');

const app = express();
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootDir,"public")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(storeRouter);
app.use("/host",hostRouter);

app.use(errorController.get404);

const mongoose = require('mongoose');

const PORT = 3001;
const MONGO_DB_URL = "mongodb+srv://root:root@airbnb.yox4mue.mongodb.net/?retryWrites=true&w=majority&appName=Airbnb";
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT,() => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});