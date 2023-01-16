$('#lang').click(() => {
    $('.dp-content').slideToggle();
    $('#lang svg').toggleClass('lang-active')
})

$(window).scroll(() => {
    if($(this).scrollTop() > 100) {
        $('#Header').css('background-color','white')
        $('#Header').css('padding','19px 0')
        $('#to_top').css('opacity','1')
    }
    else{
        $('#Header').css('background-color','white')
        $('#Header').css('padding','25px 0')
        $('#to_top').css('opacity','0')
    }
})

$('#to_top').click(() => {
    $('html,body').animate({
        scrollTop: 0
    })
})

$('#hamburger-icon').click(() => {
    $('#sidenav').toggleClass('side-active')
})



let mode_btn = document.getElementById('mode');

mode_btn.onclick = function() {
    if(document.body.classList.contains('mode-active')){
        document.body.classList.remove('mode-active');
    }
    else{
        document.body.classList.add('mode-active')
        document.div.style.color = '#fff !important' 
    }
}