function scrollToTop() {
    window.scrollTo(0, 0);
}

$("#back2TopBtn").fadeOut();

// event when user scrolls
window.onscroll = function() { 
    // let #back2TopBtn fade in when user scrolls down
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $("#back2TopBtn").fadeIn();
    } else {
        $("#back2TopBtn").fadeOut();
    } 
}