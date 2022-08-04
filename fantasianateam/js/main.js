function showDraculaPage() {
    $('.AttraktionsauswahlBereich').addClass('animate__slideOutLeft');

    setTimeout(function(){
        $('#DraculaKategorien').css("display", "inline-block");
        $('#DraculaKategorien').addClass('animate__slideInRight');
    },200)

    $('.Kategorieauswahl').css("top", $('.head').Height + 40 + "px")

    setTimeout(function(){
        document.getElementsByClassName('AttraktionsauswahlBereich')[0].style.display = "none";
    },1000)
    document.title = "FantasianaTeam | Animation";
}