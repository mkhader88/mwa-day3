const jsonData = require("../data/school.json");

module.exports.getAll= function(req, res) {
    console.log("JSON GET Students");
    res.status(200).json(jsonData);
    };
module.exports.getOne= function(req, res) {
    console.log("JSON GET Student by index");
    const stdIndex = req.params.stdIndex;
    res.status(200).json(jsonData[stdIndex]);
     };
    