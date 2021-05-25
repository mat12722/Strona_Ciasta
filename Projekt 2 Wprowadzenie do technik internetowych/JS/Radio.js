function Wybur(ch) {
    var klasa = document.getElementsByClassName("op");
    for (var i = 0; i < klasa.length; i++) {
        if (ch != i) {
            klasa[i].checked = false;
        }
    }
}
//<nav>
//    <input class="op" id="op0" type="radio" onclick="Wybur(0)" />
//    <label for="op0">Przepyszne</label>
//    <input class="op" id="op1" type="radio" onclick="Wybur(1)" />
//    <label for="op1">Pyszne</label>
//    <input class="op" id="op2" type="radio" onclick="Wybur(2)" />
//    <label for="op2">Œrednie</label>
//    <input class="op" id="op3" type="radio" onclick="Wybur(3)" />
//    <label for="op3">Ochydnie</label>
//</nav>
