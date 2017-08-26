var friends = require ("../data/friends.js")
module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var content = req.body;
        friends.push(content);
        console.log(content);
        res.json(friends);
    });
}
