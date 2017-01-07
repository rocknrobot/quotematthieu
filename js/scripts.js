var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function changeColors() {
	var color = Math.floor(Math.random() * colors.length);
  $("#update-quote").animate({
    backgroundColor: colors[color]
  }, 500);
  $(".big").animate({
  	color: colors[color]
  }, 500);
}

function getQuote() {
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
    $('#title').text('- ' + a[0].title);
    $('#content').html(a[0].content);
    $("#container").fadeIn(500);
  });
};

function clickNewQuote() {
	$("#container").fadeOut(500, getQuote);
	changeColors();
};

$(document).ready(function(){
  $("#container").hide();
  getQuote();
  $( "#update-quote" ).click(clickNewQuote);
});