function PL(x)
{
    var Znakpl = [261, 263, 281, 322, 324, 243, 347, 378, 380, 260, 262, 280, 321, 323, 211, 346, 377, 379];
    return String.fromCharCode(Znakpl[x]);
}
//Zapasy na dan¹ kategorie
class CZCiastka {
    static ZCiastlaOwsiane(x) {
        var Zd = ["owsiane1.jpg", "owsiane2.jpg", "owsiane3.jpg", "owsiane4.jpg"];
        return "Z/CiastkaZ/Ciastka owsiane/" + Zd[x];
    }
    static ZCiastkazmaslemorzechowym(x) {
        var Zd = ["masloOrzech1.jpg", "masloOrzech2.jpg", "masloOrzech3.jpg", "masloOrzech4.jpg"];
        return "Z/CiastkaZ/Ciastkazmaslemorzechowym/" + Zd[x];
    }
    static ZPierniki(x) {
        var Zd = ["piernik1.jpg", "piernik2.jpg", "piernik3.jpg", "piernik4.jpg"];
        return "Z/CiastkaZ/Pierniki/" + Zd[x];
    }
}
class CICiastka {
    static ICiastlaOwsiane() {
        document.getElementById("T").innerHTML = "Ciastka Owsiane";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/desery/ciasteczka/ciasteczka_owsiane/przepis.html";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
            `
           Piekarnik nagrza`+ PL(1) + ` do 150 stopni C. 
           Do miski wsypa` + PL(1) + ` mielone migda` + PL(3) + `y, m` + PL(0) + `k` + PL(2) + ` oraz sod` + PL(2) + ` oczyszczon` + PL(0) + `, wymiesza` + PL(1) + `. 
           Doda` + PL(1) + ` p` + PL(3) + `atki owsiane, wi` + PL(5) + `rki kokosowe oraz mieszank` + PL(2) + ` rodzynek i ` + PL(8) + `urawiny, wymiesza` + PL(1) + `.
           W rondelku roztopi`+ PL(1) + ` mas` + PL(3) + `o z miodem oraz z 1 ` + PL(3) + `y` + PL(8) +`k` + PL(0) + ` wody. Przela` + PL(1) + ` do miski z sypkimi sk` + PL(3) + `adnikami i dok` + PL(3) + `adnie wymiesza` + PL(1) +`.
           Z powsta` + PL(3) + `ej masy ulepi` + PL(1) + ` kulki (ok. 3 cm ` + PL(6) +`rednicy) nast` + PL(2) +`pnie sp` + PL(3) + `aszczy` + PL(1) + ` je i uformowa` + PL(1) + ` kszta` + PL(3) + `t dysku (` + PL(6) + `rednica ok. 4 cm i grubo` + PL(6) + `` + PL(1) + ` 1,5 cm). U` + PL(3) +`o` + PL(8) + `y` + PL(1) +` na blaszce wy` + PL(3) +`o` + PL(8) + `onej papierem do pieczenia z zachowaniem odst` + PL(2) + `p` + PL(5) +`w.
           Wstawi` + PL(1) +` do piekarnika i piec przez 15 minut.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
           
              <li>3/4 szklanki mielonych migda` + PL(3) +`` + PL(5) + `w lub zmielonych p` + PL(3) + `atk` + PL(5) + `w migda` + PL(3) + `` + PL(5) +`w</li>
              <li>1/2 szklanki m` + PL(0) + `ki pszennej lub ry` + PL(8) +`owej</li>
              <li>1/2 ` + PL(3) + `y` + PL(8) +`eczki sody oczyszczonej</li>
              <li>1 szklanka p` + PL(3) + `atk` + PL(5) +`w owsianych</li>
              <li>1/2 szklanki wi` + PL(5) + `rk` + PL(5) +`w kokosowych</li>
              <li>ok. 80 g mieszanki drobnych rodzynek i suszonej ` + PL(8) +`urawiny</li>
              <li>125 g mas` + PL(3) +`a lub oleju kokosowego</li>
              <li>3 ` + PL(3) + `y` + PL(8) +`ki miodu</li>
           
        `;
    }
    static ICiastkazmaslemorzechowym() {
        document.getElementById("T").innerHTML = "Ciastka z maslem orzechowym";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/przepis/ciasteczka-z-maslem-orzechowym-i-kawalkami-czekolady";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
        `
           Mas` + PL(3) + `o, mas` + PL(3) + `o orzechowe i jajko ociepli` + PL(1) + ` w temperaturze pokojowej. Du` + PL(8) + `` + PL(0) + ` blach` + PL(2) + ` (np. z wyposa` + PL(8) + `enia piekarnika) wy` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` papierem do pieczenia. Piekarnik nagrza` + PL(1) + ` do 175 stopni C.
           Do miski w` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` mi` + PL(2) + `kkie mas` + PL(3) + `o, mas` + PL(3) + `o orzechowe i cukier trzcinowy. Ubija` + PL(1) + ` przez ok. 5 minut a` + PL(8) + ` masa b` + PL(2) + `dzie ja` + PL(6) + `niejsza i bardziej puszysta. Doda` + PL(1) + ` jajko, wanili` + PL(2) + ` i ubija` + PL(1) + ` jeszcze przez ok. 3 minuty.
           W oddzielnej misce wymiesza` + PL(1) + ` m` + PL(0) + `k` + PL(2) + ` pszenn` + PL(0) + ` z sod` + PL(0) + `, proszkiem do pieczenia i sol` + PL(0) + `. Mieszank` + PL(2) + ` wsypa` + PL(1) + ` do ubitej masy i wymiesza` + PL(1) + ` ` + PL(3) + `y` + PL(8) + `k` + PL(0) + ` lub kr` + PL(5) + `tko zmiksowa` + PL(1) + ` na jednolit` + PL(0) + ` mas` + PL(2) + `. Doda` + PL(1) + ` kropelki czekolady i delikatnie wymiesza` + PL(1) + `.
           Wyk` + PL(3) + `ada` + PL(1) + ` na blaszk` + PL(2) + ` z zachowaniem odst` + PL(2) + `p` + PL(5) + `w. Mo` + PL(8) + `na wyk` + PL(3) + `ada` + PL(1) + ` mas` + PL(2) + ` za pomoc` + PL(0) + ` ` + PL(3) + `y` + PL(8) + `ki do lod` + PL(5) + `w (1 ` + PL(3) + `y` + PL(8) + `ka) lub zwyk` + PL(3) + `` + PL(0) + ` ` + PL(3) + `y` + PL(8) + `k` + PL(0) + ` sto` + PL(3) + `ow` + PL(0) + ` (2 ` + PL(3) + `y` + PL(8) + `ki), bez uklepywania masy, na blaszce masa ma mie` + PL(1) + ` kszta` + PL(3) + `t p` + PL(5) + `` + PL(3) + `kuli lub kapelusza grzyba, podczas pieczenia rozejdzie si` + PL(2) + ` na boki.
           Wstawi` + PL(1) + ` do nagrzanego piekarnika i piec przez ok. 15 minut, a` + PL(8) + ` na obrze` + PL(8) + `ach i na wierzchu ciasteczka b` + PL(2) + `d` + PL(0) + ` ju` + PL(8) + ` wypieczone, ale w ` + PL(6) + `rodku b` + PL(2) + `d` + PL(0) + ` jeszcze delikatnie mi` + PL(2) + `kkie. Dopiero po ostudzeniu bardziej stwardniej` + PL(0) + ` i zastygn` + PL(0) + `.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
            <li>100 g mas` + PL(3) + `a</li>
            <li>120 g mas` + PL(3) + `a orzechowego</li>
            <li>150 g cukru trzcinowego</li>
            <li>1 jajko</li>
            <li>1 ` + PL(3) + `y` + PL(8) + `eczka ekstraktu wanilinowego lub 1 ` + PL(3) + `y` + PL(8) + `ka cukru wanilinowego</li>
            <li>170 g m` + PL(0) + `ki</li>
            <li>2/3 ` + PL(3) + `y` + PL(8) + `eczki sody oczyszczonej</li>
            <li>2/3 ` + PL(3) + `y` + PL(8) + `eczki proszku do pieczenia</li>
            <li>ma` + PL(3) + `a szczypta soli morskiej</li>
            <li>50 g kropelek czekoladowych lub pokrojonej czekolady</li>
           
        `;
    }
    static IPierniki() {
        document.getElementById("T").innerHTML = "Pierniki";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/kuchnia_polska/wigilia/ciastka_choinki/przepis.html";
        document.getElementById("LinkPrzepisy").target = "_blank"; 

        document.getElementById("TrescPrzepisu").innerHTML =
        `
           Mas` + PL(3) + `o uciera` + PL(1) + ` mikserem razem z cukrem przez oko` + PL(3) + `o 6 - 7 minut. Doda` + PL(1) + ` przesian` + PL(0) + ` m` + PL(0) + `k` + PL(2) + ` pszenn` + PL(0) + ` oraz m` + PL(0) + `k` + PL(2) + ` ry` + PL(8) + `ow` + PL(0) + `. Miksowa` + PL(1) + ` przez chwil` + PL(2) + ` lub wygniata` + PL(1) + ` r` + PL(2) + `k` + PL(0) + ` ` + PL(3) + `` + PL(0) + `cz` + PL(0) + `c sk` + PL(3) + `adniki w kul` + PL(2) + `. Zawin` + PL(0) + `` + PL(1) + ` w foli` + PL(2) + ` i w` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` do lod` + PL(8) + `wki na oko` + PL(3) + `o 30 minut. Piekarnik nagrza` + PL(1) + ` do 160 stopni C.
           Ciasto podzieli` + PL(1) + ` na 3 cz` + PL(2) + `` + PL(6) + `ci i kolejno rozwa` + PL(3) + `kowywa` + PL(1) + ` na placki o grubo` + PL(6) + `ci oko` + PL(3) + `o 3 mm, podsypuj` + PL(0) + `c stolnic` + PL(2) + ` m` + PL(0) + `k` + PL(0) + `. Reszt` + PL(2) + ` ciasta trzyma` + PL(1) + ` w lod` + PL(5) + `wce.
           Foremk` + PL(0) + ` wycina` + PL(1) + ` kszta` + PL(3) + `ty i uk` + PL(3) + `ada` + PL(1) + ` na blasze wy` + PL(3) + `o` + PL(8) + `onej papierem do pieczenia. Wstawi` + PL(1) + ` do nagrzanego piekarnika i piec przez 15 minut. Po ostudzeniu mo` + PL(8) + `na polukrowa` + PL(1) + ` i dekorowa` + PL(1) + ` posypkami.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
            <li>150 g mi` + PL(2) + `kkiego mas` + PL(3) + `a</li>
            <li>70 g mia` + PL(3) + `kiego (drobnego) cukru do wypiek` + PL(5) + `w lub 50 g cukru pudru</li>
            <li>150 g  m` + PL(0) + `ki pszennej tortowej</li>
            <li>75 g m` + PL(0) + `ki ry` + PL(8) + `owej lub m` + PL(0) + `ki ziemniaczanej</li>
        `;
    }
}
//Przejscie na inny przepis
function OpenP() {
    document.getElementById("A").style.display = "none";
    document.getElementById("P").style.display = "block";
}
function OpenA() {
    document.getElementById("A").style.display = "block";
    document.getElementById("P").style.display = "none";
}
var wl = 1, wp = 2, gi = 0;
GuzikiZdjecia();
function PrzejscieNaLewo() {
    gi++;
    wl++;
    wp++;
    if (gi > 2) { gi = 0; }
    if (wl > 2) { wl = 0; }
    if (wp > 2) { wp = 0; }
    GuzikiZdjecia();
    ZmianaGalerii();

}
function PrzejscieNaPrawo() {
    gi--;
    wl--;
    wp--;
    if (gi < 0) { gi = 2; }
    if (wl < 0) { wl = 2; }
    if (wp < 0) { wp = 2; }
    GuzikiZdjecia();
    ZmianaGalerii();

}
function GuzikiZdjecia() {
    var lz = document.getElementById("ZLewo"), pz = document.getElementById("ZPrawo");
    switch (wl) {
        case 0: { lz.src = CZCiastka.ZCiastlaOwsiane(3); } break;
        case 1: { lz.src = CZCiastka.ZCiastkazmaslemorzechowym(3); } break;
        case 2: { lz.src = CZCiastka.ZPierniki(3); } break;
    }
    switch (wp) {
        case 0: { pz.src = CZCiastka.ZCiastlaOwsiane(3); } break;
        case 1: { pz.src = CZCiastka.ZCiastkazmaslemorzechowym(3); } break;
        case 2: { pz.src = CZCiastka.ZPierniki(3); } break;
    }
    switch (gi) {
        case 0: { CICiastka.ICiastlaOwsiane(); } break;
        case 1: { CICiastka.ICiastkazmaslemorzechowym(); } break;
        case 2: { CICiastka.IPierniki(); } break;
    }

}
//Galeria
ZmianaGalerii();
function ZmianaGalerii() {
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZCiastka.ZCiastlaOwsiane(0); } break;
        case 1: { document.getElementById("Zd").src = CZCiastka.ZCiastkazmaslemorzechowym(0); } break;
        case 2: { document.getElementById("Zd").src = CZCiastka.ZPierniki(0); } break;
    }
}
var p = 0;
function Back(a) {
    p += a;
    if (p < 0) {
        p = 3;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZCiastka.ZCiastlaOwsiane(p); } break;
        case 1: { document.getElementById("Zd").src = CZCiastka.ZCiastkazmaslemorzechowym(p); } break;
        case 2: { document.getElementById("Zd").src = CZCiastka.ZPierniki(p); } break;
    }
}
function Next(a) {
    p += a;
    if (p > 3) {
        p = 0;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZCiastka.ZCiastlaOwsiane(p); } break;
        case 1: { document.getElementById("Zd").src = CZCiastka.ZCiastkazmaslemorzechowym(p); } break;
        case 2: { document.getElementById("Zd").src = CZCiastka.ZPierniki(p); } break;
    }

}
function WyborMuzyki() {
    var czas;
    switch (gi) {
        case 0: { czas = 15.00; } break;
        case 1: { czas = 15.00; } break;
        case 2: { czas = 15.00; } break;
    }
    return czas;
}
