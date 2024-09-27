let Tool = function (toolType) {
    this.toolType = toolType;
    this.useTool = function () {
        alert(this.useSound);
    }
    this.toString = function () {
        return "Komoputer zagral " + this.toolType
    }

}

let papier = new Tool("Papier");
let kamien = new Tool("Kamien");
let nozyce = new Tool("Nozyce");

let myToolbox = [];
myToolbox.push(papier, kamien, nozyce);

let x = 0
let y = 0
function graj(elem) {
    let losowyIndex = Math.floor(Math.random() * myToolbox.length)
    let p = document.getElementById("komp")
    p.innerHTML = myToolbox[losowyIndex].toString();

    let t = document.getElementById("pom")
    


    p = document.getElementById("komp")
    if(elem.id == "1"){
        if(losowyIndex == 0){
            t.innerHTML = "Remis"
        }
        if(losowyIndex == 1){
            t.innerHTML = "Wygrywa gracz"
            x++
        }
        if(losowyIndex == 2){
            t.innerHTML = "Wygrywa komputer"
            y++
        }
    }
    else if(elem.id == "2"){
        if(losowyIndex == 0){
            t.innerHTML = "Wygrywa komputer"
            y++
        }
        if(losowyIndex == 1){
            t.innerHTML = "Remis"
        }
        if(losowyIndex == 2){
            t.innerHTML = "Wygrywa gracz"
            x++
        }
    }
    else if(elem.id == "3"){
        if(losowyIndex == 0){
            t.innerHTML = "Wygrywa gracz"
            x++
        }
        if(losowyIndex == 1){
            t.innerHTML = "Wygrywa komputer"
            y++
        }
        if(losowyIndex == 2){
            t.innerHTML = "Remis"
        }
    }
    let g = document.getElementById("spom")
    g.innerHTML = "Gracz " + x + " | " + " Komputer " + y
    
}
