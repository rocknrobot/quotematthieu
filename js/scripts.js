function getQuote() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
      $('#title').text('- ' + a[0].title);
      $('#content').html(a[0].content);
    });
};

$(document).ready(function(){
  getQuote();
  $( "#update-quote" ).click(getQuote);
});