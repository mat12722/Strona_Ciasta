var g = document.getElementsByClassName("gwiazdki");
for (var i = 0; i < g.length; i++) { g[i].src = "Z/Ikonki/Gwiazdka Negatywna.png"; }
var blok = 0;
function Blokada() { blok = -1; }
function Obecnosc(o) {
    if (blok != -1) {
        for (var akt = 0; akt <= o; akt++) { g[akt].src = "Z/Ikonki/Gwiazdka Pozytywna.png"; }
    }
}
function Puste() {
    if (blok != -1) {
        for (var akt = 0; akt < g.length; akt++) { g[akt].src = "Z/Ikonki/Gwiazdka Negatywna.png"; }
    }
}
function ResetDanych() {
    var klasa = document.getElementsByClassName("op");
    for (var i = 0; i < klasa.length; i++) { klasa[i].checked = false; }
    document.getElementById("Tekstopinia").value = "";
    blok = 0;
    for (var j = 0; j < g.length; j++) { g[j].src = "Z/Ikonki/Gwiazdka Negatywna.png"; }
}
