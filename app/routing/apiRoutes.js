var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // incoming survey results - save user's answers & info
        var newFriend = req.body;
        // add them to our data - friends array
        friends.push(newFriend);

        var totalDifference = 0;
        var friendDifference = [];
        for (i = 0; i < (friends.length - 1); i++) {
            // loop through each friend in list
            // reset totalDifference each time
            totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                // loop through each score to compare newFriend & friends[i]
                var newNumber = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));

                // add difference to totalDifference
                totalDifference += newNumber;
            }
            // push that friend's final totalDifference to an array to save it
            friendDifference.push(totalDifference);
        }

        // find the lowest number in friendDifference array
        var lowestNumber = Math.min.apply(null, friendDifference);
        // get index of that closest number (just use first one if there is more than one match)
        var closestIndex = friendDifference.indexOf(lowestNumber);
        // set closest match
        var closestMatch = friends[closestIndex];

        // send back the closestMatch and its info
        res.json(closestMatch);

    });
}