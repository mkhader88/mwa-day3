const jsonData = require("../data/games.json");

module.exports.getAll= function(req, res) {
    console.log("JSON GET received");
    res.status(200).json(jsonData);
    };
    