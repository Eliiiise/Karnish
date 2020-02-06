var player_video=$('video')[0];
var bool=false;
var bool2=false;


$('.cercle').click(function() {
  $('.cercle').toggleClass('cerclela');
  $('.cercle').toggleClass('cerclepasla');
	    if (bool==false){
	player_video.play();
	bool=true ;
	$('.playvideo').text("PAUSE VIDEO");
    }	
	else{
    player_video.pause();
	bool = false ;
	$('.playvideo').text("PLAY VIDEO");
  

    }

});

$('.menu').click(function () {
  if (bool2==false){
    bool2=true;
    $('.bottomhamb').css('margin-top','-1px');
    
    $('html').css('overflow-y','hidden');
  }
  else{
    bool2=false
    $('.bottomhamb').css('margin-top','8px');
    
    $('html').css('overflow-y','scroll');
  }});

$('.menu').click(function () {
  $('.brown').toggleClass('open');
  $('.brown2').toggleClass('open2');
  $('.opacity').toggleClass('opacity0');
  $('.tophamb').toggleClass('toph');
  $('.bottomhamb').toggleClass('bottomh');
  $("html, body").animate({scrollTop: 0},"slow");

  setTimeout(function(){ $('.brown img, .brown nav').toggleClass('open3'); }, 600);


})



    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
        return false;
    });
