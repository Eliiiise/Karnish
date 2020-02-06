$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
   wrapAround: true,
   pageDots:false,
   prevNextButtons: false

});

$('.bnext').on( 'click', function() {
  $('.main-carousel').flickity('next');
});

$('.bprevious').on( 'click', function() {
  $('.main-carousel').flickity('previous');
});