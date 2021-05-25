var time;
var time2;
var radios;
var minuty = 0;
var sekundy = 0;
var dwukropek = ":";
var isStarted = false;
var isResetmaybe = false;

function startTimer(time) {

    document.getElementById("nazwaciasta").innerHTML = document.getElementById("T").innerText;

    isStarted = true;
    document.getElementById('buttonZ').disabled = true;
    document.getElementById("pics").src = "Z/Ikonki/Ykolo.png";

    var countDown = 0;
    var time1 = time * 60;
    x = setInterval(function () {
        document.getElementById('song1').pause();
        document.getElementById('song2').pause();
        document.getElementById('song3').pause();
        document.getElementById('song4').pause();
        document.getElementById('displayTime').style.display = '';
        document.getElementById('displayTime2').style.display = '';
        document.getElementById('displayTime3').style.display = '';
        if (isResetmaybe) {
            time2 = 0;
           
        }
        else {
            time2 = time1--;
        }
        if (time2 > 0) {
            minuty = time2 / 60;
            minuty = Math.floor(minuty);
            sekundy = time2 % 60;

           
            document.getElementById("displayTime").innerHTML = minuty;
            document.getElementById("displayTime2").innerHTML = sekundy;
            document.getElementById('displayTime3').innerHTML = dwukropek;

        }
        else if (time2 === 0) { clearInterval(x); }
        if (time2 === 0) {
            if (isResetmaybe) {
                document.getElementById("nazwaciasta").innerHTML = " ";
                document.getElementById("pics").src = "Z/Ikonki/Ckolo.png";
                document.getElementById('buttonZ').disabled = false;
                document.getElementById('displayTime').style.display = 'none';
                document.getElementById('displayTime2').style.display = 'none';
                document.getElementById('displayTime3').style.display = 'none';
                isStarted = false;
                isResetmaybe = false;
            }
            else {
                document.getElementById("pics").src = "Z/Ikonki/ZKolo.png";
                if (radios === "music0") {
                    setInterval(function () { document.getElementById("pics").src = "Z/Ikonki/Ckolo.png"; }, 5000);
                }
                if (radios === "music1") {
                    document.getElementById('song1').play();
                    setInterval(function () { document.getElementById("pics").src = "Z/Ikonki/Ckolo.png"; }, 6000);
                }
                if (radios === "music2") {
                    document.getElementById('song2').play();
                    setInterval(function () { document.getElementById("pics").src = "Z/Ikonki/Ckolo.png"; }, 25000);
                }
                if (radios === "music3") {
                    document.getElementById('song3').play();
                    setInterval(function () { document.getElementById("pics").src = "Z/Ikonki/Ckolo.png"; }, 10000);
                }
                if (radios === "music4") {
                    document.getElementById('song4').play();
                    setInterval(function () { document.getElementById("pics").src = "Z/Ikonki/Ckolo.png"; }, 27000);
                }

                document.getElementById("nazwaciasta").innerHTML = " ";
                document.getElementById('buttonZ').disabled = false;
                document.getElementById('displayTime').style.display = 'none';
                document.getElementById('displayTime2').style.display = 'none';
                document.getElementById('displayTime3').style.display = 'none';
                isStarted = false;
            }
        }
        
    }, 1000);
    return x;

}
function ResetCzasu() { isResetmaybe = true; }
function getValue(radio) {
    radios = radio.value;
    if (isStarted == false) {
        if (radios === "music0") {
            document.getElementById('song1').pause();
            document.getElementById('song2').pause();
            document.getElementById('song3').pause();
            document.getElementById('song4').pause();
        }
        if (radios === "music1") {
            document.getElementById('song1').play();
            document.getElementById('song2').pause();
            document.getElementById('song3').pause();
            document.getElementById('song4').pause();
        }
        if (radios === "music2") {
            document.getElementById('song2').play();
            document.getElementById('song1').pause();
            document.getElementById('song3').pause();
            document.getElementById('song4').pause();
        }
        if (radios === "music3") {
            document.getElementById('song3').play();
            document.getElementById('song2').pause();
            document.getElementById('song1').pause();
            document.getElementById('song4').pause();
        }
        if (radios === "music4") {
            document.getElementById('song4').play();
            document.getElementById('song2').pause();
            document.getElementById('song3').pause();
            document.getElementById('song1').pause();
        }
    }
}