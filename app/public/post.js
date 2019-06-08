// bootstrap validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // submit survey results
                    event.preventDefault();

                    var name = $("#your-name").val().trim();
                    var photoLink = $("#photo-link").val().trim();

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

                        console.log("making push request");

                        // push newFriend data
                        $.post("/api/friends", newFriend, function (data) {
                            // receive the closestMatch and its info
                            console.log(data);

                            var matchName = data.name;
                            var matchPhoto = data.photo;



                            // open modal
                            // show best match - name and picture

                        });
                    // }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();