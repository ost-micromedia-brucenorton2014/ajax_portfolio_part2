$( document ).ready(function() {
    
  //console.log( "ready!" );

  $( document ).on( "click", "#galleryNav a", function(event) {
    event.preventDefault();
    console.log( $( this ).data('link') );
    $('#portfolio').load($(this).data('link'));
  });


});