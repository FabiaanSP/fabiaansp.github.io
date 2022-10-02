var blinkLeft = true;
var leftBlaulicht = "#leftLightFF";
var rightBlaulicht = "#rightLightFF";

// box-shadow: 0px 0px 30px rgb(0, 101, 252)

function blink() {
    if (blinkLeft) {
        $(leftBlaulicht).css("background-color", "#008cff");
        $(leftBlaulicht).css("box-shadow", "0px 0px 40px rgb(0, 101, 252)");

        $(rightBlaulicht).css("background-color", "#364dff");
        $(rightBlaulicht).css("box-shadow", "none");
        blinkLeft = false;
    } else {
        $(rightBlaulicht).css("background-color", "#008cff");
        $(rightBlaulicht).css("box-shadow", "0px 0px 40px rgb(0, 101, 252)");

        $(leftBlaulicht).css("background-color", "#364dff");
        $(leftBlaulicht).css("box-shadow", "none");
        blinkLeft = true;
    }

    setTimeout(blink, 600);
}

blink();

