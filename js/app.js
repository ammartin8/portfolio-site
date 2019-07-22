var confirmit = document.querySelector('.confirm');
function confirmationresponse() {
    var div = "";
    div += "<p>Thank you for contacting me!<br>I will be reaching out to you within the next 48 hours and look forward to connecting with you!</p>";
    return div;
};
confirmit.innerHTML = confirmationresponse();



$('.hidepost').hide();

