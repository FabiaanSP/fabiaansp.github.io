let scrollIndex = 0;
let maxScrollIndex = 2;
let isAnimating = false;

let indicatorAnimation = "animate__rubberBand";

setTimeout(function(){
  $('#box0').removeClass('animate__fadeInRightBig');
},1000)

window.onwheel = e => {
  if(e.deltaY >= 0){

    // Scrolling Down

    if(!isAnimating && scrollIndex < maxScrollIndex) {

      console.log("Scroll Down");
      isAnimating = true;
      $('#box' + scrollIndex).addClass('animate__fadeOutUpBig');
      $('#circle' + scrollIndex).removeClass(indicatorAnimation);

      document.getElementById("circle" + scrollIndex).innerHTML = "";
      setTimeout(function(){

        document.getElementById("box" + scrollIndex).style.display = "none";
        $('#box' + scrollIndex).removeClass('animate__fadeOutUpBig');
        scrollIndex += 1;

        document.getElementById("box" + scrollIndex).style.display = "block";
        $('#box' + scrollIndex).removeClass('animate__fadeInDownBig');
        $('#box' + scrollIndex).addClass('animate__fadeInUpBig');
        $('#circle' + scrollIndex).addClass(indicatorAnimation);

        document.getElementById("circle" + scrollIndex).innerHTML = '<i class="fas fa-angle-left"></i>';

        setTimeout(function(){
          isAnimating = false;
          $('#box' + scrollIndex - 1).removeClass('animate__fadeInUpBig');
          $('#circle' + scrollIndex).removeClass(indicatorAnimation);
        },1000)
      },200)

    }

  } else {
    // Scrolling Up

    if (!isAnimating && scrollIndex > 0) {
      console.log('Scroll Up');

      isAnimating = true;
      $('#box' + scrollIndex).addClass('animate__fadeOutDownBig');
      $('#circle' + scrollIndex).removeClass(indicatorAnimation);

      document.getElementById("circle" + scrollIndex).innerHTML = "";
      setTimeout(function(){

        document.getElementById("box" + scrollIndex).style.display = "none";
        $('#box' + scrollIndex).removeClass('animate__fadeOutDownBig');
        scrollIndex -= 1;

        document.getElementById("box" + scrollIndex).style.display = "block";
        $('#box' + scrollIndex).removeClass('animate__fadeInUpBig');
        $('#box' + scrollIndex).addClass('animate__fadeInDownBig');
        $('#circle' + scrollIndex).addClass(indicatorAnimation);
        document.getElementById("circle" + scrollIndex).innerHTML = '<i class="fas fa-angle-left"></i>';

        setTimeout(function(){
          isAnimating = false;
          $('#box' + scrollIndex - 1).removeClass('animate__fadeInDownBig');
          $('#circle' + scrollIndex).removeClass(indicatorAnimation);
        },1000)
      },200)
    }
  }
}
