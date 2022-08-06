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

    $('.' + currentPage).addClass('animate__zoomOut');
 
        setTimeout(function(){
            $('.' + targetPageClassName).css("display", "block");
            $('.' + targetPageClassName).addClass('animate__zoomIn');

            $('.' + currentPage).css("display", "none");
            $('.' + currentPage).removeClass('animate__zoomOut');
            setTimeout(function(){ $('.' + targetPageClassName).removeClass('animate__zoomIn'); },1000);

            currentPage = targetPageClassName;
        },500); 
}

select(lastSelected);