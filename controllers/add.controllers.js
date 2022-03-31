module.exports.addNumber= function(req, res) {
    console.log("JSON GET Add number");
    const pathParam = parseInt(req.params.number);
    const queryStr = parseInt(req.query.number);
    res.status(200).json({"Sum":pathParam+queryStr});
    };
    