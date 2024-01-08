const debug = window.location.href.match(/^http:\/\/127\.0\.0\.1:\d{4}/g) !== null;
let debugLuck = 5;
class secureLogs {
    #spawnLogs;
    #verifiedLogs;
    #logsTimer;
    #maxLuck = [1, 1.2, 1.35, 1.8, 2, 5, 10, 3, 4, 20, 17.5];
    constructor() {
        this.#spawnLogs = [];
        this.#verifiedLogs = [];
        this.#logsTimer = null;
    }
    createLog(r, c, intended, obj, luck) {
        let luckModifier = 1;
        if (gears[1])
            luckModifier *= 1.1;
        if (gears[5])
            luckModifier *= 1.6;
        const maxLuck = (this.#maxLuck[currentPickaxe] * luckModifier) + 1;
        if (obj.stack.includes("main.js") && luck <= maxLuck) {
            if (mine[r][c] === "⬜")
                this.#spawnLogs.push([r, c, intended, luck]);
        }
    }
    verifyLog(r, c) {
        for (let i = 0; i < this.#spawnLogs.length; i++) {
            if (this.#spawnLogs[i][0] === r && this.#spawnLogs[i][1] === c) {
                if (mine[r][c] === this.#spawnLogs[i][2]) {
                    const num = this.#spawnLogs[i][3];
                    this.#spawnLogs.splice(i, 1);
                    this.#verifiedLogs.push([mine[r][c], [r, c], new Date(), false, "Normal", num]);
                    break;
                }
            }
        }
    }
    verifyFind(block, r, c, variant) {
        for (let i = 0; i < this.#verifiedLogs.length; i++) {
            if (this.#verifiedLogs[i][1][0] === r && this.#verifiedLogs[i][1][1] === c) {
                if (block === this.#verifiedLogs[i][0]) {
                    this.#verifiedLogs[i][3] = true;
                    this.#verifiedLogs[i][4] = variant;
                    break;
                }
            }
        }
    }
    showLogs() {
        if (document.getElementById("dataExport").style.display === "block") {
                clearInterval(this.#logsTimer);
                this.#logsTimer = null;
                let element = document.createElement("p");
                if (document.getElementById("generatedLogs") !== null)
                    document.getElementById("generatedLogs").remove();
                element.id = "generatedLogs";
                document.getElementById("logHolder").appendChild(element);
                let output = "";
                for (let i = 0; i < this.#verifiedLogs.length; i++) {
                    let multi = multis[names.indexOf(this.#verifiedLogs[i][4])];
                    output += this.#verifiedLogs[i][0] + ", " + this.#verifiedLogs[i][2] + ", " + this.#verifiedLogs[i][3] + ", " + this.#verifiedLogs[i][4] + ", ";
                    output += this.#verifiedLogs[i][1][0] + ", ";
                    output += Math.floor(((1 / oreList[this.#verifiedLogs[i][0]][0]) * multi) / this.#verifiedLogs[i][5]) + ", " + this.#verifiedLogs[i][5] + "." + Math.log10(this.#verifiedLogs[i][5] * this.#verifiedLogs[i][1][0]) + "<br>";
                }
                this.#logsTimer = setInterval(this.#reloadLogs, 50, output!==""?output:"none");
        } else {
            clearInterval(this.#logsTimer);
            this.#logsTimer = null;
            if (document.getElementById("generatedLogs") !== null)
                document.getElementById("generatedLogs").remove();
        }
    }
    #reloadLogs(output) {
        document.getElementById("generatedLogs").innerHTML = output;
    }
}
let mine = [];
let curX = 1000000000;
let curY = 0;
let currentDisplay = ""
let totalMined = 0;
let blocksRevealedThisReset = 0;
let mineCapacity = 40000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
let pickaxes = [
    ["is anyone gonna read these lol", true],
    ["hi!!! hii!!", false],
    ["wait no get out of here", false],
    ["stop it get out", false],
    ["leave!!!!!!!!", false],
    ["i have your ip", false],
    ["grrrrr leave!!", false],
    [":pouting-cat:", false],
    [">:C", false],
    ["IM HERE NOW TOO", false],
    ["mrrp meow meow!", false]
];
let gears = [false, false, false, false, false, false, false];
let currentPickaxe = 0;
let oreList = {
    "🐱": [1/Infinity, [0,0,0,0]],
    "💅": [1/11201200200, [0,0,0,0]],
    "🌳": [1/9250000000, [0,0,0,0]],
    "✈️": [1/9110000000, [0,0,0,0]],
    "💵": [1/8900000000, [0,0,0,0]],
    "🏰": [1/8888888888, [0,0,0,0]],
    "🪢": [1/8181818181, [0,0,0,0]],
    "🐋": [1/8000000000, [0,0,0,0]],
    "🐪": [1/7800000000, [0,0,0,0]],
    "⚠️": [1/6666666666, [0,0,0,0]],
    "🫃": [1/6600000000, [0,0,0,0]],
    "🚿": [1/6000000000, [0,0,0,0]],
    "🏔️": [1/5500000000, [0,0,0,0]],
    "😻": [1/5000000005, [0,0,0,0]],
    "🌇": [1/4300000000, [0,0,0,0]], //ADDED
    "💐": [1/3750000000, [0,0,0,0]], //ADDED
    "🪅": [1/3250000000, [0,0,0,0]], //ADDED
    "🎆": [1/3000000000, [0,0,0,0]], //ADDED
    "🌈": [1/2750000000, [0,0,0,0]],
    "🏵️": [1/2600000000, [0,0,0,0]],
    "💫": [1/2000000000, [0,0,0,0]], //ADDED
    "👁️": [1/1920000000, [0,0,0,0]], //ADDED
    "🪩": [1/999999999, [0,0,0,0]], //ADDED
    "👀": [1/955200890, [0,0,0,0]], //ADDED
    "🥗": [1/800000000, [0,0,0,0]], //ADDED
    "💸": [1/754000000, [0,0,0,0]], //ADDED
    "👿": [1/750000000, [0,0,0,0]], //ADDED
    "⌛": [1/750000000, [0,0,0,0]], //ADDED
    "🪐": [1/709000750, [0,0,0,0]], //ADDED
    "🧀": [1/618000001, [0,0,0,0]], //ADDED
    "🌀": [1/618000000, [0,0,0,0]], //ADDED
    "🧊": [1/583000000, [0,0,0,0]], //ADDED
    "🌌": [1/550000000, [0,0,0,0]], //ADDED
    "🥀": [1/538000000, [0,0,0,0]], //ADDED
    "🥉": [1/444444444, [0,0,0,0]], //ADDED
    "🪞": [1/426800050, [0,0,0,0]], //ADDED
    "🔩": [1/420836000, [0,0,0,0]], //ADDED
    "❄️": [1/386500000, [0,0,0,0]], //ADDED
    "💥": [1/375000000, [0,0,0,0]], //ADDED
    "🏝️": [1/275320000, [0,0,0,0]],
    "🌟": [1/257280000, [0,0,0,0]], //ADDED
    "🌪️": [1/247010000, [0,0,0,0]], //ADDED
    "✨": [1/240800000, [0,0,0,0]],
    "🌏": [1/213200000, [0,0,0,0]], //ADDED
    "🧵": [1/201061929, [0,0,0,0]], //ADDED
    "📝": [1/200000000, [0,0,0,0]], //ADDED
    "⛄": [1/183640000, [0,0,0,0]], //ADDED
    "💎": [1/170000000, [0,0,0,0]], //ADDED
    "🔥": [1/160000000, [0,0,0,0]], //ADDED
    "🔆": [1/75000000, [0,0,0,0]], //
    "☄️": [1/72500000, [0,0,0,0]], //
    "🌲": [1/71000000, [0,0,0,0]], //
    "⭐": [1/70600600, [0,0,0,0]], //
    "🔱": [1/70000000, [0,0,0,0]], //
    "🎃": [1/69000000, [0,0,0,0]], //
    "🎇": [1/67500000, [0,0,0,0]], //
    "👑": [1/65000000, [0,0,0,0]], //
    "🕯️": [1/62500000, [0,0,0,0]], //
    "🔮": [1/60000000, [0,0,0,0]], //
    "🕋": [1/55000000, [0,0,0,0]], //
    "⌚": [1/52000000, [0,0,0,0]], //
    "🔳": [1/46000000, [0,0,0,0]], //
    "🎨": [1/44000000, [0,0,0,0]], //
    "🧲": [1/43500000, [0,0,0,0]], //
    "🗜️": [1/42000000, [0,0,0,0]], //
    "🏆": [1/38000000, [0,0,0,0]], //
    "🪬": [1/37000000, [0,0,0,0]], //
    "🔋": [1/36000000, [0,0,0,0]], //
    "🎍": [1/35000000, [0,0,0,0]], //
    "🧨": [1/31500000, [0,0,0,0]], //
    "🎀": [1/31000000, [0,0,0,0]], //
    "⏹️": [1/29000000, [0,0,0,0]], //
    "🐟": [1/26000000, [0,0,0,0]], //
    "🔗": [1/25000000, [0,0,0,0]], //
    "💍": [1/15000000,[0,0,0,0]], //
    "🪙": [1/15000000, [0,0,0,0]], //
    "🧩": [1/14500000, [0,0,0,0]], //
    "🎴": [1/13450000, [0,0,0,0]], //
    "🗡️": [1/13000000, [0,0,0,0]], //
    "🎄": [1/12500000,[0,0,0,0]], //
    "🥽": [1/12350000, [0,0,0,0]], //
    "🔔": [1/12250000, [0,0,0,0]], //
    "🗿": [1/12000000, [0,0,0,0]], //
    "🪵": [1/10000000,[0,0,0,0]], //
    "⚗️": [1/9750000, [0,0,0,0]], //
    "🪚": [1/9600000, [0,0,0,0]], //
    "🌻": [1/9500000,[0,0,0,0]], //
    "🪄": [1/9460000, [0,0,0,0]], //
    "🍁": [1/8900000,[0,0,0,0]], //
    "📟": [1/8750000, [0,0,0,0]], //
    "🫧": [1/8750000,[0,0,0,0]], //
    "🤿": [1/8670000, [0,0,0,0]], //
    "🎣": [1/8230000, [0,0,0,0]], //:
    "🥏": [1/8000000,[0,0,0,0]], //
    "🪜": [1/7950000, [0,0,0,0]], //
    "⛵": [1/7895000, [0,0,0,0]], //
    "🎲": [1/7777777,[0,0,0,0]], //
    "🎭": [1/7650000, [0,0,0,0]], //
    "🧪": [1/7500000, [0,0,0,0]], //
    "⚱️": [1/7467000, [0,0,0,0]], //
    "✂️": [1/7000000,[0,0,0,0]], //
    "🖍️": [1/6800000, [0,0,0,0]], //
    "⚜️": [1/6250000,[0,0,0,0]], //
    "💠": [1/6000000,[0,0,0,0]], //
    "🃏": [1/5500000,[0,0,0,0]], //
    "⚙️": [1/5000000,[0,0,0,0]], //
    "🤍": [1/2000000, [0,0,0,0]],
    "🖤": [1/1750000, [0,0,0,0]],
    "🤎": [1/1500000, [0,0,0,0]],
    "💜": [1/1250000, [0,0,0,0]],
    "❤️": [1/1000000, [0,0,0,0]],
    "🧡": [1/950000, [0,0,0,0]],
    "💛": [1/900000, [0,0,0,0]],
    "💙": [1/800000, [0,0,0,0]],
    "💚": [1/750000, [0,0,0,0]],
    "⚫": [1/100, [0,0,0,0]],
    "🟤": [1/90, [0,0,0,0]],
    "🟣": [1/80, [0,0,0,0]],
    "🔴": [1/70, [0,0,0,0]],
    "🟠": [1/60, [0,0,0,0]],
    "🟡": [1/55, [0,0,0,0]],
    "🔵": [1/50, [0,0,0,0]],
    "🟢": [1/45, [0,0,0,0]],
    "🟪": [1/40, [0,0,0,0]],
    "🟥": [1/35, [0,0,0,0]],
    "🟧": [1/30, [0,0,0,0]],
    "🟫": [1/1, [0,0,0,0]],
    "🧱": [1/1, [0,0,0,0]],
    "🌫️": [1/1, [0,0,0,0]],
    "🌊": [1/1, [0,0,0,0]],
    "🪨": [1/1, [0,0,0,0]],
    "☢️": [1/1, [0,0,0,0]],
    "🌵": [1/1, [0,0,0,0]],
    "📰": [1/1, [0,0,0,0]],
    "🎂": [1/1, [0,0,0,0]],
    "🪈": [1/1, [0,0,0,0]]
}
//ALL LAYERS
const dirtLayer = {
    "🌳": 1/9250000000,
    //"😻": 1/5000000005,
    "💐": 1/3750000000,
    "🥗": 1/800000000,
    "🌪️": 1/247010000,
    "🌏": 1/213200000,
    //"⛄": 1/183640000,
    "🌲": 1/71000000,
    "🎃": 1/69000000,
    "🎍": 1/35000000,
    "🎄": 1/12500000,
    "🪵": 1/10000000,
    "🌻": 1/9500000,
    "🍁": 1/8900000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "🟫": 1/1
},

brickLayer = {
    "🏰": 1/8888888888,
    //"😻": 1/5000000005,
    "🌇": 1/4300000000,
    "🥉": 1/444444444,
    "🪞": 1/426800050,
    "🔩": 1/420836000,
    //"⛄": 1/183640000,
    "🧲": 1/43500000,
    "🪬": 1/37000000,
    "🧨": 1/31500000,
    "🔗": 1/25000000,
    "🪙": 1/15000000,
    "🗿": 1/12000000,
    "🪚": 1/9600000,
    "🪜": 1/7950000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "🧱": 1/1
},

foggyLayer = {
    "🚿": 1/6000000000,
    //"😻": 1/5000000005,
    "👁️": 1/1920000000,
    "💸": 1/754000000,
    "⌛": 1/750000000,
    "🧵": 1/201061929,
    //"⛄": 1/183640000,
    "🕯️": 1/62500000,
    "🕋": 1/55000000,
    "🎨": 1/44000000,
    "🎴": 1/13450000,
    "🥽": 1/12350000,
    "🪄": 1/9460000,
    "🎭": 1/7650000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "🌫️": 1/1
},

waterLayer = {
    "🐋": 1/8000000000,
    //"😻": 1/5000000005,
    "💫": 1/2000000000,
    "🪩": 1/999999999,
    "👿": 1/750000000,
    "🌀": 1/618000000,
    //"⛄": 1/183640000,
    "🔱": 1/70000000,
    "👑": 1/65000000,
    "🐟": 1/26000000,
    "🫧": 1/8750000,
    "🤿": 1/8670000,
    "🎣": 1/8230000,
    "⛵": 1/7895000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "🌊": 1/1
},

rockLayer = {
    "🏔️": 1/5500000000,
    //"😻": 1/5000000005,
    "🌈": 1/2750000000,
    "🧊": 1/583000000,
    "❄️": 1/386500000,
    "🏝️": 1/275320000,
    "✨": 1/240800000,
    "⛄": 1/183640000,
    "💎": 1/170000000,
    "☄️": 1/72500000,
    "🔮": 1/60000000,
    "🔋": 1/36000000,
    "💍": 1/15000000,
    "🥏": 1/8000000,
    "⚜️": 1/6250000,
    "💠": 1/6000000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "🪨": 1/1
},

radioactiveLayer = {
    "⚠️": 1/6666666666,
    //"😻": 1/5000000005,
    "🎆": 1/3000000000,
    "🧀": 1/618000001,
    "🌌": 1/550000000,
    "🥀": 1/538000000,
    //"⛄": 1/183640000,
    "🎇": 1/67500000,
    "🔳": 1/46000000,
    "⏹️": 1/29000000,
    "🧩": 1/14500000,
    "🔔": 1/12250000,
    "⚗️": 1/9750000,
    "🧪": 1/7500000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "☢️": 1/1
},

cactusLayer = {
    "🐪": 1/7800000000,
    //"😻": 1/5000000005,
    "🏵️": 1/2600000000,
    "🪐": 1/709000750,
    "💥": 1/375000000,
    //"⛄": 1/183640000,
    "🔥": 1/160000000,
    "🔆": 1/75000000,
    "⭐": 1/70600600,
    "🎀": 1/31000000,
    "🗡️": 1/13000000,
    "📟": 1/8750000,
    "⚱️": 1/7467000,
    "🖍️": 1/6800000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "🌵": 1/1
},

paperLayer = {
    "💵": 1/8900000000,
    //"😻": 1/5000000005,
    "🪅": 1/3250000000,
    "👀": 1/955200890,
    "🌟": 1/257280000,
    "📝": 1/200000000,
    //"⛄": 1/183640000,
    "⌚": 1/52000000,
    "🗜️": 1/42000000,
    "🏆": 1/38000000,
    "🎲": 1/7777777,
    "✂️": 1/7000000,
    "🃏": 1/5500000,
    "⚙️": 1/5000000,
    "🤍": 1/2000000,
    "🖤": 1/1750000,
    "🤎": 1/1500000,
    "💜": 1/1250000,
    "❤️": 1/1000000,
    "🧡": 1/950000,
    "💛": 1/900000,
    "💙": 1/800000,
    "💚": 1/750000,
    "⚫": 1/100,
    "🟤": 1/90,
    "🟣": 1/80,
    "🔴": 1/70,
    "🟠": 1/60,
    "🟡": 1/55,
    "🔵": 1/50,
    "🟢": 1/45,
    "🟪": 1/40,
    "🟥": 1/35,
    "🟧": 1/30,
    "📰": 1/1
},

sillyLayer = {
    "💅": 1/11201200200,
    "✈️": 1/9110000000,
    "🪢": 1/8181818181,
    "🫃": 1/6600000000,
    //"⛄": 1/183640000,
    "🎂": 1/1
},

fluteLayer = {
    "🪈": 1/1
},

allLayers = [
    dirtLayer,
    brickLayer,
    foggyLayer,
    waterLayer,
    rockLayer,
    radioactiveLayer,
    cactusLayer,
    paperLayer,
    sillyLayer, 
    fluteLayer
];

function init() {
    let canContinue = false;
    createInventory();
    createIndex();
    createMine();
    let playedBefore = localStorage.getItem("playedBefore");
    if (playedBefore)
        canContinue = loadAllData();
    else
        canContinue = true;
    if (canContinue) {
        repeatDataSave();
        localStorage.setItem("playedBefore", true);
        localStorage.setItem("game2DataChanges", true);
        createPickaxeRecipes();
        createGearRecipes();
        document.getElementById('dataText').value = "";
        keepRunning();
    }
}

function createMine() {
    for (let r = curY; r < curY + 51; r++) {
        mine.push([]);
        for (let c = curX - 51; c < curX + 51; c++)
            mine[r][c] = r === 0 ? "🟩" : "⬜";
    }
    mine[0][1000000000] = "⛏️"; //trusty pickaxe
    displayArea();
    checkAllAround(curX, curY, 1);
    displayArea();
}

function movePlayer(dir) {
    if (canMine) {
        switch (dir) {
            case "s":
                mineBlock(curX, curY + 1, "mining", 1);
                mine[curY][curX] = "⚪";
                prepareArea("s");
                curY++;
                mine[curY][curX] = "⛏️";
                setLayer(curY);
                lastDirection = "s";
                break;
            case "w":
                if (curY > 0) {
                    mineBlock(curX, curY - 1, "mining", 1);
                    mine[curY][curX] = "⚪";
                    prepareArea("w");
                    curY--;
                    mine[curY][curX] = "⛏️";
                    lastDirection = "w";
                    setLayer(curY);
                }
                break;
            case "a":
                if (curX > 0) {
                    mineBlock(curX - 1, curY, "mining", 1);
                    mine[curY][curX] = "⚪";
                    prepareArea("a");
                    curX--;
                    mine[curY][curX] = "⛏️";
                    lastDirection = "a";
                }
                break;
            case "d":
                mineBlock(curX + 1, curY, "mining", 1);
                mine[curY][curX] = "⚪";
                prepareArea("d");
                curX++;
                mine[curY][curX] = "⛏️";
                lastDirection = "s";
                break;
            /*default:
                console.log("wrong key!!");*/
        }
        displayArea();
    }
}

function mineBlock(x, y, cause, luck) {
    if (mine[y][x] !== "⚪" && mine[y][x] !== "⛏️" && mine[y][x] !== "⬜") {
        let ore = mine[y][x];
        if (ore === "🟩")
            ore = "🟫";
        if (cause === "reset") {
            giveBlock(mine[y][x], x, y, true);
            mine[y][x] = "⚪";
        } else {
            giveBlock(mine[y][x], x, y);
            mine[y][x] = "⚪";
            checkAllAround(x, y, luck);
            totalMined++;
            if (cause !== "ability") {
                rollAbilities();
                updateActiveRecipe();
            }
        }
    }
}

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let validInput = false;
    name = name.toLowerCase();
    switch(name) {
        case "w":
            validInput = true;
            break;
        case "a":
            validInput = true;
            break;
        case "s":
            validInput = true;
            break;
        case "d":
            validInput = true;
            break;
        case "arrowup":
            event.preventDefault();
            validInput = true;
            name = "w";
            break;
        case "arrowleft":
            event.preventDefault();
            validInput = true;
            name = "a";
            break;
        case "arrowdown":
            event.preventDefault();
            validInput = true;
            name = "s";
            break;
        case "arrowright":
            event.preventDefault();
            validInput = true;
            name = "d";
            break;
        default:
            console.log("wrong key!");
            break;
    }
    if (validInput) {
        clearInterval(loopTimer);
        curDirection = "";
        movePlayer(name);
    }
}, false);

function prepareArea(facing) {
    const constraints = getParams(50, 50);
    switch(facing) {
        case "a":
            for (let r = curY - constraints[1]; r < curY + 50; r++) {
                if (mine[r] === undefined)
                    mine[r] = [];
                if (mine[r][curX - constraints[0]] === undefined) {
                    if (r === 0)
                        mine[r][curX - constraints[0]] = "🟩";
                    else
                        mine[r][curX - constraints[0]] = "⬜";
                }
            }
            break;
        case "s":
            if (mine[curY + 50] === undefined)
                mine[curY + 50] = [];
            for (let c = curX - constraints[0]; c < curX + 50; c++) {
                if (mine[curY + 50][c] === undefined)
                    mine[curY + 50][c] = "⬜"
            }
            break;
        case "d":
            for (let r = curY - constraints[1]; r < curY + 50; r++) {
                if (mine[r] === undefined)
                    mine[r] = [];
                if (mine[r][curX + 50] === undefined) {
                    if (r === 0)
                        mine[r][curX + 50] = "🟩";
                    else
                        mine[r][curX + 50] = "⬜";
                }
            }
            break;
        case "w":
            if (mine[curY - constraints[1]] === undefined)
                mine[curY - constraints[1]] = [];
            for (let c = curX - constraints[0]; c < curX + 50; c++) {
                if (mine[curY - constraints[1]][c] === undefined)
                    mine[curY - constraints[1]][c] = curY - constraints[1] === 0 ? "🟩" : "⬜";
            }
            break;
    }
}

function displayArea() {
    let output = "";
    let constraints = getParams(9, 9);
    for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
        for (let c = curX - constraints[0]; c <= curX + 9 + (9-constraints[0]); c++)
            output += "<span class='emoji'>" + mine[r][c] + "</span>";
        output += "<br>";
    }
    document.getElementById("blockDisplay").innerHTML = output;
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
    document.getElementById("blocksMined").innerHTML = totalMined.toLocaleString() + " Blocks Mined";
    document.getElementById("location").innerHTML = "X: " + (curX - 1000000000) + " | Y: " + (-curY);
    //twemoji.parse(document.getElementById("blockDisplay"));
}

function getParams(distanceX, distanceY, x, y) {
    if (x === undefined)
        x = curX;
    if (y === undefined)
        y = curY;
    let displayLeft = 0;
    let displayUp = 0;
    if (x > distanceX)
        displayLeft = distanceX;
    else
        displayLeft = x;
    if (y > distanceY)
        displayUp = distanceY;
    else
        displayUp = y;
    return [displayLeft, displayUp];
}

function checkAllAround(x, y, luck) {
    let generated;
    if (x - 1 >= 0) {
        if (mine[y][x - 1] === "⬜") {
            generated = generateBlock(luck, [y, x-1]);
            mine[y][x - 1] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y, x-1);
            blocksRevealedThisReset++;
        }
    }
    if (mine[y][x + 1] === "⬜") {
        generated = generateBlock(luck, [y, x+1]);
            mine[y][x + 1] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y, x+1);
            blocksRevealedThisReset++;
        }
    if (mine[y + 1][x] === "⬜") {
        generated = generateBlock(luck, [y+1, x]);
            mine[y + 1][x] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y+1, x);
            blocksRevealedThisReset++;
        }
    if (y - 1 >= 0) {
        if (mine[y - 1][x] === "⬜") {
            generated = generateBlock(luck, [y-1, x]);
            mine[y - 1][x] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(y-1, x);
            blocksRevealedThisReset++;
        }
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        clearInterval(loopTimer);
        blocksRevealedThisReset = 0;
        canMine = false;
        setTimeout(() => {
            mineReset();
        }, 250);
    }
}

let multis = [1, 50, 250, 500];
let inv;
function giveBlock(type, x, y, fromReset) {
    if (gears[4]) {
        let block = Object.keys(currentLayer);
        block = block[block.length - 1];
        oreList[block][1][0]++;
        updateInventory(block, 1);
    }
    
    if (type !== "⛏️") {
        inv = 1;
        if (type === "🟩")
            type = "🟫";
        if (Math.floor(Math.random() * 50) === 25)
            inv = 2;
        else if (Math.floor(Math.random() * 250) === 125)
            inv = 3;
        else if (Math.floor(Math.random() * 500) === 250)
            inv = 4;
        if (Math.round(1 / (oreList[type][0])) >= 160000000)
            verifiedOres.verifyFind(mine[y][x], y, x, names[inv - 1]);
        if (Math.round(1/oreList[type][0]) >= 750000) {
            if (currentPickaxe >= 7) {
                if (Math.round(1/oreList[type][0]) > 2000000)
                    logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
            } else
                logFind(type, x, y, namesemojis[inv - 1], totalMined, fromReset);
        }
        oreList[type][1][inv-1]++;
        updateInventory(type, inv);
    }
}

function generateBlock(luck, location) {
    if (debug) luck = typeof debugLuck === "number" ? debugLuck : luck;
    let hasLog = false;
    let probabilityTable = currentLayer;
    let blockToGive = "";
    let summedProbability = 0;
    let chosenValue = Math.random();
    chosenValue /= luck;
    for (let propertyName in probabilityTable) {
        summedProbability += probabilityTable[propertyName];
        if (chosenValue < summedProbability) {
            blockToGive = propertyName;
            break;
        }
    }
    if (Math.round(1 / (probabilityTable[blockToGive])) >= 750000) {
        if (Math.round(1 / (probabilityTable[blockToGive])) > 5000000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("zenith");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) > 1500000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("magnificent");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) > 750000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("otherworldly");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 160000000) {
            verifiedOres.createLog(location[0],location[1],blockToGive, new Error(), luck);
            hasLog = true;
            spawnMessage(blockToGive, location);
            playSound("unfathomable");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 25000000) {
            spawnMessage(blockToGive, location);
            playSound("enigmatic");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 5000000) {
            spawnMessage(blockToGive, location);
            if (currentPickaxe < 8 && !(gears[3]))
                playSound("transcendent");
        } else if (Math.round(1 / (probabilityTable[blockToGive])) >= 750000) {
            spawnMessage(blockToGive, location);
            if (currentPickaxe < 7)
                playSound("exotic");
        }
    }
    return [blockToGive, hasLog];
}

let variant = 1;
function updateInventory(type, inv) {
    document.getElementById(type + inv).innerHTML = "<span class='emoji'>" + type + "</span>" + " | 1/" + ((Math.round( 1 / oreList[type][0])) * multis[inv - 1]).toLocaleString() + " | x" + oreList[type][1][inv - 1];
    if (oreList[type][1][inv - 1] > 0)
        document.getElementById(type + inv).style.display = "block";
    else
        document.getElementById(type + inv).style.display = "none";
}

const names = ["Normal", "Electrified", "Radioactive", "Explosive"];
const namesemojis = ["", "⚡️", "☢️", "💥"]
function switchInventory() {
    document.getElementById(("inventory") + variant).style.display = "none";
    if (variant === 4)
        variant = 1;
    else
        variant++;
    document.getElementById("inventory" + variant).style.display = "block";
    document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
    document.getElementById("indexDisplay").style.display = "none";
    document.getElementById("showIndex").innerHTML = "Show Index";
    showing = false;
}

function resetMine() {
    clearInterval(loopTimer);
    curDirection = "";
    mine = [[]];
    curX = 1000000000;
    curY = 0;
    blocksRevealedThisReset = 0;
    currentLayer = allLayers[0];
    createMine();
    mineCapacity = 40000;
    document.getElementById("mineResetProgress").innerHTML = blocksRevealedThisReset + "/" + mineCapacity + " Blocks Revealed This Reset";
}

function playSound(type) {
    switch (type) {
        case "exotic":
            if (canPlay[0]) {
                chill.currentTime = 0;
                chill.play();
            }
            break;
        case "transcendent":
            if (canPlay[1]) {
            ringing.currentTime = 0;
            ringing.play();
            }
            break;
        case "enigmatic":
            if (canPlay[2]) {
            visionblur.currentTime = 0;
            visionblur.play();
            }
            break;
        case "unfathomable":
            if (canPlay[3]) {
            unfath.currentTime = 0;
            unfath.play();
            }
            break;
        case "otherworldly":
            if (canPlay[4]) {
                ow.currentTime = 0;
                ow.play();
            }
            break;
        case "zenith":
            if (canPlay[6]) {
            zenith.currentTime = 0;
            zenith.play();
            }
            break;
        case "magnificent":
            if (canPlay[5]) {
                magnificent.currentTime = 0;
                magnificent.play();
            }
            break;
    }
}

let chill;
let ringing;
let visionblur;
let unfath;
let ow;
let magnificent;
let zenith;
let canPlay = [true, true, true, true, true, true, true];
let keepRunningAudio;
function loadContent() {
    let allAudios = [];
    keepRunningAudio = new Audio("ambiencebyx2corp.mp3")
    keepRunningAudio.load();
    chill = new Audio("spinechill.mp3");
    ringing = new Audio("Transcendent.mp3");
    visionblur = new Audio("visionblur.mp3");
    unfath = new Audio("Unfathsound.mp3");
    ow = new Audio("Otherworldly.mp3");
    zenith = new Audio("Zenithsound.mp3");
    magnificent = new Audio("magnificent.mp3")
    allAudios.push(chill);
    allAudios.push(ringing);
    allAudios.push(visionblur);
    allAudios.push(unfath);
    allAudios.push(ow);
    allAudios.push(magnificent);
    allAudios.push(zenith);
    chill.volume = 1;
    ringing.volume = 0.4;
    visionblur.volume = 0.6;
    unfath.volume = 0.6;
    ow.volume = 0.6;
    magnificent.volume = 1;
    zenith.volume = 0.6;
    
    for (let i = 0; i < allAudios.length; i++)
        allAudios[i].load();
    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    canMine = true;
    init();
}

let loopTimer = null;
let curDirection = "";
let miningSpeed = 25;
function goDirection(direction) {
    if (curDirection === direction) {
        clearInterval(loopTimer);
        curDirection = ""
    } else {
        clearInterval(loopTimer);
        if (gears[2])
            miningSpeed = 15;
        if (gears[6])
            miningSpeed = 10;
        loopTimer = setInterval(movePlayer, miningSpeed, direction);
        curDirection = direction;
    }
}

function createInventory() {
    for (let propertyName in oreList) {
        for (let i = 1; i < 5; i++) {
            let tempElement = document.createElement('p');
            tempElement.id = (propertyName + i);
            tempElement.classList = "oreDisplay";
            tempElement.style.display = "none";
            tempElement.innerHTML = "<span class='emoji'>" + propertyName + "</span> | 1/" + ((Math.round( 1 / oreList[propertyName][0])).toLocaleString() * multis[i - 1]).toLocaleString() + " | x" + oreList[propertyName][1][i - 1];
            document.getElementById(("inventory") + i).appendChild(tempElement);
            //twemoji.parse(document.getElementById(propertyName+i));
        }
    }
    /*for (let i = 1; i < 5; i++) {
        twemoji.parse(document.getElementById("inventory"+i));
    }*/
}

function createIndex() {
    let num = 0;
    let output = "";
    for (let i = 0; i < allLayers.length - 2; i++) {
        for (let propertyName in allLayers[i]) {
            num = (Math.round(1/(oreList[propertyName][0])));
            if (num > 2000000 && num < 5000000000)
                output += propertyName + " | 1/" + (Math.round(1/(oreList[propertyName][0]))).toLocaleString() + " | " + (i * 2000) + "-" + ((i+1) * 2000) + "m<br>";
        }
        output += "--------------<br>";
    }
    for (let propertyName in oreList) {
        if (Math.round(1/(oreList[propertyName][0]) <= 2000000 && Math.round(1/(oreList[propertyName][0]) > 1)))
            output += propertyName + " | 1/" + (Math.round(1/(oreList[propertyName][0]))).toLocaleString() + " | Everywhere<br>";
    }
    document.getElementById("indexDisplay").innerHTML = output;
}

let showing = false;
function showIndex() {
    if (showing) {
        document.getElementById("indexDisplay").style.display = "none";
        document.getElementById("showIndex").innerHTML = "Show Index";
        document.getElementById("inventory" + (variant)).style.display = "block";
        showing = false;
    } else {
        document.getElementById("indexDisplay").style.display = "block";
        document.getElementById("showIndex").innerHTML = "Show Inventory";
        document.getElementById("inventory" + (variant)).style.display = "none";
        showing = true;
    }
}

let spawnOre;
let loggedFinds = [];
let latestSpawns = [];
function spawnMessage(block, location) {
    if (!(gears[3]) && blocksRevealedThisReset > mineCapacity - 5000)
        mineCapacity += 5000;
    let output = ["",""];
    let addToLatest = true;
    if (currentPickaxe === 5)
        latestSpawns.push([block, location[1], location[0]]);
    else if (currentPickaxe < 7) {
        if (gears[0])
            latestSpawns.push([block, location[1], location[0]]);
        else
            latestSpawns.push([block, undefined, undefined]);
    } else if (Math.round(1 / (oreList[block][0])) > 2000000) {
        if (gears[0])
            latestSpawns.push([block, location[1], location[0]]);
        else
            latestSpawns.push([block, undefined, undefined]);
        }
    else
        addToLatest = false;
    if (gears[3])
        loggedFinds.push([location[0], location[1]]);
    if (latestSpawns.length > 10)
        latestSpawns.splice(0, 1);
    if (addToLatest) {
        for (let i = latestSpawns.length - 1; i >= 0; i--) {
            output[0] += "<span class='emoji'>" + latestSpawns[i][0] + "</span> 1/" + (Math.round(1 / (oreList[latestSpawns[i][0]][0]))).toLocaleString();
            if (latestSpawns[i][1] !== undefined)
                output[0] += " | X: " + (latestSpawns[i][1] - 1000000000) + ", Y: " + -(latestSpawns[i][2]) + "<br>";
            else
                output[0] += "<br>";
        }
        document.getElementById("latestSpawns").innerHTML = output[0];
        output[1] += "<span class='emoji'>" + block + "</span>" + " Has Spawned!<br>" + "1/" + (Math.round(1 / (oreList[block][0]))).toLocaleString();
        if (currentPickaxe === 5 || gears[0])
            output[1] += "<br>X: " + (location[1] - 1000000000) + "<br>Y: " + -(location[0]);
        document.getElementById("spawnMessage").innerHTML = output[1];
    }
    clearTimeout(spawnOre);
    spawnOre = setTimeout(() => {
        document.getElementById("spawnMessage").innerHTML = "Spawn Messages Appear Here!"
    }, 20000);
    //twemoji.parse(document.getElementById("spawnMessage"));
}

function moveOne(dir, button) {
    button.disabled = true;
    clearInterval(loopTimer);
    setTimeout(() => {
        movePlayer(dir);
    }, 15);
    curDirection = "";
    setTimeout(() => {
        button.disabled = false;
    }, 100);
}

async function mineReset() {
    mineCapacity = 40000;
    const temp = curDirection;
    curDirection = "";
    //uncomment when this is used
    //const temp2 = await collectOres(temp);
    loggedFinds = [];
    canMine = await mineResetAid();
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    displayArea();
    goDirection(temp);
}

function collectOres(temp) {
    return new Promise((resolve) => {
    if (gears[3]) {
        for (let i = 0; i < loggedFinds.length; i++) {
            if (mine[loggedFinds[i][0]] !== undefined && mine[loggedFinds[i][0]][loggedFinds[i][1]] !== undefined)
                mineBlock(loggedFinds[i][1], loggedFinds[i][0], "reset", 1);
        }
    } else {
        let direction = "";
        if (temp !== "")
            direction = temp;
        else if (lastDirection !== "")
            direction = lastDirection;
        if (direction === "s") {
            let constraints = getParams(30, 250);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "w") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 250; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "a") {
            let constraints = getParams(30, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 250; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        } else if (direction === "d") {
            let constraints = getParams(250, 30);
            for (let r = curY - constraints[1]; r < curY + 30; r++) {
                for (let c = curX - constraints[0]; c < curX + 30; c++) {
                    if (mine[r] !== undefined) {
                        if (oreList[mine[r][c]] !== undefined) {
                            if (Math.round(1 / (oreList[mine[r][c]][0])) >= 750000)
                                mineBlock(c, r, "reset", 1);
                        }
                    }
                }
            }
        }
    }
    setTimeout(() => {
        resolve(true);
    }, 125);
    });
}

function mineResetAid() {
    return new Promise((resolve) => {
    setTimeout(() => {
        mine = [[]];
        curX = 1000000000;
        let x = 1000000000;
        let y = curY;
        for (let r = y - 50; r < y + 50; r++) {
            if(mine[r] === undefined)
                mine[r] = [];
            for (let c = x - 50; c < x + 50; c++)
                mine[r][c] = "⬜";
        }
        checkAllAround(curX, curY, 1);
    }, 125);
    setTimeout(() => {
        resolve(true);
    }, 250);
    });
}

let latestFinds = [];
function logFind(type, x, y, variant, atMined, fromReset) {
    let output = "";
    latestFinds.push([type, x, y, variant, atMined, fromReset]);
    if (latestFinds.length > 10)
        latestFinds.splice(0, 1);
    for (let i = latestFinds.length - 1; i >= 0; i--) {
        if (latestFinds[i][3] !== "Normal")
            output += latestFinds[i][3];
        output += "<span class='emoji'>" + latestFinds[i][0] + "</span> | X: " + (latestFinds[i][1] - 1000000000) + ", Y: " + -(latestFinds[i][2]) + "<br>";
    }
    document.getElementById("latestFinds").innerHTML = output;
    //twemoji.parse(document.getElementById("latestFinds"));
}

let lastLayerChange = 6000;
let currentLayer = dirtLayer;
function setLayer(y) {
    let tempNum = y;
    if (tempNum < 16000) {
    tempNum = Math.floor(tempNum / 2000);
    currentLayer = allLayers[tempNum];
    } else if (y > (lastLayerChange + 10000)) {
        lastLayerChange += 10000;
        if (Math.round(Math.random() * 77) === 33)
            currentLayer = sillyLayer;
        else if (Math.round(Math.random() * 40) === 20)
            currentLayer = fluteLayer;
        else
            currentLayer = allLayers[Math.floor(Math.random() * 8)];
    }
}

async function teleport() {
    canMine = false;
    clearInterval(loopTimer);
    curDirection = "";
    canMine = await toLocation();
    displayArea();
}

function toLocation() {
    return new Promise((resolve) => {
    let x = curX;
    let y = document.getElementById("meterDisplay").innerHTML;
    y = Number(y.substring(0, y.length - 1));
    for (let r = y - 50; r < y + 50; r++) {
        if(mine[r] === undefined)
            mine[r] = [];
        for (let c = x - 50; c < x + 50; c++) {
            if (mine[r][c] === undefined)
                mine[r][c] = "⬜";
        }
    }
    setLayer(y - 50);
    mine[curY][curX] = "⚪";
    curX = x;
    curY = y;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
    
    setTimeout(() => {
        resolve(true);
    }, 1000);
    });
}

let distanceMulti = 1;
function switchDistance() {
    let y = document.getElementById("meterDisplay").innerHTML;
    y = Number(y.substring(0, y.length - 1));
    if (y < 14000) {
        y = 2000 * distanceMulti + 1000;
        distanceMulti++;
    } else {
        y = 1000;
        distanceMulti = 1;
    }
    document.getElementById("meterDisplay").innerHTML = (y) + "m";
}

function keepRunning() {
    keepRunningAudio.loop = true;
    keepRunningAudio.volume = 0.05;
    keepRunningAudio.play();
}

function changeMusicVolume(percent) {
    keepRunningAudio.volume = 0.05 * (percent / 100);
}

function toggleMusic() {
    if (keepRunningAudio.paused) {
        keepRunningAudio.play();
        document.getElementById("musicButton").innerHTML = "Mute Music";
    } else {
        keepRunningAudio.pause();
        document.getElementById("musicButton").innerHTML = "Unmute Music";
    }
}

function changeCanPlay(num, button) {
    let text = button.innerHTML;
    text = text.substring(text.indexOf(" "));
    if (canPlay[num])
        button.innerHTML = "Unmute" + text;
    else
        button.innerHTML = "Mute" + text;
    canPlay[num] = !(canPlay[num]);
}

let verifiedOres = new secureLogs();
