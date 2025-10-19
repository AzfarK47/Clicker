let button = document.getElementById("button");
let clicks = 0;
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
let costofpickaxeupgrade = 100;

function format() {
    if (clicks < 1e3) {
        document.getElementById("amount").textContent = clicks
    }else if(clicks < 1e6) {
        document.getElementById("amount").textContent = (clicks / 1e3).toFixed(2) + "K";
    }else if(clicks < 1e9) {
        document.getElementById("amount").textContent = (clicks / 1e6).toFixed(2) + "M";
    }
}
function changeamount() {
    clicks = clicks + 1 * multiplier;
}
function upgradebutton() {
    if (clicks >= costofbuttonupgrade) {
        clicks = clicks - costofbuttonupgrade;
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
function upgradepickaxe() {
    if (clicks >= costofpickaxeupgrade) {
        clicks -= costofpickaxeupgrade;
        multiplier *= 2;
        costofpickaxeupgrade *= 10;

        document.getElementById("pickaxeupgrade").innerHTML = costofpickaxeupgrade + "clicks";
    }
}
function autoclickers() {
    if (clicks >= costofclickers) {
        clicks = clicks - costofclickers;

        amountofclickers = amountofclickers + 1;
        costofclickers = costofclickers + 10;
        document.getElementById("autoclickupgrade").innerHTML = costofclickers + "clicks";
    }
}
function clickers() {
    clicks = clicks + amountofclickers * numberThatChanges * 0.01;

}
function personupgrade() {
    if (clicks >= costofpeople) {
        clicks = clicks - costofpeople;

        amountofpeople = amountofpeople + 1;
        costofpeople = costofpeople + 100;
        document.getElementById("peopleupgrade").innerHTML = costofpeople + "clicks";
    }
}
function person() {
    clicks = clicks + amountofpeople * 0.05 * numberThatChanges;

}
function drillerupgrade() {
    if (clicks >= costofdriller) {
        clicks = clicks - costofdriller;

        amountofdrillers = amountofdrillers + 1;
        costofdriller = costofdriller + 500;
        document.getElementById("drillerupgrade").innerHTML = costofdriller + "clicks";
    }
}
function driller() {
    clicks = clicks + amountofdrillers * 0.1 * numberThatChanges;

}
function factoryupgrade() {
    if (clicks >= costoffactory) {
        clicks = clicks - costoffactory;

        amountoffactorys = amountoffactorys + 1;
        costoffactory = costoffactory + 5000;
        document.getElementById("factoryupgrade").innerHTML = costoffactory + "clicks";
    }
}
function factory() {
    clicks = clicks + amountoffactorys * 0.25 * numberThatChanges;

}
function alchemyupgrade() {
    if (clicks >= costofalchemy) {
        clicks = clicks - costofalchemy;

        amountofalchemys = amountofalchemys + 1;
        costofalchemy = costofalchemy + 100000;
        document.getElementById("alchemyupgrade").innerHTML = costofalchemy + "clicks";
    }
}
function alchemy() {
    clicks = clicks + amountofalchemys * 1 * numberThatChanges;

}
function gameLoop() {
    clickers();
    person();
    driller();
    factory()
    alchemy();
    format();
}
setInterval(gameLoop, 1);