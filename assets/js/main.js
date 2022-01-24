$(document).ready(function(){
    // je recupere dans une variable l element qui a la classe scrolltop
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {

    // je range dans une variable la position de mon scroll
    var topPos = $(this).scrollTop();

    // si la postion de mon scroll est superieur a 100
    if (topPos > 100) {
      //  j'affiche 
      $(scrollTop).css("opacity", "1");
//sinon
    } else {
      // je cache 
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END
// au click je lance ma fonction 
  $(scrollTop).click(function() {
    // je recupere le html et mon body et anime 
    $('html, body').animate({
      // je remonte a la postion 0
      scrollTop: 0
      // en 800ms
    }, 800);
    return false;

  }); // click() scroll top END

    // menu hamburger
    $('nav button').on('click', function(){
        $('header ul').toggleClass('open');
    })

    // bouton imprimer
    $('.new-print-button').click(function() {
        window.print();
        return false;
    });
})
