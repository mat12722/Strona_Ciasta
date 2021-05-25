function PL(x)
{
    var Znakpl = [261, 263, 281, 322, 324, 243, 347, 378, 380, 260, 262, 280, 321, 323, 211, 346, 377, 379];
    return String.fromCharCode(Znakpl[x]);
}
class CZChleb {
    static ZBulka(x) {
        var Zd = ["kajzerki1.jpg", "kajzerki2.jpg", "kajzerki3.jpg", "kajzerki4.jpg"];
        return "Z/ChlebZ/Bulka/" + Zd[x];
    }
    static ZChlebRazowy(x) {
        var Zd = ["razowy1.jpg", "razowy2.jpg", "razowy3.jpg", "razowy4.jpg"];
        return "Z/ChlebZ/Chleb razowy/" + Zd[x];
    }
    static ZChlebZytni(x) {
        var Zd = ["zytni1.jpg", "zytni2.jpg", "zytni3.jpg", "zytni4.jpg"];
        return "Z/ChlebZ/Chleb zytni/" + Zd[x];
    }
}
class CIChleb
{
    static IBulka()
    {
        document.getElementById("T").innerHTML = "Bulka";
        document.getElementById("LinkPrzepisy").href = "https://www.domowe-wypieki.pl/przepisy/pieczywo/bulki-bagietki/123-kajzerki";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
        `
            Wszystkie sk` + PL(3) + `adniki prze` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` do miski i zagnie` + PL(6) + `` + PL(1) + `. Od momentu, gdy ciasto zacznie ` + PL(3) + `adnie odchodzi` + PL(1) + ` od miski wyrabia` + PL(1) + ` jeszcze ok. 5 minut. Ciasto odstawi` + PL(1) + ` na 10 minut.
            Po tym czasie wyrobi` + PL(1) + ` ponownie przez ok. 5 minut. Ciasto powinno by` + PL(1) + ` pr` + PL(2) + `` + PL(8) + `ne, o wygl` + PL(0) + `dzie i konsystencji plasteliny.
            Ciasto prze` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` do miski lekko wysmarowanej olejem. Misk` + PL(2) + ` z ciastem przykry` + PL(1) + ` ` + PL(6) + `ciereczk` + PL(0) + ` i pozostawi` + PL(1) + ` na ok. 1 godzin` + PL(2) + ` w ciep` + PL(3) + `ym miejscu do wyro` + PL(1) + `ni` + PL(2) + `cia.
            Wyro` + PL(6) + `ni` + PL(2) + `te ciasto podzieli` + PL(1) + ` na 8 cz` + PL(2) + `` + PL(6) + `ci. Z ka` + PL(8) + `dej cz` + PL(2) + `` + PL(6) + `ci uformowa` + PL(1) + ` bu` + PL(3) + `k` + PL(2) + `, u` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` na blasze wy` + PL(3) + `o` + PL(8) + `onej papierem do pieczenia, lekko sp` + PL(3) + `aszczy` + PL(1) + ` r` + PL(2) + `k` + PL(0) + `, przykry` + PL(1) + ` i pozostawi` + PL(1) + ` na ok. 45 minut do wyro` + PL(6) + `ni` + PL(2) + `cia.
            (Nie d` + PL(3) + `u` + PL(8) + `ej, bo si` + PL(2) + ` za bardzo napusz` + PL(0) + ` i strac` + PL(0) + ` konsystencj` + PL(2) + ` kajzerek).
            Wyro` + PL(6) + `ni` + PL(2) + `te bu` + PL(3) + `ki mo` + PL(8) + `na naci` + PL(0) + `` + PL(1) + `. (Polecam ` + PL(8) + `yletk` + PL(2) + `, ale mo` + PL(8) + `e by` + PL(1) + ` te` + PL(8) + ` ostry n` + PL(5) + `` + PL(8) + `).
            Bu` + PL(3) + `ki piec w nagrzanym piekarniku ok. 15- 17 minut w temperaturze 225 C, grza` + PL(3) + `ka g` + PL(5) + `ra- d` + PL(5) + `` + PL(3) + `
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
            <li>3 szklanki m` + PL(0) + `ki pszennej (450 g)</li>
            <li>3/4 szklanki letniej wody (190 ml)</li>
            <li>1 i 1/2 ` + PL(3) + `y` + PL(8) + `eczki (5g) dro` + PL(8) + `d` + PL(8) + `y instant (lub 20g ` + PL(6) + `wie` + PL(8) + `ych dro` + PL(8) + `d` + PL(8) + `y)</li>
            <li>1 i 1/2 ` + PL(3) + `y` + PL(8) + `eczki cukru</li>
            <li>1 p` + PL(3) + `aska ` + PL(3) + `y` + PL(8) + `eczka soli</li>
            <li>1 jajko</li>
            <li>2 ` + PL(3) + `y` + PL(8) + `ki mas` + PL(3) + `a, temperatura pokojowa</li>
        `;
    }
    static IChlebRazowy()
    {
        document.getElementById("T").innerHTML = "Chleb Razowy";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/domowa_piekarnia/chleb_razowy/przepis.html";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
        `
             M` + PL(0) + `k` + PL(2) + ` przesia` + PL(1) + ` do du` + PL(8) + `ej miski (doda` + PL(1) + ` otr` + PL(2) + `by zgromadzone na sitku po przesianiu m` + PL(0) + `ki razowej), doda` + PL(1) + ` s` + PL(5) + `l, pokruszone dro` + PL(8) + `d` + PL(8) + `e i wszystko wymiesza` + PL(1) + ` ` + PL(3) + `y` + PL(8) + `k` + PL(0) + `. 
             Wla` + PL(1) + ` wod` + PL(2) + ` i wymiesza` + PL(1) + ` sk` + PL(3) + `adniki ` + PL(3) + `y` + PL(8) + `k` + PL(0) + ` (kr` + PL(5) + `tko, do po` + PL(3) + `` + PL(0) + `czenia si` + PL(2) + ` sk` + PL(3) + `adnik` + PL(5) + `w, przez oko` + PL(3) + `o p` + PL(5) + `` + PL(3) + ` minuty). Misk` + PL(2) + ` z ciastem przykry` + PL(1) + ` talerzem lub foli` + PL(0) + ` i odstawi` + PL(1) + ` do wyro` + PL(6) + `ni` + PL(2) + `cia na oko` + PL(3) + `o 14 godzin (minimum 12 godzin), 
             najlepiej na noc (w temperaturze pokojowej, np. na blacie kuchennym).
             Stolnic` + PL(2) + ` opr` + PL(5) + `szy` + PL(1) + ` bia` + PL(3) + `` + PL(0) + ` m` + PL(0) + `k` + PL(0) + ` i wy` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` ciasto. Z` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` ciasto trzy lub cztery razy, za ka` + PL(8) + `dym razem na p` + PL(5) + `` + PL(3) + ` (ciasto b` + PL(2) + `dzie do` + PL(6) + `` + PL(1) + ` rzadkie i nie utworzy kszta` + PL(3) + `tnej kulki).
             Na blacie kuchennym po` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` czyst` + PL(0) + ` ` + PL(6) + `ciereczk` + PL(2) + ` kuchenn` + PL(0) + `, opr` + PL(5) + `szy` + PL(1) + ` j` + PL(0) + ` m` + PL(0) + `k` + PL(0) + ` razow` + PL(0) + ` i po` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` w to miejsce z` + PL(3) + `o` + PL(8) + `one ciasto ` + PL(3) + `` + PL(0) + `czeniem do do` + PL(3) + `u. 
             Przykry` + PL(1) + ` ciasto wystaj` + PL(0) + `cymi bokami ` + PL(6) + `ciereczki i zostawi` + PL(1) + ` w ciep` + PL(3) + `ym miejscu w kuchni na 1 - 2 godziny do podwojenia obj` + PL(2) + `to` + PL(6) + `ci.
             Na p` + PL(5) + `` + PL(3) + ` godziny przed ko` + PL(4) + `cem wyrastania nagrza` + PL(1) + ` piekarnik do 240 - 250 stopni C, ustawiaj` + PL(0) + `c kratk` + PL(2) + ` w dolnej 1/3 cz` + PL(2) + `` + PL(6) + `ci piekarnika. 
             Na kratce ustawi` + PL(1) + ` przykryty garnek ` + PL(8) + `aroodporny np. ` + PL(8) + `eliwny emaliowany i nagrzewa` + PL(1) + ` go razem z piekarnikiem.
             Ostro` + PL(8) + `nie, u` + PL(8) + `ywaj` + PL(0) + `c r` + PL(2) + `kawic kuchennych, wyj` + PL(0) + `` + PL(1) + ` gor` + PL(0) + `cy garnek z piekarnika i zdj` + PL(0) + `` + PL(1) + ` pokryw` + PL(2) + `. 
             Umie` + PL(6) + `ci` + PL(1) + ` ciasto w garnku (zsun` + PL(0) + `` + PL(0) + ` ze ` + PL(6) + `cierki, uwa` + PL(8) + `aj` + PL(2) + `c aby nie przysypa` + PL(1) + ` chleba zbyt du` + PL(8) + `` + PL(0) + ` ilo` + PL(6) + `ci` + PL(0) + ` m` + PL(0) + `ki) lub szybko i ostro` + PL(8) + `nie przenie` + PL(6) + `` + PL(1) + ` chleb do garnka w opr` + PL(5) + `szonych m` + PL(0) + `k` + PL(0) + ` d` + PL(3) + `oniach). 
             Nale` + PL(8) + `y uwa` + PL(8) + `a` + PL(1) + `, bo garnek b` + PL(2) + `dzie bardzo gor` + PL(0) + `cy. Garnek przykry` + PL(1) + ` i piec przez 30 minut. Zdj` + PL(0) + `` + PL(1) + ` pokryw` + PL(2) + ` i piec dalej a` + PL(8) + ` chleb b` + PL(2) + `dzie dobrze zrumieniony ale nie przypalony przez 15 - 30 minut 
             (zwykle piek` + PL(2) + ` 20 minut, po 5 minutach pieczenia licz` + PL(0) + `c od zdj` + PL(2) + `cia pokrywy k` + PL(3) + `ad` + PL(2) + ` na chlebie kawa` + PL(3) + `ek folii aluminiowej, aby wierzch si` + PL(2) + ` nie przypali` + PL(3) + ` i by` + PL(3) + ` idealnie zrumieniony).
             Wyj` + PL(0) + `` + PL(1) + ` garnek z chlebem z piekarnika, otworzy` + PL(1) + `, po kilku minutach wyj` + PL(0) + `` + PL(1) + ` chleb go z garnka i od` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` na metalow` + PL(2) + ` kratk` + PL(2) + ` do ca` + PL(3) + `kowitego ostudzenia. Pokroi` + PL(1) + ` po ostudzeniu. Z czerstwego chleba mo` + PL(8) + `na zrobi` + PL(1) + ` pyszne grzanki z tostera.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
            <li>300 g m` + PL(0) + `ki</li>
            <li>100 g m` + PL(0) + `ki razowej</li>
            <li>1 i 1/2 ` + PL(3) + `y` + PL(8) + `eczki soli</li>
            <li>20 g ` + PL(6) + `wie` + PL(8) + `ych dro` + PL(8) + `d` + PL(8) + `y (lub 1 ` + PL(3) + `y` + PL(8) + `eczka suchych dro` + PL(8) + `d` + PL(8) + `y)</li>
            <li>300 g ch` + PL(3) + `odnej wody</li>
            <li>m` + PL(0) + `ka razowa lub otr` + PL(2) + `by do obsypania chleba</li>
            <li>bia` + PL(3) + `ej m` + PL(0) + `ki pszennej lub orkiszowej (uniwersalnej, tortowej typ 500 lub 700, ale najlepiej chlebowej typ 850)</li>
            <li>m` + PL(0) + `ki razowej pszennej lub orkiszowej np. typ 1850</li>
        `;
    }
    static IChlebZytni()
    {
        document.getElementById("T").innerHTML = "Chleb " + PL(17) + "ytni";
        document.getElementById("LinkPrzepisy").href = "https://www.domowe-wypieki.pl/przepisy/pieczywo/chleby/1177-chleb-zytni-ze-slonecznikiem-na-zakwasie";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
        `
           Form` + PL(2) + ` keksow` + PL(0) + ` o d` + PL(3) + `ugo` + PL(6) + `ci 30 cm wysmarowa` + PL(1) + ` dobrze mas` + PL(3) + `em. Odstawi` + PL(1) + ` na bok.
           Ziarna s` + PL(3) + `onecznika podpra` + PL(8) + `y` + PL(1) + ` chwil` + PL(2) + ` na suchej patelni, a` + PL(8) + ` zaczn` + PL(0) + ` pachnie` + PL(1) + `. Nast` + PL(2) + `pnie prze` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` do miski i zala` + PL(1) + ` bardzo zimn` + PL(0) + ` wod` + PL(8) + `. (Wody doda` + PL(1) + ` na oko, wi` + PL(2) + `cej ni` + PL(8) + ` do przykrycia ziaren). Odstawi` + PL(1) + ` na bok.
           W innej misce wymiesza` + PL(1) + ` wod` + PL(2) + ` (podan` + PL(0) + ` w sk` + PL(3) + `adnikach) z zakwasem, a` + PL(8) + ` si` + PL(2) + ` w wodzie rozpu` + PL(6) + `ci.
           W du` + PL(8) + `ej misce wymiesza` + PL(1) + ` m` + PL(0) + `ki ` + PL(8) + `ytnie z sol` + PL(0) + `. Doda` + PL(1) + ` wod` + PL(2) + ` z zakwasem i zagnie` + PL(6) + `` + PL(1) + ` ciasto (polecam robotem kuchennym), tylko do momentu, a` + PL(8) + ` m` + PL(0) + `ka po` + PL(3) + `` + PL(0) + `czy si` + PL(2) + ` z wod` + PL(0) + `. (Nie trzeba ciasta wyrabia` + PL(1) + ` d` + PL(3) + `ugo. Tylko do momentu po` + PL(3) + `` + PL(0) + `czenia si` + PL(2) + ` sk` + PL(3) + `adnik` + PL(5) + `w).
           Ziarna s` + PL(3) + `onecznika ods` + PL(0) + `czy` + PL(1) + ` na sitku i doda` + PL(1) + ` do zagniecionego ciasta. Jeszcze raz zagnie` + PL(6) + `` + PL(1) + `, aby s` + PL(3) + `onecznik r` + PL(5) + `wnomiernie roz` + PL(3) + `o` + PL(8) + `y` + PL(3) + ` si` + PL(2) + ` w cie` + PL(6) + `cie.
           Ciasto prze` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` do formy i wyr` + PL(5) + `wna` + PL(1) + ` jego powierzchni` + PL(2) + ` np. tyln` + PL(0) + ` stron` + PL(0) + ` ` + PL(3) + `y` + PL(8) + `ki zamoczonej w wodzie lub zwil` + PL(8) + `onymi r` + PL(2) + `kami.
           Przykry` + PL(1) + ` lnian` + PL(0) + ` ` + PL(6) + `ciereczk` + PL(0) + ` i odstawi` + PL(1) + ` w ciep` + PL(3) + `e miejsce do wyro` + PL(6) + `ni` + PL(2) + `cia na ok. 12 godzin. (Czas wyrastania zale` + PL(8) + `y od temperatury otoczenia oraz od tego, jak bardzo aktywny jest zakwas. U mnie temperatura pomieszczenia wynosi` + PL(3) + `a 24 stopnie). Chleb jest gotowy, gdy wype` + PL(3) + `ni form` + PL(2) + `. (Wa` + PL(8) + `ne, aby nie przer` + PL(5) + `s` + PL(3) + `. Przero` + PL(6) + `ni` + PL(2) + `te ciasto zapadnie si` + PL(2) + ` po` + PL(6) + `rodku. Dlatego nale` + PL(8) + `y zagl` + PL(0) + `da` + PL(1) + ` do chleba).
           Przed pieczeniem spryska` + PL(1) + ` chleb zimn` + PL(0) + ` wod` + PL(0) + `.
           Piec w nagrzanym piekarniku ok. 60 minut w temperaturze 200 C, grza` + PL(3) + `ka g` + PL(5) + `ra- d` + PL(5) + `` + PL(3) + `.
           Gotowy chleb wyci` + PL(0) + `gn` + PL(0) + `` + PL(1) + ` z piekarnika, prze` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` na kratk` + PL(2) + ` kuchenn` + PL(0) + ` i pozostawi` + PL(1) + ` do ca` + PL(3) + `kowitego ostygni` + PL(2) + `cia.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
           <li>100 g ziaren s` + PL(3) + `onecznika</li>
           <li>25 g aktywnego zakwasu ` + PL(8) + `ytniego</li>
           <li>275 g m` + PL(0) + `ki ` + PL(8) + `ytniej razowej typ 2000</li>
           <li>275 g m` + PL(0) + `ki ` + PL(8) + `ytniej typ 1150</li>
           <li>18 g soli</li>
           <li>520 g letniej wody</li>
        `;
    }
}
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
        case 0: { lz.src = CZChleb.ZBulka(3); } break;
        case 1: { lz.src = CZChleb.ZChlebRazowy(3); } break;
        case 2: { lz.src = CZChleb.ZChlebZytni(3); } break;
    }
    switch (wp) {
        case 0: { pz.src = CZChleb.ZBulka(3); } break;
        case 1: { pz.src = CZChleb.ZChlebRazowy(3); } break;
        case 2: { pz.src = CZChleb.ZChlebZytni(3); } break;
    }
    switch (gi) {
        case 0: { CIChleb.IBulka(); } break;
        case 1: { CIChleb.IChlebRazowy(); } break;
        case 2: { CIChleb.IChlebZytni(); } break;
    }
}
ZmianaGalerii();
function ZmianaGalerii() {
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZChleb.ZBulka(0); } break;
        case 1: { document.getElementById("Zd").src = CZChleb.ZChlebRazowy(0); } break;
        case 2: { document.getElementById("Zd").src = CZChleb.ZChlebZytni(0); } break;
    }
}
var p = 0;
function Back(a) {
    p += a;
    if (p < 0) {
        p = 3;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZChleb.ZBulka(p); } break;
        case 1: { document.getElementById("Zd").src = CZChleb.ZChlebRazowy(p); } break;
        case 2: { document.getElementById("Zd").src = CZChleb.ZChlebZytni(p); } break;
    }
}
function Next(a) {
    p += a;
    if (p > 3) {
        p = 0;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZChleb.ZBulka(p); } break;
        case 1: { document.getElementById("Zd").src = CZChleb.ZChlebRazowy(p); } break;
        case 2: { document.getElementById("Zd").src = CZChleb.ZChlebZytni(p); } break;
    }

}
function WyborMuzyki() {
    var czas;
    switch (gi) {
        case 0: { czas = 15.00; } break;
        case 1: { czas = 20.00; } break;
        case 2: { czas = 60.00; } break;
    }
    return czas;
}
