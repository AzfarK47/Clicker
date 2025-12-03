let button = document.getElementById("button");

const mineralNames = ["wood", "stone", "iron", "gold", "diamond", "ruby", "emerald", "amythest", "onix"];
const upgradeNames = ["clicker", "people", "driller", "factory", "alchemy", "laser"];
const upgradeCosts = {
    "clicker": 10,
    "people": 100,
    "driller": 1000,
    "factory": 10000,
    "alchemy": 100000,
    "laser": 500000,
};
const upgradeClickPower = {
    "clicker": 0.01,
    "people": 0.05,
    "driller": 0.1,
    "factory": 0.5,
    "alchemy": 1,
    "laser": 5,
};
const mineralValues = {
    "wood": 0.5,
    "stone": 1,
    "iron": 2,
    "gold": 5,
    "diamond": 10,
    "ruby": 25,
    "emerald": 50,
    "amythest": 75,
    "onix": 100,
};

const minerals = {};
const upgrades = {};
for (const mineral of mineralNames) {
    minerals[mineral] = 0;
    upgrades[mineral] = {};
    for (const upgrade of upgradeNames) {
        upgrades[mineral][upgrade] = 0;
    }
}

let gameTime = 0n;


let money = 0;
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
let costofmineralupgrade = 200;
let mineralunlocked = 0
let lastmineralclicked = "wood";
let upgradepurchased = false;

function format(mineral) {
    if (mineral < 1e3) {
        return mineral.toFixed(0);
    } else if (mineral < 1e6) {
        return (mineral / 1e3).toFixed(2) + "K";
    } else if (mineral < 1e9) {
        return (mineral / 1e6).toFixed(2) + "M";
    } else if (mineral < 1e12) {
        return (mineral / 1e9).toFixed(2) + "B";
    } else if (mineral < 1e15) {
        return (mineral / 1e12).toFixed(2) + "T";
    } else if (mineral < 1e18) {
        return (mineral / 1e15).toFixed(2) + "Qa";
    } else if (mineral < 1e21) {
        return (mineral / 1e18).toFixed(2) + "Qi";
    } else if (mineral < 1e24) {
        return (mineral / 1e21).toFixed(2) + "Sx";
    } else if (mineral < 1e27) {
        return (mineral / 1e24).toFixed(2) + "Sp";
    } else if (mineral < 1e30) {
        return (mineral / 1e27).toFixed(2) + "Oc";
    } else if (mineral < 1e33) {
        return (mineral / 1e30).toFixed(2) + "No";
    } else if (mineral < 1e36) {
        return (mineral / 1e33).toFixed(2) + "De";
    }
}
function formatmoney() {
    if (money < 1e3) {
        return money.toFixed(0);
    } else if (money < 1e6) {
        return (money / 1e3).toFixed(2) + "K";
    } else if (money < 1e9) {
        return (money / 1e6).toFixed(2) + "M";
    } else if (money < 1e12) {
        return (money / 1e9).toFixed(2) + "B";
    } else if (money < 1e15) {
        return (money / 1e12).toFixed(2) + "T";
    } else if (money < 1e18) {
        return (money / 1e15).toFixed(2) + "Qa";
    } else if (money < 1e21) {
        return (money / 1e18).toFixed(2) + "Qi";
    } else if (money < 1e24) {
        return (money / 1e21).toFixed(2) + "Sx";
    } else if (money < 1e27) {
        return (money / 1e24).toFixed(2) + "Sp";
    } else if (money < 1e30) {
        return (money / 1e27).toFixed(2) + "Oc";
    } else if (money < 1e33) {
        return (money / 1e30).toFixed(2) + "No";
    } else if (money < 1e36) {
        return (money / 1e33).toFixed(2) + "De";
    }
}
function sellmaterials() {
    for (const mineral in minerals) {
        money += minerals[mineral] * mineralValues[mineral];
        minerals[mineral] = 0;
    }
}
function changeamount(mineral) {
    minerals[mineral] += 1;
    lastmineralclicked = mineral;
}
function showbutton() {
    if (money >= costofmineralupgrade / 10 && mineralunlocked < 8) {
        document.getElementById("mineralupgrade").style.display = "block"
    }
}
function unlockmineral() {
    if (money >= costofmineralupgrade) {
        if (mineralunlocked == 0 && minerals["wood"] >= 100) {
            document.getElementById("stonebutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["wood"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
            document.getElementById("mineralupgradecost").innerText = costofmineralupgrade + "money + 100 stone";
            document.getElementById("mineralupgradename").innerText = "UnlockIron"
        } else if (mineralunlocked == 1 && minerals["stone"] >= 100) {
            document.getElementById("ironbutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["stone"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
            document.getElementById("mineralupgradecost").innerText = costofmineralupgrade + "money + 100 iron";
            document.getElementById("mineralupgradename").innerText = "UnlockGold"
        } else if (mineralunlocked == 2 && minerals["iron"] >= 100) {
            document.getElementById("goldbutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["iron"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
            document.getElementById("mineralupgradecost").innerText = costofmineralupgrade + "money + 100 gold";
            document.getElementById("mineralupgradename").innerText = "UnlockDiamond"
        } else if (mineralunlocked == 3 && minerals["gold"] >= 100) {
            document.getElementById("diamondbutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["gold"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
            document.getElementById("mineralupgradecost").innerText = costofmineralupgrade + "money + 100 diamond";
            document.getElementById("mineralupgradename").innerText = "UnlockRuby"
        } else if (mineralunlocked == 4 && minerals["diamond"] >= 100) {
            document.getElementById("rubybutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["diamond"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
            document.getElementById("mineralupgradecost").innerText = costofmineralupgrade + "money + 100 ruby";
            document.getElementById("mineralupgradename").innerText = "UnlockEmerald"
        } else if (mineralunlocked == 5 && minerals["ruby"] >= 100) {
            document.getElementById("emeraldbutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["ruby"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
            document.getElementById("mineralupgradecost").innerText = costofmineralupgrade + "money + 100 emerald";
            document.getElementById("mineralupgradename").innerText = "UnlockAmythest"
        } else if (mineralunlocked == 6 && minerals["emerald"] >= 100) {
            document.getElementById("amythestbutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["emerald"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
            document.getElementById("mineralupgradecost").innerText = costofmineralupgrade + "money + 100 amythest";
            document.getElementById("mineralupgradename").innerText = "UnlockOnix"
        } else if (mineralunlocked == 7 && minerals["amythest"] >= 100) {
            document.getElementById("onixbutton").style.display = "block"
            money -= costofmineralupgrade;
            minerals["amythest"] -= 100
            document.getElementById("mineralupgrade").style.display = "none";
            mineralunlocked += 1;
            costofmineralupgrade *= 5;
        }
    }
}
function upgradepickaxe() {
    if (money >= costofpickaxeupgrade) {
        money -= costofpickaxeupgrade;
        multiplier *= 2;
        costofpickaxeupgrade *= 10;

        document.getElementById("pickaxeupgrade").innerHTML = costofpickaxeupgrade + "money";
    }
}
function addUpgrade(upgrade) {
    if (money >= upgradeCosts[upgrade]) {
        money -= upgradeCosts[upgrade];
        upgradeCosts[upgrade] *= 1.1;
        document.getElementById(upgrade + "text").innerHTML = upgradeCosts[upgrade].toFixed(1) + "money";
        upgrades[lastmineralclicked][upgrade]++;
    }
}
function applyUpgrades() {
    for (const mineral in upgrades) {
        for (const mineralUpgrade in upgrades[mineral]) {
            minerals[mineral] += upgradeClickPower[mineralUpgrade] * upgrades[mineral][mineralUpgrade];
        }
    }
}
function gameLoop() {
    document.getElementById("amount").innerText = money.toFixed(2);
    if (gameTime % 1n == 0n) applyUpgrades();
    document.getElementById("amountofwood").textContent = format(minerals["wood"]);
    document.getElementById("amountofstone").textContent = format(minerals["stone"]);
    document.getElementById("amountofiron").textContent = format(minerals["iron"]);
    document.getElementById("amountofgold").textContent = format(minerals["gold"]);
    document.getElementById("amountofdiamond").textContent = format(minerals["diamond"]);
    document.getElementById("amountofruby").textContent = format(minerals["ruby"]);
    document.getElementById("amountofemerald").textContent = format(minerals["emerald"]);
    document.getElementById("amountofamythest").textContent = format(minerals["amythest"]);
    document.getElementById("amountofonix").textContent = format(minerals["onix"]);
    document.getElementById("amount").textContent = formatmoney();
    showbutton();
    gameTime += 20n;
}
setInterval(gameLoop, 20);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mineralupgrade").style.display = "none";
    document.getElementById("stonebutton").style.display = "none";
    document.getElementById("ironbutton").style.display = "none";
    document.getElementById("goldbutton").style.display = "none";
    document.getElementById("diamondbutton").style.display = "none";
    document.getElementById("rubybutton").style.display = "none";
    document.getElementById("emeraldbutton").style.display = "none";
    document.getElementById("amythestbutton").style.display = "none";
    document.getElementById("onixbutton").style.display = "none";
});