$("#submitSurvey").on("click", function (event) {
    event.preventDefault();

    var name = $("#your-name").val().trim();
    var photoLink = $("#photo-link").val().trim();

    $('input[name=radioName]:checked', '#myForm').val()
    $("#q1 input[name=questionOne]:checked").val();


    var scores = [
        $("#q1 input[name=questionOne]:checked").val(),
        $("#q2 input[name=questionTwo]:checked").val(),
        $("#q3 input[name=questionThree]:checked").val(),
        $("#q4 input[name=questionFour]:checked").val(),
        $("#q5 input[name=questionFive]:checked").val(),
        $("#q6 input[name=questionSix]:checked").val(),
        $("#q7 input[name=questionSeven]:checked").val(),
        $("#q8 input[name=questionEight]:checked").val(),
        $("#q9 input[name=questionNine]:checked").val(),
        $("#q10 input[name=questionTen]:checked").val()
    ];

    var newFriend = {
        name: name,
        photo: photoLink,
        scores: scores
    }

    console.log(newFriend);

    // $.post("/api/friends", newFriend, function (data) {
    //     // open modal
    //         // show best match - name and picture

    // });
})