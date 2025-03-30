let button = document.getElementById("button");
let a = 0;
let numberThatChanges = 1;
let costofclickers = 10;
let amountofclickers = 0;
let costofpeople = 100;
let amountofpeople = 0;
let costofdriller = 500;
let amountofdrillers = 0;
let costoffactory = 5000;
let amountoffactorys = 0;
let costofalchemy = 100000;
let amountofalchemys = 0;
let costofbuttonupgrade = 100;
let multiplier = 1;
let buttonraritys = 0;
function changeamount() {
    a = a + 1 * multiplier;
    document.getElementById("amount").innerHTML = a;
}
function upgradebutton() {
    if (a >= costofbuttonupgrade) {
        a = a - costofbuttonupgrade;
        multiplier = multiplier + 0.5;
        numberThatChanges = 1;
        costofbuttonupgrade = costofbuttonupgrade * 10;
        numberThatChanges = numberThatChanges * multiplier;
        document.getElementById("buttonupgrade").innerHTML = costofbuttonupgrade + "clicks";
        buttonraritys = buttonraritys + 1;
    }
    if (buttonraritys == 1) {
        document.getElementById("buttontext").innerHTML = "Iron";
        button.style.backgroundColor = "#ffffff";
        button.style.borderColor = "#eeeeee";
    }
    else if (buttonraritys == 2) {
        document.getElementById("buttontext").innerHTML = "Gold";
        button.style.backgroundColor = "#ffdd00";
        button.style.borderColor = "#eecc00";
    }
    else if (buttonraritys == 3) {
        document.getElementById("buttontext").innerHTML = "Diamond";
        button.style.backgroundColor = "#00ffff";
        button.style.borderColor = "#00dddd";
    }
    else if (buttonraritys == 4) {
        document.getElementById("buttontext").innerHTML = "Ruby";
        button.style.backgroundColor = "#ff0000";
        button.style.borderColor = "#dd0000";
    }
    else if (buttonraritys == 5) {
        document.getElementById("buttontext").innerHTML = "Emerald";
        button.style.backgroundColor = "#00ff00";
        button.style.borderColor = "#00dd00";
    }
    else if (buttonraritys == 6) {
        document.getElementById("buttontext").innerHTML = "Amythest";
        button.style.backgroundColor = "#ff00ff";
        button.style.borderColor = "#dd00dd";
    }
    else if (buttonraritys == 7) {
        document.getElementById("buttontext").innerHTML = "Onix";
        button.style.backgroundColor = "#111111";
        button.style.borderColor = "#000000";
        button.style.color = "#ffffff"
    }
}

function autoclickers() {
    if (a >= costofclickers) {
        a = a - costofclickers;
        document.getElementById("amount").innerHTML = a;
        amountofclickers = amountofclickers + 1;
        costofclickers = costofclickers + 10;
        document.getElementById("autoclickupgrade").innerHTML = costofclickers + "clicks";
    }
}
function clickers() {
    a = a + amountofclickers * numberThatChanges;
    document.getElementById("amount").innerHTML = a;
}
function personupgrade() {
    if (a >= costofpeople) {
        a = a - costofpeople;
        document.getElementById("amount").innerHTML = a;
        amountofpeople = amountofpeople + 1;
        costofpeople = costofpeople + 100;
        document.getElementById("peopleupgrade").innerHTML = costofpeople + "clicks";
    }
}
function person() {
    a = a + amountofpeople * 10 * numberThatChanges;
    document.getElementById("amount").innerHTML = a;
}
function drillerupgrade() {
    if (a >= costofdriller) {
        a = a - costofdriller;
        document.getElementById("amount").innerHTML = a;
        amountofdrillers = amountofdrillers + 1;
        costofdriller = costofdriller + 500;
        document.getElementById("drillerupgrade").innerHTML = costofdriller + "clicks";
    }
}
function driller() {
    a = a + amountofdrillers * 50 * numberThatChanges;
    document.getElementById("amount").innerHTML = a;
}
function factoryupgrade() {
    if (a >= costoffactory) {
        a = a - costoffactory;
        document.getElementById("amount").innerHTML = a;
        amountoffactorys = amountoffactorys + 1;
        costoffactory = costoffactory + 5000;
        document.getElementById("factoryupgrade").innerHTML = costoffactory + "clicks";
    }
}
function factory() {
    a = a + amountoffactorys * 250 * numberThatChanges;
    document.getElementById("amount").innerHTML = a;
}
function alchemyupgrade() {
    if (a >= costofalchemy) {
        a = a - costofalchemy;
        document.getElementById("amount").innerHTML = a;
        amountofalchemys = amountofalchemys + 1;
        costofalchemy = costofalchemy + 100000;
        document.getElementById("alchemyupgrade").innerHTML = costofalchemy + "clicks";
    }
}
function alchemy() {
    a = a + amountofalchemys * 5000 * numberThatChanges;
    document.getElementById("amount").innerHTML = a;
}
function gameLoop() {
    clickers();
    person();
    driller();
    factory()
    alchemy();
}
setInterval(gameLoop, 1000);