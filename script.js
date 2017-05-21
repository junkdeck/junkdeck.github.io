$(document).ready(function(){

    //only handle links with '#'
    $(document).on('click', 'a[href^="#"]', function(e){
        var id = $(this).attr('href'); //target element id

        var $id = $(id); //target element
        if($id.length === 0){ //if there's no ID, abort
            return;
        }

        //prevent standard hash navigation to avoid blinking in IE
        e.preventDefault();

        //find position relative to document
        var pos = $id.offset().top;

        //animated scrolling
        $('body, html').animate({scrollTop: pos},{duration: 500, queue:false});
    });
});
