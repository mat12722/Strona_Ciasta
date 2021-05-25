var zestawIkon = "";
for (var j = 0; j < 10; j++)
{
    zestawIkon += " <img class='IkonkaN' src='' />";
}
document.getElementById("W0").innerHTML = zestawIkon;
var ZbiorZdjec = ["I-Ciasto.png", "I-Ciastka.png", "I-Deser.png", "I-Chleb.png"];
var Dana = document.getElementsByClassName("IkonkaN");
var opcje = new Array(10);
for (var i = 0; i < opcje.length; i++)
{
        opcje[i] =
        {
            Obraz: Math.round(Math.random() * 3),
            Pretkosc: Math.round(Math.random() * 15) + 5
        };
}
var StylElementy = document.createElement('style');
StylElementy.innerHTML =
`
     .IkonkaN
     {
        height: 100px;
        width: 100px;
        opacity: 0.5;
        margin-left: auto;
        display:none;
        z-index: -1;
     }
     #W0
     {
       
       border-top: 500px;
       z-index: -1;
       width: 100%;
       height: 100%;
       display: flex;
     }
     #W1
     { 
      position: absolute;
      overflow: hidden;
      width: 100%;
      height:1075px;
     }
     #W2
     {
        z-index: 0;
     }
     @keyframes Ruch {
            from {
                transform: translateY(-20vh);
            }

            to {
                transform: translateY(160vh);
            }
        }
     
`;
document.body.appendChild(StylElementy);
for (var i = 0; i < opcje.length; i++)
{
        Dana[i].src = "Z/Ikonki/" + ZbiorZdjec[opcje[i].Obraz];
        Dana[i].style.animation = "Ruch " + opcje[i].Pretkosc + "s  infinite";
        Dana[i].style.display = "block";
        Dana[i].style.opacity = 0.5;
}