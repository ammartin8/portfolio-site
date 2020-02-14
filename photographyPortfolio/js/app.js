$('.confirm').html('<p>Thank you for contacting me!<br>I will be reaching out to you within the next 48 hours and look forward to connecting with you!</p>');

// Hides rest of blog post
$('.hidepost').hide();

// On click shows rest of blog
$('.readmore').click(function () {
  $('.hidepost').fadeIn(2000).slideDown();
  $('.readmore').hide();
});
