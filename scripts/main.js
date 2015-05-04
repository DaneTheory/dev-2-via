//var displayActiveArtist = $("[data_display=active]");
//var displayDefaultArtist = $("[data_display=default]");

// MASONRY DISPLAY. MUST BE CALLED ON WINDOW LOAD BECASUE OF THE IMAGES
$(window).load( function() {

    $('#windowContainer').masonry({
        "itemSelector": ".mainPhotoWrapper",
        "columnWidth": ".grid-sizer",
    });

});

// DISPLAY ACTIVE ARTIST FIRST, THEN REST ON SCROLL
$(document).ready(function(){
/*
   $('body').on('click','.mybutton', function(){
     var att = $(this).class();
     $("li[data-type ="+att+"]").hide();
   });
*/
//var displayActiveArtist = $("[data_display=active]");
var displayActiveArtist = document.querySelectorAll('[data-display~=active]');
var displayDefaultArtist = document.querySelectorAll('[data-display~=default]');

var disTrig = $(document).data("default");
//console.log('active' + '' + displayActiveArtist);
//console.log('default' + '' + displayDefaultArtist);


$('body').jscroll({
	
	debug: true,
	autotrigger: true,
    loadingHtml: '<h1>Loading...</h1>',
    padding: 200,
    contentSelector: disTrig
    
});


});