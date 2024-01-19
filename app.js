
let button = document.getElementById("reiniciar");
button.addEventListener("click",reset);
let input_ = document.querySelector("#num");
let button2 = document.querySelector("#intentar");
let attemps = 1;

function asignText(selector_,text) {document.querySelector(selector_).innerHTML = text;}
function numberSecretGen(range) {return (Math.ceil(Math.random()*range));}
function reset() {numberSecret = numberSecretGen(10); asignText("h1","Juego del numero secreto"); asignText("p","Indica un numero del 1 al 10"); button.setAttribute("disabled","true"); input_.removeAttribute("disabled"); button2.removeAttribute("disabled");}

reset()


function verifficNumber() {
    let numberUser = parseInt(document.querySelector("#num").value);
    if (numberUser == numberSecret) {

        asignText("h1","Has acertado");
        asignText("p",`Felicidades, acertaste en ${attemps}`+(attemps > 1 ? " intentos" : " intento"));
        
        button.removeAttribute("disabled");
        input_.setAttribute("disabled","true");
        button2.setAttribute("disabled","true");
        
        attemps = 1;
    } else {

        attemps++;
        if (numberSecret < numberUser) {
            asignText("p",`El numero secreto es menor`);
        } else {
            asignText("p",`El numero secreto es mayor`);
        }
    }
}

