var pContainerHeight = $('.header1').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.header2').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.header3').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }


  // Landing Elements
  if(wScroll > $('.isi_gal').offset().top - ($(window).height() / 1.2)) {

    $('.isi_gal figure').each(function(i){

      setTimeout(function(){
        $('.isi_gal figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


 


});
