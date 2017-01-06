$(document).ready(function(){
  $( "#update-quote" ).click(function() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
      console.log(a);
      $("#title").text(a[0].title);
      $("#content").html(a[0].content);
    });
  });
});