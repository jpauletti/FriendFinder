// bootstrap validation & post request
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

                            // display match name and image (although currently hidden)
                            $("#match-name").text(matchName);
                            $("#match-image").attr("src", matchPhoto);
                            // if user didn't use a real image

                            $("#match-image").on("error", function () {
                                $(this).attr("src", "./assets/images/default-user-image.png");
                            })

                            // open modal for best match
                            modal.css("display", "block");

                        });
                    // }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();



// modal open/close
// Get the modal
var modal = $("#myModal");

// Get the button that opens the modal
var btn = $('button[type="submit"');

// Get the <span> element that closes the modal
var span = $(".close");

// When the user clicks on <span> (x), close the modal
span.on("click", function () {
    modal.css("display", "none");
})

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function (event) {
    var modal = $("#myModal");
    if (event.target == modal) {
        modal.css("display", "none");
    }
})