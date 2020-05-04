$('.carousel').carousel({
    interval: 7000
})

$('#nightmode').on('click', function(){
    if ($(this).hasClass('light')) {
    $('body').css('background-color','#141414');
    $('a').css('color','#fff');
    $('h1').css('color','white');
    $('h2').css('color','white');
    $('h3').css('color','white');
    $('p').css('color','white');
    $('td').css('background-color','#141414');
    $('td').css('color','white');
  	$('.filmdesc').css('color','#fff');
  	$('.text-uppercase').css('color','#fff');
    $('.descr').css('color','#3684bc');
    $('.cit2').css('color','#3684bc');
        $(this).removeClass('light').addClass('night');
        return
    }
    $(this).removeClass('night').addClass('light');
    $('body').css('background-color','white');
    $('h1').css('color','#141414');
    $('p').css('color','#141414');
    $('a').css('color','#000');
	$('h1').css('color','black');
    $('h2').css('color','black');
    $('h3').css('color','black');
    $('td').css('background-color','white');
    $('td').css('color','black');
    $('.filmdesc').css('color','#fff');
  	$('.text-uppercase').css('color','#fff');
    $('.descr').css('color','#3684bc');
    $('.cit2').css('color','#3684bc');
});