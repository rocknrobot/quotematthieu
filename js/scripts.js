function getQuote() {
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
      $('#title').text('- ' + a[0].title);
      $('#content').html(a[0].content);
      $("#container").fadeIn(1000);
    });
};

function clickNewQuote() {
	$("#container").fadeOut(1000, getQuote);
};

$(document).ready(function(){
  $("#container").hide();
  getQuote();
  $( "#update-quote" ).click(clickNewQuote);
});