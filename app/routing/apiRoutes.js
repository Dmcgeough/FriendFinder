var friends = require ("../data/friends.js")
module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var content = req.body;
        res.json(content);
    })

    app.get("/api/david", function(req, res) {
        res.send("David is the best guy ever");
    });
}
