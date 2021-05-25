function PL(x)
{
    var Znakpl = [261, 263, 281, 322, 324, 243, 347, 378, 380, 260, 262, 280, 321, 323, 211, 346, 377, 379];
    return String.fromCharCode(Znakpl[x]);
}
class CZCiasta {
    static ZBrownie(x) {
        var Zd = ["brownie1.jpg", "brownie2.jpg", "brownie3.jpg", "brownie4.jpg"];
        return "Z/CiastaZ/Brownie/" + Zd[x];
    }
    static ZSernik(x) {
        var Zd = ["sernik1.jpg", "sernik2.jpg", "sernik3.jpg", "sernik4.jpg"];
        return "Z/CiastaZ/Sernik/" + Zd[x];
    }
    static ZSzarlotka(x) {
        var Zd = ["szarlotka1.jpg", "szarlotka2.jpg", "szarlotka3.jpg", "szarlotka4.jpg"];
        return "Z/CiastaZ/Szarlotka/" + Zd[x];
    }
}
class CICiasta
{
    //`+PL(8)+`
    static IBrownie()
    {
        document.getElementById("T").innerHTML = "Brownie";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/przepis/ciasteczka-brownie";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
        `
              Do garnka w`+ PL(3) + `o` + PL(8) +`y` + PL(1) + ` pokrojone mas` + PL(3) + `o i zacz` + PL(0) + `` + PL(1) + ` podgrzewa` + PL(1) + ` na ma` + PL(3) + `ym ogniu. Gdy b` + PL(2) + `dzie w po` + PL(3) + `owie roztopione doda` + PL(1) + ` 150 g po` + PL(3) +`amanej na kosteczki czekolady i mieszaj` + PL(0) + `c roztopi` + PL(1) + `. Odstawi` + PL(1) +` z ognia.
              Piekarnik nagrza`+ PL(1) + ` do 180 stopni C. Jajka ubija` + PL(1) + ` z dodatkiem cukru przez ok. 5 - 7 minut na puszyst` + PL(0) + ` mas` + PL(2) +` (kogel-mogel).
              Doda`+ PL(1) + ` do nich mas` + PL(2) + ` czekoladow` + PL(0) + ` i wymiesza` + PL(1) + ` na jednolit` + PL(0) + ` mas` + PL(2) + `. Wsypa` + PL(1) + ` m` + PL(0) + `k` + PL(2) + `, proszek do pieczenia (oraz kakao je` + PL(6) + `li u` + PL(8) +`ywamy) i ponownie wymiesza` + PL(1) +`.
              Doda`+ PL(1) + ` reszt` + PL(2) + ` czekolady (50 g) pokrojonej w kosteczk` + PL(2) + ` oraz posiekane orzechy je` + PL(6) + `li ich u` + PL(8) + `ywamy. Wymiesza` + PL(1) + ` i wstawi` + PL(1) + ` na 10 minut do zamra` + PL(8) +`arki.
              Du`+ PL(8) + `` + PL(0) + ` blach` + PL(2) + ` z wyposa` + PL(8) + `enia piekarnika wy` + PL(3) + `o` + PL(8) +`y` + PL(1) +` papierem do pieczenia.
              Nabiera`+ PL(1) + ` po ` + PL(3) + `y` + PL(8) +`ce masy i wyk` + PL(3) + `ada` + PL(1) + ` j` + PL(0) + ` na blaszk` + PL(2) + ` z zachowaniem odst` + PL(2) + `p` + PL(5) + `w. Piec przez 10 minut. Podczas wyjmowania z piekarnika ciasteczka maj` + PL(0) + ` by` + PL(1) + ` mi` + PL(2) + `kkie w ` + PL(6) +`rodku, zastygn` + PL(0) +` po ostudzeniu.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
              <li>60 g mas`+ PL(3) +`a</li>
              <li>200 g gorzkiej czekolady lub ewentualnie lekko gorzkiej (deserowej 50% kakao)</li>
              <li>2 jajka (temp. pokojowa)</li>
              <li>150 g cukru</li>
              <li>50 g m`+ PL(0) +`ki pszennej</li>
              <li>1/4 `+ PL(3) + `y` + PL(8) +`eczki proszku do pieczenia</li>
              <li>opcjonalnie: 50 g orzech`+ PL(5) + `w (np. pekan lub w` + PL(3) + `oskich) i 1 ` + PL(3) + `y` + PL(8) +`ka kakao</li>
              <li>Dodaj tutaj link danego jedzenia</li>
        `;
    }
    static ISernik()
    {
        document.getElementById("T").innerHTML = "Sernik";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/przepis/sernik-tradycyjny";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
        `
           Mi`+ PL(2) + `kkie mas` + PL(3) + `o ubi` + PL(1) + ` na puszysto, stopniowo dodawa` + PL(1) + ` po jednym ` + PL(8) + `` + PL(5) + `` + PL(3) + `tku na przemian z ` + PL(3) + `y` + PL(8) +`k` + PL(0) + ` cukru pudru, ca` + PL(3) + `y czas dok` + PL(3) + `adnie ubijaj` + PL(0) + `c sk` + PL(3) +`adniki.
           Zmniejszy`+ PL(1) + ` obroty miksera do ` + PL(6) +`rednich, doda` + PL(1) + ` zmielony ser i po` + PL(3) + `` + PL(0) + `czy` + PL(1) + `. Teraz dodawa` + PL(1) + ` po kolei: cukier wanilinowy, ` + PL(6) +`mietank` + PL(2) + ` oraz m` + PL(0) + `k` + PL(2) + ` ziemniaczan` + PL(0) + ` ca` + PL(3) + `y czas miksuj` + PL(0) + `c sk` + PL(3) +`adniki na jednolit` + PL(0) + ` mas` + PL(2) +`.
           Na koniec wymiesza`+ PL(1) + ` (delikatnie, ale dok` + PL(3) + `adnie) z ubitymi na sztywno bia` + PL(3) +`kami.
           Przygotowa`+ PL(1) + ` tortownic` + PL(2) + ` o ` + PL(6) + `rednicy 26 cm, posmarowa` + PL(1) + ` mas` + PL(3) + `em i wysypa` + PL(1) + ` bu` + PL(3) + `k` + PL(0) + ` tart` + PL(0) + ` lub mielonymi migda` + PL(3) + `ami lub dno wy` + PL(3) + `o` + PL(8) +`y` + PL(1) +` papierem do pieczenia.
           Mas`+ PL(2) + ` serow` + PL(0) + ` wy` + PL(3) + `o` + PL(8) +`y` + PL(1) + ` do tortownicy i wstawi` + PL(1) + ` do piekarnika nagrzanego do 170 stopni C. Piec przez 60 minut. Sernik studzi` + PL(1) + ` stopniowo wyjmuj` + PL(0) + `c z piekarnika (najpierw po trochu otwieraj` + PL(0) + `c drzwiczki i lekko wysuwaj` + PL(0) + `c sernik, w ko` + PL(4) +`cu wyj` + PL(0) + `` + PL(1) +` z piekarnika).
           Zrumieniony wierzch sernika posypa`+ PL(1) +` cukrem pudrem lub pola`+ PL(1) +` polew`+ PL(0) + ` czekoladow` + PL(0) +`.
        `
        document.getElementById("ListaPrzepis").innerHTML =
        `
            <li>1 kg zmielonego twarogu</li>
            <li>250 g mi`+ PL(2) + `kkiego mas` + PL(3) +`a</li>
            <li>1 i 1/3 szklanki cukru pudru</li>
            <li>6 jajek</li>
            <li>1 opakowanie cukru wanilinowego</li>
            <li>150 ml `+ PL(6) +`mietanki 36%</li>
            <li>4 `+ PL(3) + `y` + PL(8) +`ki m`+ PL(0) +`ki ziemniaczanej</li>
        `
    }
    static ISzarlotka()
    {
        document.getElementById("T").innerHTML = "Szarlotka";
        document.getElementById("LinkPrzepisy").href = "https://www.kwestiasmaku.com/przepis/szarlotka";
        document.getElementById("LinkPrzepisy").target = "_blank"; 
        document.getElementById("TrescPrzepisu").innerHTML =
        `
            Jab`+ PL(3) + `ka obra` + PL(1) + `, pokroi` + PL(1) + ` na ` + PL(1) + `wiartki i wyci` + PL(0) + `` + PL(1) + ` gniazda nasienne. Pokroi` + PL(1) + ` na mniejsze kawa` + PL(3) + `ki i w` + PL(3) + `o` + PL(8) +`y` + PL(1) + ` do szerokiego garnka lub na g` + PL(3) +`` + PL(2) + `bok` + PL(0) + ` patelni` + PL(2) +`.
            Doda`+ PL(1) + ` cukier i cynamon i sma` + PL(8) + `y` + PL(1) + ` przez ok. 20 minut co chwil` + PL(2) + ` mieszaj` + PL(0) + `c, a` + PL(8) +` jab` + PL(3) +`ka zmi` + PL(2) + `kn` + PL(0) + ` i zaczn` + PL(0) + ` si` + PL(2) +` rozpada` + PL(1) +`.
            Do m`+ PL(0) + `ki doda` + PL(1) + ` pokrojone w kostk` + PL(2) + ` zimne mas` + PL(3) +`o, proszek do pieczenia, cukier i cukier wanilinowy.
            Sk`+ PL(3) + `adniki po` + PL(3) + `` + PL(0) + `czy` + PL(1) + ` w jednolite ciasto (mikserem lub r` + PL(2) + `cznie), pod koniec doda` + PL(1) + ` jajko (ciasto b` + PL(2) + `dzie do` + PL(6) +`` + PL(1) + ` mi` + PL(2) +`kkie).
            Podzieli`+ PL(1) + ` je na p` + PL(5) + `` + PL(3) + ` i w` + PL(3) + `o` + PL(8) + `y` + PL(1) + ` obie po` + PL(3) + `` + PL(5) + `wki do zamra` + PL(8) +`arki na ok. 15 minut.
            Piekarnik nagrza`+ PL(1) + ` do 180 st C. Przygotowa` + PL(1) + ` niedu` + PL(8) +`` + PL(0) + ` form` + PL(2) +`*.
            Wyj`+ PL(0) + `` + PL(1) + ` jedn` + PL(0) + ` po` + PL(3) + `` + PL(5) + `wk` + PL(2) + ` ciasta z zamra` + PL(8) + `arki, pokroi` + PL(1) + ` no` + PL(8) + `em na plasterki i wylepi` + PL(1) + ` nimi sp` + PL(5) + `d formy. Nast` + PL(2) + `pnie wy` + PL(3) + `o` + PL(8) +`y` + PL(1) + ` na to jab` + PL(3) +`ka.
            Pozosta`+ PL(3) + `e ciasto zetrze` + PL(1) + ` na tarce bezpo` + PL(6) + `rednio na jab` + PL(3) + `ka (lub pokroi` + PL(1) + ` ciasto na plasterki i u` + PL(3) + `o` + PL(8) +`y` + PL(1) +` na wierzchu).
            Wstawi`+ PL(1) + ` do piekarnika i piec przez ok. 50 minut lub na z` + PL(3) +`oty kolor. Upieczon` + PL(0) + ` szarlotk` + PL(2) +` przestudzi` + PL(1) +` i posypa` + PL(1) +` cukrem pudrem.
        `;
        document.getElementById("ListaPrzepis").innerHTML =
        `
            <li>1,5 kg jab`+ PL(3) + `ek na szarlotk` + PL(2) + ` (twardych i kwa` + PL(6) +`nych np. szara reneta)</li>
            <li>5 `+ PL(3) + `y` + PL(8) +`ek cukru</li>
            <li>1/2 `+ PL(3) + `y` + PL(8) +`eczki cynamonu</li>
            <li>300 g m`+ PL(0) +`ki</li>
            <li>250 g zimnego mas`+ PL(3) + `a (50 g mas` + PL(3) + `a mo` + PL(8) +`na zast`+ PL(0) + `pi` + PL(1) +` smalcem)</li>
            <li>1,5 `+ PL(3) + `y` + PL(8) +`eczki proszku do pieczenia</li>
            <li>5 `+ PL(3) + `y` + PL(8) +`ek cukru</li>
            <li>1 `+ PL(3) + `y` + PL(8) +`ka cukru wanilinowego</li>  
            <li>1 jajko</li>
            <li>Do posypania: cukier puder</li>
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
        case 0: { lz.src = CZCiasta.ZBrownie(3); } break;
        case 1: { lz.src = CZCiasta.ZSernik(3); } break;
        case 2: { lz.src = CZCiasta.ZSzarlotka(3); } break;
    }
    switch (wp) {
        case 0: { pz.src = CZCiasta.ZBrownie(3); } break;
        case 1: { pz.src = CZCiasta.ZSernik(3); } break;
        case 2: { pz.src = CZCiasta.ZSzarlotka(3); } break;
    }
    switch (gi) {
        case 0: { CICiasta.IBrownie(); } break;
        case 1: { CICiasta.ISernik(); } break;
        case 2: { CICiasta.ISzarlotka(); } break;
    }

}
ZmianaGalerii();
function ZmianaGalerii() {
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZCiasta.ZBrownie(0); } break;
        case 1: { document.getElementById("Zd").src = CZCiasta.ZSernik(0); } break;
        case 2: { document.getElementById("Zd").src = CZCiasta.ZSzarlotka(0); } break;
    }
}
var p = 0;
function Back(a) {
    p += a;
    if (p < 0) {
        p = 3;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZCiasta.ZBrownie(p); } break;
        case 1: { document.getElementById("Zd").src = CZCiasta.ZSernik(p); } break;
        case 2: { document.getElementById("Zd").src = CZCiasta.ZSzarlotka(p); } break;
    }
}
function Next(a) {
    p += a;
    if (p > 3) {
        p = 0;
    }
    switch (gi) {
        case 0: { document.getElementById("Zd").src = CZCiasta.ZBrownie(p); } break;
        case 1: { document.getElementById("Zd").src = CZCiasta.ZSernik(p); } break;
        case 2: { document.getElementById("Zd").src = CZCiasta.ZSzarlotka(p); } break;
    }

}
function WyborMuzyki() {
    var czas;
    switch (gi) {
        case 0: { czas = 10.00; } break;
        case 1: { czas = 60.00; } break;
        case 2: { czas = 50.00; } break;
    }
    return czas;
}