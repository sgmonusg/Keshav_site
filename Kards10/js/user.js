$('#spon').on('click', function(e){
    e.preventDefault();
    var target= $('spons')
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});
