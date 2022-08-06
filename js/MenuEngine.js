lastSelected = document.getElementById("1menuItem");
Indicator = $('.selectionIndicator');

currentPage = "timeTable";

function select(e) {
    if (e.getAttribute('pageClassName') == 'timeTable') { refreshTimeTable(); }

    lastSelected.classList.remove("selectedMenuPunkt");
    e.classList.add("selectedMenuPunkt");

    Indicator.css("left", e.getBoundingClientRect().left + "px");
    Indicator.css("width", e.offsetWidth + "px");

    lastSelected = e;

    targetPageClassName = e.getAttribute('pageClassName');

    if (document.getElementsByClassName(targetPageClassName)[0].getAttribute('page') < document.getElementsByClassName(currentPage)[0].getAttribute('page')) {
        $('.' + currentPage).addClass('animate__fadeOutRight');
 
        setTimeout(function(){
            $('.' + targetPageClassName).css("display", "block");
            $('.' + targetPageClassName).addClass('animate__fadeInLeft');

            $('.' + currentPage).css("display", "none");
            $('.' + currentPage).removeClass('animate__fadeOutRight');
            setTimeout(function(){ $('.' + targetPageClassName).removeClass('animate__fadeInLeft'); },1000);

            currentPage = targetPageClassName;
        },500);
    } else {
        $('.' + currentPage).addClass('animate__fadeOutLeft');
 
        setTimeout(function(){
            $('.' + targetPageClassName).css("display", "block");
            $('.' + targetPageClassName).addClass('animate__fadeInRight');

            $('.' + currentPage).css("display", "none");
            $('.' + currentPage).removeClass('animate__fadeOutLeft');
            setTimeout(function(){ $('.' + targetPageClassName).removeClass('animate__fadeInRight'); },1000);

            currentPage = targetPageClassName;
        },500);
    }    
}

select(lastSelected);