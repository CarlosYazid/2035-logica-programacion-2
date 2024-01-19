function asignText(selector_,text) {document.querySelector(selector_).innerHTML = text;}
function numberSecretGen(range) {return (Math.ceil(Math.random()*range) + 1);}
function reset() {numberSecret = numberSecretGen(10); asignText("h1","Juego del numero secreto"); asignText("p","Indica un numero del 1 al 10");button.getAttribute("disabled");}

reset()
let button = document.getElementById("reiniciar");
button.addEventListener("click",reset());

function verifficNumber() {
    let numberUser = parseInt(document.querySelector("#num").value);
    if (numberUser == numberSecret) {
        asignText("h1","Has acertado");
        asignText("p",`El numero secreto es: ${numberUser}`);
        button.removeAttribute("disabled");
    } else {
        if (numberSecret < numberUser) {
            asignText("p",`El numero secreto es menor`);
        } else {
            asignText("p",`El numero secreto es mayor`);
        }
    }
}

