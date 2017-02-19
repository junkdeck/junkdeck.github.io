$(document).ready(function(){
    $('.getter').on('click',function(){
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data){
            $(".quote").html(data.quoteText);
            $(".author").html(data.quoteAuthor);
        });
    });
});
