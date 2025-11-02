const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');

const favouriteFilePath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {

  static fetchAll(callback) {
    fs.readFile(favouriteFilePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    })
  }

  static addToFavourites(homeId, callback) {
    Favourite.fetchAll(favouriteIds => {
      favouriteIds.push(homeId);
      fs.writeFile(favouriteFilePath, JSON.stringify(favouriteIds), callback);
    });
  }

  static deleteById(homeId, callback) {
    Home.fetchAll(homes => {
      const newHomes = homes.filter(home => home._id !== homeId);
      fs.writeFile(homeFilePath, JSON.stringify(newHomes), error => {
        if (error) {
          callback(error);
          return;
        }
        Favourite.deleteById(homeId, callback);
      });
    })
  }
}