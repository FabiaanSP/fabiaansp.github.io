const preloader = {
    delay: 750,
}

window.addEventListener('load', function(){
    setTimeout(function() {
        $('#body').removeClass('hideScrollbar');
        document.getElementById('preloader').style.display = 'none';
    },preloader.delay)
})