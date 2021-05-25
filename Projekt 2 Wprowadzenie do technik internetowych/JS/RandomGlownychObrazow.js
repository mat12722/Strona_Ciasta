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


var rk, rg, r, i = 0;
var T = ["ZPrawo", "ZLewo"];
while (i < 2)
{
    var Z;
    rk = Math.round(Math.random() * 3);
    rg = Math.round(Math.random() * 2);
    r = Math.round(Math.random() * 3);
    //rk = 1;
    //rg = 1;
    //r = 2;
    switch (rk)
    {
        case 0:
        {
           switch (rg)
           {
               case 0:{ Z = CZCiasta.ZBrownie(r);} break;
               case 1: { Z=CZCiasta.ZSernik(r); } break;
               case 2: { Z=CZCiasta.ZSzarlotka(r); } break;
           }
        } break;
        case 1:
        {
            switch (rg)
            {
                case 0: { Z=CZCiastka.ZCiastlaOwsiane(r); } break;
                case 1: { Z=CZCiastka.ZCiastkazmaslemorzechowym(r); } break;
                case 2: { Z=CZCiastka.ZPierniki(r); } break;
            }
        } break;
        case 2:
        {
            switch (rg)
            {
                case 0: { Z=CZDesery.ZCremeBrulee(r); } break;
                case 1: { Z=CZDesery.ZPannaCotta(r); } break;
                case 2: { Z=CZDesery.ZTiramisu(r); } break;
            }
        } break;
        case 3:
        {
            switch (rg)
            {
                case 0:
                    {
                        //document.getElementById("C1").innerHTML = "elo";
                        Z = CZChleb.ZBulka(r);
                    } break;
                case 1: { Z=CZChleb.ZChlebRazowy(r); } break;
                case 2: { Z=CZChleb.ZChlebZytni(r); } break;
            }
        } break;
    }
    document.getElementById(T[i]).src = Z;
    i++;
}
