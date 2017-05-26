$(function() {
  var words = [
    'design',
    'learn',
    'bootstrap',
    'html',
    'css',
    'photoshop',
  ];
  i = 0;
   // gerer affichage menu responsive pour ecran inferieur ou egal à medium (<992px)
   //avec cette commande on ne voir plus le menu
   $(".navbar-responsive").toggle();

// gere l'affichage quand on clique sur le menu hamburger
   $(".menu").click(function () {
     $(".navbar-responsive").toggle("slow");
   });

// On gere l'affichage du niveau aleatoire des phrases d'accroche du header ( toute les 3.5 sec)

setInterval(function() {
  $('#word').fadeOut(function() {
    $(this).html(words[i = (i + 1) % words.length]).fadeIn();
  });
}, 3500 );

// On gere le scrolling vers les differents sections du site

$('.scroll').click(function() {
  var section = $("." + this.id);
  $("html,body").animate({scrollTop: section.offset().top}, 'slow');

});


// On gère l'affichage des progressbar pour les compétences
window.sr = ScrollReveal();
sr.reveal('.progress-bar', {
  origin: 'left',
  duration: 2000,
  distance: '100%'
})
});
