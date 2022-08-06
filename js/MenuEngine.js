lastSelected = document.getElementById("1menuItem");
Indicator = $('.selectionIndicator');

currentPage = "timeTable";

function select(e) {
    lastSelected.classList.remove("selectedMenuPunkt");
    e.classList.add("selectedMenuPunkt");

    Indicator.css("left", e.getBoundingClientRect().left + "px");
    Indicator.css("width", e.offsetWidth + "px");

    lastSelected = e;

    targetPageClassName = e.getAttribute('pageClassName');

    if (document.getElementsByClassName(targetPageClassName)[0].getAttribute('page') < document.getElementsByClassName(currentPage)[0].getAttribute('page')) {
        $('.' + currentPage).addClass('animate__slideOutRight');
 
        setTimeout(function(){
            $('.' + targetPageClassName).css("display", "block");
            $('.' + targetPageClassName).addClass('animate__slideInLeft');

            $('.' + currentPage).css("display", "none");
            $('.' + currentPage).removeClass('animate__slideOutRight');
            setTimeout(function(){ $('.' + targetPageClassName).removeClass('animate__slideInLeft'); },1000);

            currentPage = targetPageClassName;
        },500);
    } else {
        $('.' + currentPage).addClass('animate__slideOutLeft');
 
        setTimeout(function(){
            $('.' + targetPageClassName).css("display", "block");
            $('.' + targetPageClassName).addClass('animate__slideInRight');

            $('.' + currentPage).css("display", "none");
            $('.' + currentPage).removeClass('animate__slideOutLeft');
            setTimeout(function(){ $('.' + targetPageClassName).removeClass('animate__slideInRight'); },1000);

            currentPage = targetPageClassName;
        },500);
    }    
}