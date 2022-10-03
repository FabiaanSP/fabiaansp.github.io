const zeiten = [1030,1100,1130,1200,1230,1300,1330,1400,1430,1500,1530,1600,1630,1700,1715];

let f = 'Führung';
let lf = 'Letzte Führung';
let za = 'Zauberwald, Ablöse';
let a = 'Ablöse';

const task = [f, f, lf, za, a, 'Pause', f, f, lf, za, a, 'Pause', f, f, lf];

var today = new Date();
refreshTimeTable();

function refreshTimeTable() {
    let mins = today.getMinutes();
    if (mins < 10) { mins = "0" + today.getMinutes().toString(); }
    var time = parseInt(today.getHours().toString() + mins);

    var nextTaskIndex = 0;
    let nextTaskIndexFound = false;

    zeiten.forEach(zeit => {
        if (zeit >= time && !nextTaskIndexFound) {
            nextTaskIndex = zeiten.indexOf(zeit);
            nextTaskIndexFound = true;
        }
    });

    let nextTourIndex = 0;
    let nextTourIndexFound = false;

    zeiten.forEach(zeit => {
        if (zeit >= time && !nextTourIndexFound) {
            if (task[zeiten.indexOf(zeit)] == f || task[zeiten.indexOf(zeit) == lf]) {
                nextTourIndex = zeiten.indexOf(zeit);
                nextTourIndexFound = true;
            }
        }
    });

    let time1 = zeiten[nextTaskIndex].toString().slice(0,2) + ":" + zeiten[nextTaskIndex].toString().slice(2);
    let time2 = zeiten[nextTaskIndex + 1].toString().slice(0,2) + ":" + zeiten[nextTaskIndex + 1].toString().slice(2);

    let nextTourTime = zeiten[nextTourIndex].toString().slice(0,2) + ":" + zeiten[nextTourIndex].toString().slice(2);
    $('.timeTable #1').html(time1 + " - " + task[nextTaskIndex]);
    $('.timeTable #2').html(time2 + " - " + task[nextTaskIndex + 1]);
    $('.timeTable #nextTour').html(nextTourTime + " Uhr");

    console.log("time table refreshed")
}