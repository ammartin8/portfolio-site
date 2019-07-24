// Provides Thank You Page upon submitting
// $('confirm').html("<p>Thank you for contacting me!<br>I will be reaching out to you within the next 48 hours and look forward to connecting with you!</p>");
var confirmit = document.querySelector('.confirm');
function confirmationresponse() {
    var div = "";
    div += "<p>Thank you for contacting me!<br>I will be reaching out to you within the next 48 hours and look forward to connecting with you!</p>";
    return div;
};
confirmit.innerHTML = confirmationresponse();


// Hides rest of blog post
$('.hidepost').hide();

// On click shows rest of blog
$('.readmore').click(function() {
    $('.hidepost').show();
    $('.readmore').hide();
});
