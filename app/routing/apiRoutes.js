var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // incoming survey results - save user's answers & info
        var newFriend = req.body;
        friends.push(newFriend);

        // compatibility logic here
        // Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
        // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
        //    * Example:
        //    * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
        //    * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
        //    * Total Difference: **2 + 1 + 2 =** **_5_**
        // Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
        // The closest match will be the user with the least amount of difference.

        var totalDifference = 0;
        var friendDifference = [];
        for (i = 0; i < (friends.length - 1); i++) {
            // loop through each friend in list
            // reset totalDifference
            totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                // loop through each score for newFriend / friends[i]
                var newNumber = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
                console.log("newFriend score: " + newFriend.scores[j]);
                console.log("friend " + i + " score: " + friends[i].scores[j]);

                console.log(newNumber);

                // add difference to totalDifference
                totalDifference += newNumber;
            }
            // push that friend's totalDifference to an array to save it
            friendDifference.push(totalDifference);
        }


        console.log(friendDifference);

        // loop through friendDifference to find the lowest number
        var lowestNumber = Math.min.apply(null, friendDifference);
        var closestIndex = friendDifference.indexOf(lowestNumber);

        var closestMatch = friends[closestIndex];
        console.log(closestMatch);
        // for (var i = 0; i < (friendDifference.length); i++) {
        //     Math.min.apply(null, friendDifference)
        // }

        res.json(true); // why is this necessary?

    });
}