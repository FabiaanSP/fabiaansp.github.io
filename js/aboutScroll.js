let scrollIndex = 0;
let maxScrollIndex = 2;
let isAnimating = false;

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
      setTimeout(function(){

        document.getElementById("box" + scrollIndex).style.display = "none";
        $('#box' + scrollIndex).removeClass('animate__fadeOutUpBig');
        scrollIndex += 1;

        document.getElementById("box" + scrollIndex).style.display = "block";
        $('#box' + scrollIndex).removeClass('animate__fadeInDownBig');
        $('#box' + scrollIndex).addClass('animate__fadeInUpBig');

        setTimeout(function(){
          isAnimating = false;
          $('#box' + scrollIndex - 1).removeClass('animate__fadeInUpBig');
        },1000)
      },200)

    }

  } else {
    // Scrolling Up

    if (!isAnimating && scrollIndex > 0) {
      console.log('Scroll Up');

      isAnimating = true;
      $('#box' + scrollIndex).addClass('animate__fadeOutDownBig');
      setTimeout(function(){

        document.getElementById("box" + scrollIndex).style.display = "none";
        $('#box' + scrollIndex).removeClass('animate__fadeOutDownBig');
        scrollIndex -= 1;

        document.getElementById("box" + scrollIndex).style.display = "block";
        $('#box' + scrollIndex).removeClass('animate__fadeInUpBig');
        $('#box' + scrollIndex).addClass('animate__fadeInDownBig');

        setTimeout(function(){
          isAnimating = false;
          $('#box' + scrollIndex - 1).removeClass('animate__fadeInDownBig');
        },1000)
      },200)
    }
  }
}
