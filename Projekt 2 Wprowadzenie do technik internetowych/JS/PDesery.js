//Znaki Polskie
function PL(x) {
    var Znakpl = [261, 263, 281, 322, 324, 243, 347, 378, 380, 260, 262, 280, 321, 323, 211, 346, 377, 379];
    return String.fromCharCode(Znakpl[x]);
}
//Worek Zdjęć
class CZDesery {
    static ZCremeBrulee(x) {
        var Zd = ["cremeBrule1.jpg", "cremeBrule2.jpg", "cremeBrule3.jpg", "cremeBrule4.jpg"];
        return "Z/DeseryZ/Creme Brulee/" + Zd[x];
    }
    static ZPannaCotta(x) {
        var Zd = ["pannaCotta1.jpg", "pannaCotta2.jpg", "pannaCotta3.jpg", "pannaCotta4.jpg"];
        return "Z/DeseryZ/Panna Cotta/" + Zd[x];
    }
    static ZTiramisu(x) {
        var Zd = ["tiramisu1.jpg", "tiramisu2.jpg", "tiramisu3.jpg", "tiramisu4.jpg"];
        return "Z/DeseryZ/Tiramisu/" + Zd[x];
    }
}
//Worek Informacij
class CIDesery
{
    static ICremeBrulee()
    {
        document.getElementById("T").innerHTML = "Creme Brulee";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/kuchnia_francuska/creme_brule/creme_brule.html";
        document.getElementById("LinkPrzepisy").target = "_blank";
        document.getElementById("TrescPrzepisu").innerHTML =
        `
            W rondelku na ma`+ PL(3) + `ym ogniu zagotowa` + PL(1) + ` ` + PL(6) + `mietank` + PL(2) + ` z dodatkiem cukru i wy` + PL(3) + `uskanych ` + PL(3) + `y` + PL(8) + `eczk` + PL(0) + ` ziarenek z przeci` + PL(2) + `tej wzd` + PL(3) +`u` + PL(8) + ` laski wanilii. Gdy ` + PL(6) + `mietanka zacznie si` + PL(2) + ` gotowa` + PL(1) + ` na brzegach, odstawi` + PL(1) +` z ognia i przestudzi` + PL(1) +`.
            `+ PL(17) + `` + PL(5) + `` + PL(3) + `tka ubija` + PL(1) + ` mikserem przez oko` + PL(3) +`o p` + PL(5) + `` + PL(3) + ` minuty (nie na puszyst` + PL(0) + ` mas` + PL(2) + `). Dolewa` + PL(1) + ` ciep` + PL(3) + `` + PL(0) + ` ` + PL(6) + `mietan` + PL(2) + `, po ` + PL(3) + `y` + PL(8) + `ce lub cienkim strumieniem, ca` + PL(3) + `y czas miksuj` + PL(0) + `c na ma` + PL(3) + `ych obrotach miksera bez ubijania kremu. Ma on by` + PL(1) +` g` + PL(3) + `adki i b` + PL(3) + `yszcz` + PL(0) +`cy.
            Piekarnik nagrza`+ PL(1) + ` do 100 stopni C. Foremki do zapiekania nape` + PL(3) + `ni` + PL(1) + ` mas` + PL(0) + ` wlewając j` + PL(0) + ` przez sitko. Foremki postawi` + PL(1) +` na blaszce do pieczenia. 
            Wstawi`+ PL(1) + ` desery do piekarnika i piec przez 50 minut. Krem powinien by` + PL(1) + ` ` + PL(6) + `ci` + PL(2) + `ty. Wyj` + PL(0) +`` + PL(1) + `, ostudzi` + PL(1) + ` i sch` + PL(3) + `odzi` + PL(1) + ` w lod` + PL(5) + `wce, najlepiej przez ca` + PL(3) + `` + PL(0) +` noc.
            Po sch`+ PL(3) + `odzeniu wierzch deseru posypa` + PL(1) + ` r` + PL(5) + `wn` + PL(0) + ` warstw` + PL(0) + ` cukru i opali` + PL(1) + ` go specjalnym palnikiem do creme brulee. Cukier si` + PL(2) + ` rozpu` + PL(6) + `ci, zrumieni i utworzy si` + PL(2) +` charakterystyczna skorupka.
            Udekorowa`+ PL(1) + ` ` + PL(6) + `wie` + PL(8) + `ymi owocami i mi` + PL(2) +`t0.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
             <li>500 ml `+ PL(6) + `mietanki krem` + PL(5) +`wki 36%</li>
             <li>6 `+ PL(8) + `` + PL(5) + `` + PL(3) +`tek</li>
             <li>1/3 szklanki cukru</li>
             <li>1 laska wanilii</li>
        `;
    }
    static IPannaCotta()
    {
        document.getElementById("T").innerHTML = "Panna Cotta";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/kuchnia_wloska/panna_cotta/panna_cotta.html";
        document.getElementById("LinkPrzepisy").target = "_blank";
        document.getElementById("TrescPrzepisu").innerHTML =
        `
            `+ PL(17) + `elatyn` + PL(2) + ` zala` + PL(1) +` 2 ` + PL(3) + `y` + PL(8) + `kami zimnej wody i odstawi` + PL(1) + ` na 5 minut. Lask` + PL(2) + ` wanilii przekroi` + PL(1) + ` wzd` + PL(3) + `u` + PL(8) + ` na p` + PL(5) + `` + PL(3) + ` i ` + PL(3) + `y` + PL(8) + `eczk` + PL(0) + ` wyskroba` + PL(1) +` ziarenka.
            Do rondelka wla`+ PL(1) + ` ` + PL(6) + `mietank` + PL(2) + ` kremow` + PL(2) + ` i mleko, doda` + PL(1) + ` cukier, ziarenka wanilii wraz z przepo` + PL(3) +`owion` + PL(0) + ` lask` + PL(0) + ` lub ekstrakt z wanilii. Mieszaj` + PL(0) + `c podgrzewa` + PL(1) + ` a` + PL(8) + ` cukier si` + PL(2) + ` rozpu` + PL(6) +`ci.
            Nast`+ PL(2) + `pnie doprowadzi` + PL(1) + ` prawie do zagotowania, tzn. odstawi` + PL(1) + ` z ognia w momencie gdy przy brzegach garnka zacznie si` + PL(2) +` gotowa` + PL(1) +`.
            Doda`+ PL(1) + ` rum i wino oraz namoczon` + PL(0) + ` ` + PL(8) + `elatyn` + PL(2) + `, miesza` + PL(1) + ` przez oko` + PL(3) + `o minut` + PL(2) + `, a` + PL(8) + ` ca` + PL(3) + `a ` + PL(8) + `elatyna si` + PL(2) +` rozpu` + PL(6) +`ci.
            Mieszank`+ PL(2) + ` wla` + PL(1) + ` do 4 fili` + PL(8) + `anek (ka` + PL(8) + `da po 125 ml) lub 6 mniejszych naczynek. Odstawi` + PL(1) + ` do wystudzenia. Po ostudzeniu fili` + PL(8) + `anki przykry` + PL(1) + ` kawa` + PL(3) + `kiem folii i wstawi` + PL(1) + ` do lod` + PL(5) + `wki do st` + PL(2) + `` + PL(8) + `enia, na oko` + PL(3) + `o 4 - 5 godzin, lub najlepiej na ca` + PL(3) + `` + PL(0) +` noc.
            Wy`+ PL(3) + `o` + PL(8) + `y` + PL(1) + ` na talerzyk i podawa` + PL(1) + ` ze ` + PL(6) +`wie` + PL(8) + `ymi owocami lub musem owocowym. Mo` + PL(8) + `na te` + PL(8) + ` skropi` + PL(1) + ` syropem klonowym, posypa` + PL(1) + ` orzechami lub czekolad` + PL(0) +`.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
            <li>3 `+ PL(3) + `y` + PL(8) + `eczki ` + PL(8) +`elatyny w proszku</li>
            <li>1 laska wanilii lub 2 `+ PL(3) + `y` + PL(8) +`eczki ekstraktu z wanilii</li>
            <li>250 ml `+ PL(6) + `mietanki krem` + PL(5) +`wki (30% lub 36%)</li>
            <li>250 ml mleka</li>
            <li>80 g cukru</li>
            <li>opcjonalnie: 1 `+ PL(3) + `y` + PL(8) + `ka bia` + PL(3) + `ego rumu i 1 ` + PL(3) + `y` + PL(8) + `ka bia` + PL(3) +`ego wina</li>
        `;
    } 
    static ITiramisu()
    {
        document.getElementById("T").innerHTML = "Tiramisu";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/kuchnia_wloska/tiramisu/tiramisu.html";
        document.getElementById("LinkPrzepisy").target = "_blank";
        document.getElementById("TrescPrzepisu").innerHTML =
        `
           Jajka w`+ PL(3) + `o` + PL(8) + `y` + PL(1) + ` do zlewu i przela` + PL(1) + ` gor` + PL(0) + `c` + PL(0) + ` wod` + PL(0) + `. Zaparzy` + PL(1) + ` kaw` + PL(2) + `, doda` + PL(1) + ` likier i ca` + PL(3) +`o` + PL(6) + `` + PL(1) + ` ostudzi` + PL(1) + `. Oddzieli` + PL(1) + ` ` + PL(8) + `` + PL(5) + `` + PL(3) + `tka od bia` + PL(3) +`ek.
           Wszystkie 4 `+ PL(8) + `` + PL(5) + `` + PL(3) + `tka ubi` + PL(1) + ` z cukrem pudrem na puszysty i jasny krem (ok. 7 minut) - najlepiej pocz` + PL(0) + `tkowo ubija` + PL(1) + ` na parze (w metalowej misce zawieszonej na garnku z paruj` + PL(0) + `c` + PL(0) + ` wod` + PL(0) + `), a gdy ` + PL(8) + `` + PL(5) + `` + PL(3) + `tka b` + PL(2) + `d` + PL(0) + ` ju` + PL(8) + ` ciep` + PL(3) + `e, odstawi` + PL(1) + ` z pary i dalej ubija` + PL(1) +`.
           Nast`+ PL(2) + `pnie dodawa` + PL(1) + ` porcjami (po 3 ` + PL(3) + `y` + PL(8) + `ki) mascarpone, ale ju` + PL(8) + ` w kr` + PL(5) + `tszych odst` + PL(2) +`pach czasu, ca` + PL(3) + `y czas ubijaj` + PL(0) + `c, a` + PL(8) + ` krem b` + PL(2) + `dzie g` + PL(2) +`sty i jednolity.
           W oddzielnej misce ubi`+ PL(1) + ` bia` + PL(3) + `ka na idealnie sztywn` + PL(0) + ` pian` + PL(2) + ` z dodatkiem ma` + PL(3) + `ej szczypty soli. Po` + PL(3) + `` + PL(0) + `czy` + PL(1) + ` je z kremem z ` + PL(8) + `` + PL(5) + `` + PL(3) + `tek i mascarpone delikatnie mieszaj` + PL(0) + `c ` + PL(3) + `y` + PL(8) + `k` + PL(0) +`.
           Po`+ PL(3) + `ow` + PL(2) + ` biszkopt` + PL(5) + `w na moment zanurza` + PL(1) + ` w kawie i uk` + PL(3) + `ada` + PL(1) + ` w prostok` + PL(0) + `tnym naczyniu np. ` + PL(8) + `aroodpornym lub szklanym (ok. 20 x 22 cm) lub w pojedynczych naczynkach. Posypa` + PL(1) + ` cienk` + PL(0) + ` warstw` + PL(0) +` kakao.
           Wy`+ PL(3) + `o` + PL(8) + `y` + PL(1) + ` po` + PL(3) + `ow` + PL(2) + ` kremu i przykry` + PL(1) + ` kolejn` + PL(0) + ` warstw` + PL(0) + ` nas` + PL(0) + `czonych biszkopt` + PL(5) + `w. Zn` + PL(5) + `w opr` + PL(5) + `szy` + PL(1) + ` kakao. Posmarowa` + PL(1) + ` reszt` + PL(0) + ` kremu, posypa` + PL(1) + ` kakao i wstawi` + PL(1) + ` do lod` + PL(5) + `wki na minimum 3 godziny lub na ca` + PL(3) + `` + PL(0) +` noc.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
             <li>350 ml zaparzonej kawy espresso</li>
             <li>25 ml likieru amaretto lub Maraschino</li>
             <li>2 jajka + 2 `+ PL(8) +``+ PL(5) +``+ PL(3) +`tka</li>
             <li>70 g cukru pudru</li>
             <li>500 g serka mascarpone</li>
             <li>300 g pod`+ PL(3) + `u` + PL(8) + `nych biszkopt` + PL(5) +`w</li>
             <li>ok. 3 `+ PL(3) + `y` + PL(8) +`ek gorzkiego kakao</li>
        `;
    }
}
//Przejscie miedzy Ankietą a Treścią
function OpenP() {
    document.getElementById("A").style.display = "none";
    document.getElementById("P").style.display = "block";
}
function OpenA() {
    document.getElementById("A").style.display = "block";
    document.getElementById("P").style.display = "none";
}
//Przejscie mędzy przepisami
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
        case 0: { lz.src = CZDesery.ZCremeBrulee(3); } break;
        case 1: { lz.src = CZDesery.ZPannaCotta(3); } break;
        case 2: { lz.src = CZDesery.ZTiramisu(3); } break;
    }
    switch (wp) {
        case 0: { pz.src = CZDesery.ZCremeBrulee(3); } break;
        case 1: { pz.src = CZDesery.ZPannaCotta(3); } break;
        case 2: { pz.src = CZDesery.ZTiramisu(3); } break;
    }
    switch (gi) {
        case 0: { CIDesery.ICremeBrulee(); } break;
        case 1: { CIDesery.IPannaCotta(); } break;
        case 2: { CIDesery.ITiramisu(); } break;
    }

}
//Galeria Zdjęć
ZmianaGalerii();
function ZmianaGalerii() {
    switch (gi)
    {
        case 0: { document.getElementById("Zd").src = CZDesery.ZCremeBrulee(0); } break;
        case 1: { document.getElementById("Zd").src = CZDesery.ZPannaCotta(0); } break;
        case 2: { document.getElementById("Zd").src = CZDesery.ZTiramisu(0); } break;
    }
}
var p = 0;
function Back(a) {
    p += a;
    if (p < 0) {
        p = 3;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZDesery.ZCremeBrulee(p); } break;
        case 1: { document.getElementById("Zd").src = CZDesery.ZPannaCotta(p); } break;
        case 2: { document.getElementById("Zd").src = CZDesery.ZTiramisu(p); } break;
    }
}
function Next(a) {
    p += a;
    if (p > 3) {
        p = 0;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZDesery.ZCremeBrulee(p); } break;
        case 1: { document.getElementById("Zd").src = CZDesery.ZPannaCotta(p);  } break;
        case 2: { document.getElementById("Zd").src = CZDesery.ZTiramisu(p); } break;
    }

}
function WyborMuzyki() {
    var czas;
    switch (gi) {
        case 0: { czas = 50.00; } break;
        case 1: { czas = 300.00; } break;
        case 2: { czas = 180.00; } break;
    }
    return czas;
}