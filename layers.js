/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
let oreList = {
    "🐱": [1/Infinity, [0,0,0,0]],
    "✈️": [1/Infinity, [0,0,0,0]],
    "🍀" : [1/444400000000000, [0,0,0,0]],
    "☘️" : [1/33300000000000, [0,0,0,0]],
    "🫶": [1/1000000000000, [0,0,0,0]],
    "🚫": [1/1000000000000, [0,0,0,0]],
    "🧌": [1/696969696969, [0,0,0,0]],
    "⚕️": [1/50000000000, [0,0,0,0]], //500b
    "💗": [1/150000000000, [0,0,0,0]],
    "🌙": [1/2626262626, [0,0,0,0]], //131b
    "⚖️": [1/123321000000, [0,0,0,0]],
    "🪔": [1/2000000000, [0,0,0,0]], //100b
    "🎷": [1/2500000000, [0,0,0,0]], //87.5b
    "💰": [1/85700000000, [0,0,0,0]],
    "🧫": [1/4000000000, [0,0,0,0]], //80b
    "♾️": [1/75000000000, [0,0,0,0]],
    "❤️‍🔥": [1/50000000000, [0,0,0,0]],
    "🗝️": [1/42000000000, [0,0,0,0]],
    "🩺": [1/800000000, [0,0,0,0]], //40b
    "🌡️": [1/3000000000, [0,0,0,0]], //30b
    "💢": [1/26000000000, [0,0,0,0]],
    "🪽": [1/26000000000, [0,0,0,0]],
    "🛸": [1/1000000000, [0,0,0,0]], //20b
    "🪘": [1/500000000, [0,0,0,0]], //17.5b
    "💅": [1/11201200200, [0,0,0,0]],
    "🌳": [1/9250000000, [0,0,0,0]],
    "💱": [1/180000000, [0,0,0,0]], //9b
    "💵": [1/8900000000, [0,0,0,0]],
    "🏰": [1/8888888888, [0,0,0,0]],
    "🪢": [1/8181818181, [0,0,0,0]],
    "💊": [1/800000000, [0,0,0,0]],
    "🐋": [1/8000000000, [0,0,0,0]],
    "🐪": [1/7800000000, [0,0,0,0]],
    "⚠️": [1/6666666666, [0,0,0,0]],
    "🫃": [1/6600000000, [0,0,0,0]],
    "🔫": [1/6150000000, [0,0,0,0]],
    "🚿": [1/6000000000, [0,0,0,0]],
    "🏔️": [1/5500000000, [0,0,0,0]],
    "😻": [1/5000000005, [0,0,0,0]],
    "🍄": [1/250000000, [0,0,0,0]],
    "🛎️": [1/4730000000, [0,0,0,0]],
    "🌇": [1/4300000000, [0,0,0,0]], //ADDED
    "🏹": [1/4210000000, [0,0,0,0]],
    "💐": [1/3750000000, [0,0,0,0]], //ADDED
    "🥁": [1/100000000, [0,0,0,0]],
    "🪅": [1/3250000000, [0,0,0,0]], //ADDED
    "🎆": [1/3000000000, [0,0,0,0]], //ADDED
    "🌈": [1/2750000000, [0,0,0,0]],
    "🏵️": [1/2600000000, [0,0,0,0]],
    "🚽": [1/2240000000, [0,0,0,0]],
    "🪶": [1/2060000000, [0,0,0,0]],
    "🥬": [1/2000000000, [0,0,0,0]],
    "💫": [1/2000000000, [0,0,0,0]], //ADDED
    "👁️": [1/1920000000, [0,0,0,0]], //ADDED
    "📌": [1/1230000000, [0,0,0,0]],
    "🛑": [1/1000000000, [0,0,0,0]],
    "🪩": [1/999999999, [0,0,0,0]], //ADDED
    "👀": [1/955200890, [0,0,0,0]], //ADDED
    "🥗": [1/800000000, [0,0,0,0]], //ADDED
    "🕸️": [1/40000000, [0,0,0,0]],
    "💣": [1/771100000, [0,0,0,0]],
    "💸": [1/754000000, [0,0,0,0]], //ADDED
    "🔭": [1/15000000, [0,0,0,0]],
    "👿": [1/750000000, [0,0,0,0]], //ADDED
    "⌛": [1/750000000, [0,0,0,0]], //ADDED
    "🪐": [1/709000750, [0,0,0,0]], //ADDED
    "🪇": [1/20000000, [0,0,0,0]],
    "🧬": [1/70000000, [0,0,0,0]],
    "🔪": [1/632000000, [0,0,0,0]],
    "🧀": [1/618000001, [0,0,0,0]], //ADDED
    "🌀": [1/618000000, [0,0,0,0]], //ADDED
    "⭕": [1/600000000, [0,0,0,0]],
    "🧊": [1/583000000, [0,0,0,0]], //ADDED
    "🌌": [1/550000000, [0,0,0,0]], //ADDED
    "🔨": [1/540000000, [0,0,0,0]],
    "🥀": [1/538000000, [0,0,0,0]], //ADDED
    "🥉": [1/444444444, [0,0,0,0]], //ADDED
    "🪞": [1/426800050, [0,0,0,0]], //ADDED
    "🔩": [1/420836000, [0,0,0,0]], //ADDED
    "📡": [1/8000000, [0,0,0,0]],
    "❄️": [1/386500000, [0,0,0,0]], //ADDED
    "💥": [1/375000000, [0,0,0,0]], //ADDED
    "🎹": [1/10000000, [0,0,0,0]],
    "⛓️": [1/345000000, [0,0,0,0]],
    "💉": [1/17500000, [0,0,0,0]],
    "🏝️": [1/275320000, [0,0,0,0]],
    "🍥": [1/27500000, [0,0,0,0]],
    "🌦️": [1/275000000, [0,0,0,0]],
    "🌟": [1/257280000, [0,0,0,0]], //ADDED
    "🌪️": [1/247010000, [0,0,0,0]], //ADDED
    "🔏": [1/243800000, [0,0,0,0]],
    "✨": [1/240800000, [0,0,0,0]],
    "🔕": [1/225000000, [0,0,0,0]],
    "🌏": [1/213200000, [0,0,0,0]], //ADDED
    "🧵": [1/201061929, [0,0,0,0]], //ADDED
    "📝": [1/200000000, [0,0,0,0]], //ADDED
    "⛄": [1/183640000, [0,0,0,0]], //ADDED
    "🌩️": [1/175000000, [0,0,0,0]],
    "💎": [1/170000000, [0,0,0,0]], //ADDED
    "🖊️": [1/165000000, [0,0,0,0]],
    "🔥": [1/160000000, [0,0,0,0]], //ADDED
    "💔": [1/155000000, [0,0,0,0]],
    "🪓": [1/82000000, [0,0,0,0]],
    "🔆": [1/75000000, [0,0,0,0]], //
    "⛈️": [1/74000000, [0,0,0,0]],
    "☄️": [1/72500000, [0,0,0,0]], //
    "🌲": [1/71000000, [0,0,0,0]], //
    "⭐": [1/70600600, [0,0,0,0]], //
    "🔱": [1/70000000, [0,0,0,0]], //
    "🍆": [1/69696969, [0,0,0,0]],
    "🎃": [1/69000000, [0,0,0,0]], //
    "🎇": [1/67500000, [0,0,0,0]], //
    "👑": [1/65000000, [0,0,0,0]], //
    "🕯️": [1/62500000, [0,0,0,0]], //
    "🔮": [1/60000000, [0,0,0,0]], //
    "🕋": [1/55000000, [0,0,0,0]], //
    "⌚": [1/52000000, [0,0,0,0]], //
    "📚": [1/48100000, [0,0,0,0]],
    "🔳": [1/46000000, [0,0,0,0]], //
    "🎨": [1/44000000, [0,0,0,0]], //
    "🧲": [1/43500000, [0,0,0,0]], //
    "🗜️": [1/42000000, [0,0,0,0]], //
    "🏆": [1/38000000, [0,0,0,0]], //
    "🪬": [1/37000000, [0,0,0,0]], //
    "🔋": [1/36000000, [0,0,0,0]], //
    "🎍": [1/35000000, [0,0,0,0]], //
    "📐": [1/34000000, [0,0,0,0]],
    "🧨": [1/31500000, [0,0,0,0]], //
    "🖇️": [1/31337000, [0,0,0,0]],
    "🎀": [1/31000000, [0,0,0,0]], //
    "⏹️": [1/29000000, [0,0,0,0]], //
    "🐟": [1/26000000, [0,0,0,0]], //
    "🔗": [1/25000000, [0,0,0,0]], //
    "🌨️": [1/25000000, [0,0,0,0]],
    "📖": [1/16000000, [0,0,0,0]],
    "🧠": [1/15500000, [0,0,0,0]],
    "💍": [1/15000000,[0,0,0,0]], //
    "🪙": [1/15000000, [0,0,0,0]], //
    "🧩": [1/14500000, [0,0,0,0]], //
    "🌥️": [1/14400000, [0,0,0,0]],
    "🎴": [1/13450000, [0,0,0,0]], //
    "🗡️": [1/13000000, [0,0,0,0]], //
    "🔑": [1/12700000, [0,0,0,0]],
    "🎄": [1/12500000,[0,0,0,0]], //
    "🥽": [1/12350000, [0,0,0,0]], //
    "🔔": [1/12250000, [0,0,0,0]], //
    "🪃": [1/12210000, [0,0,0,0]],
    "🗿": [1/12000000, [0,0,0,0]], //
    "🖱️": [1/11101000, [0,0,0,0]],
    "⌨️": [1/10010000, [0,0,0,0]],
    "🪵": [1/10000000,[0,0,0,0]], //
    "🛡️": [1/9980000, [0,0,0,0]],
    "🔒": [1/9900000, [0,0,0,0]],
    "⚗️": [1/9750000, [0,0,0,0]], //
    "🪚": [1/9600000, [0,0,0,0]], //
    "🌻": [1/9500000,[0,0,0,0]], //
    "🪄": [1/9460000, [0,0,0,0]], //
    "🍁": [1/8900000,[0,0,0,0]], //
    "📟": [1/8750000, [0,0,0,0]], //
    "🫧": [1/8750000,[0,0,0,0]], //
    "🤿": [1/8670000, [0,0,0,0]], //
    "🎣": [1/8230000, [0,0,0,0]], //
    "✏️": [1/8200000, [0,0,0,0]],
    "🥏": [1/8000000,[0,0,0,0]], //
    "🪜": [1/7950000, [0,0,0,0]], //
    "⛵": [1/7895000, [0,0,0,0]], //
    "🌤️": [1/7800000, [0,0,0,0]],
    "🎲": [1/7777777,[0,0,0,0]], //
    "🎭": [1/7650000, [0,0,0,0]], //
    "🧪": [1/7500000, [0,0,0,0]], //
    "⚱️": [1/7467000, [0,0,0,0]], //
    "✂️": [1/7000000, [0,0,0,0]], //
    "🌧️": [1/7000000, [0,0,0,0]],
    "🖍️": [1/6800000, [0,0,0,0]], //
    "💻": [1/6320000, [0,0,0,0]],
    "⚜️": [1/6250000,[0,0,0,0]], //
    "💠": [1/6000000,[0,0,0,0]], //
    "🃏": [1/5500000,[0,0,0,0]], //
    "⚙️": [1/5000000,[0,0,0,0]], //
    "🤍": [1/2000000, [0,0,0,0]],
    "📘": [1/1900000, [0,0,0,0]],
    "🖤": [1/1750000, [0,0,0,0]],
    "📙": [1/1500500, [0,0,0,0]],
    "🤎": [1/1500000, [0,0,0,0]],
    "💜": [1/1250000, [0,0,0,0]],
    "📕": [1/1230560, [0,0,0,0]],
    "❤️": [1/1000000, [0,0,0,0]],
    "🧡": [1/950000, [0,0,0,0]],
    "💛": [1/900000, [0,0,0,0]],
    "📗": [1/854000, [0,0,0,0]],
    "💙": [1/800000, [0,0,0,0]],
    "💚": [1/750000, [0,0,0,0]],
    "⏏️": [1/300000, [0,0,0,0]],
    "▶️": [1/250000, [0,0,0,0]],
    "✴️": [1/200000, [0,0,0,0]],
    "⏸️": [1/200000, [0,0,0,0]],
    "⏯️": [1/175000, [0,0,0,0]],
    "⏺️": [1/100000, [0,0,0,0]],
    "⏭️": [1/90000, [0,0,0,0]],
    "⏮️": [1/75000, [0,0,0,0]],
    "⏩": [1/70000, [0,0,0,0]],
    "⏪": [1/60000, [0,0,0,0]],
    "⏬": [1/50000, [0,0,0,0]],
    "⏫": [1/25000, [0,0,0,0]],
    "◀️": [1/20000, [0,0,0,0]],
    "🔼": [1/17500, [0,0,0,0]],
    "🔽": [1/15000, [0,0,0,0]],
    "➡️": [1/10000, [0,0,0,0]],
    "↖️": [1/9000, [0,0,0,0]],
    "↘️": [1/5000, [0,0,0,0]],
    "⬇️": [1/3000, [0,0,0,0]],
    "⬆️": [1/2500, [0,0,0,0]],
    "⬅️": [1/1750, [0,0,0,0]],
    "↪️": [1/1500, [0,0,0,0]],
    "↩️": [1/1250, [0,0,0,0]],
    "⤴️": [1/1000, [0,0,0,0]],
    "⤵️": [1/750, [0,0,0,0]],
    "🔀": [1/500, [0,0,0,0]],
    "🔁": [1/300, [0,0,0,0]],
    "🔂": [1/250, [0,0,0,0]],
    "🔄": [1/175, [0,0,0,0]],
    "🔃": [1/100, [0,0,0,0]],
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
    "🪈": [1/1, [0,0,0,0]],
    "🦠": [1/1, [0,0,0,0]],
    "☣️": [1/1, [0,0,0,0]],
    "🎵": [1/1, [0,0,0,0]],
    "❓": [1/1, [0,0,0,0]],
    "☁️" : [1/1, [0,0,0,0]],
    "📺" : [1/1, [0,0,0,0]],
    "🚪" : [1/1, [0,0,0,0]],
    "🌐" : [1/1, [0,0,0,0]],
    "♟️" : [1/1, [0,0,0,0]],
    "✖️" : [1/1, [0,0,0,0]],
    "❌" : [1/1, [0,0,0,0]]
/*
 
    
   
    

*/

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
    "🟫": 1/1
},

dirtLayer2 = {
    "🌳": 1/9250000000,
    //"😻": 1/5000000005,
    "💐": 1/3750000000,
    "🥬": 1/2000000000,
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
    "🧱": 1/1
},

foggyLayer = {
    "❤️‍🔥" : 1/50000000000,
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
    "🌊": 1/1
},

rockLayer = {
    "🏔️": 1/5500000000,
    //"😻": 1/5000000005,
    "🌈": 1/2750000000,
    "🧊": 1/583000000,
    "❄️": 1/386500000,
    //"🏝️": 1/275320000,
    //"✨": 1/240800000,
    //"⛄": 1/183640000,
    "💎": 1/170000000,
    "☄️": 1/72500000,
    "🔮": 1/60000000,
    "🔋": 1/36000000,
    "💍": 1/15000000,
    "🥏": 1/8000000,
    "⚜️": 1/6250000,
    "💠": 1/6000000,
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
    "☢️": 1/1
},

cactusLayer = {
    "💗": 1/150000000000,
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
    "📰": 1/1
},

worldOneCommons = {
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
},

sillyLayer = {
    "🧌": 1/696969696969,
    "♾️": 1/75000000000,
    "💅": 1/11201200200,
    "🪢": 1/8181818181,
    "🫃": 1/6600000000,
    //"⛄": 1/183640000,
    "🎂": 1/1
},

fluteLayer = {
    "🫶": 1/1000000000000,
    "🪈": 1/1
},
cloudLayer = {
    "☘️" : 1/33300000000000,
    "🪽" : 1/26000000000,
    "🪶" : 1/2060000000,
    "🌦️" : 1/275000000,
    "🌩️" : 1/175000000,
    "⛈️" : 1/74000000,
    "🌨️" : 1/25000000,
    "🌥️" : 1/14400000,
    "🌤️" : 1/7800000,
    "🌧️" : 1/7000000,
    "☁️" : 1/1,
},

tvLayer = {
    "☘️" : 1/33300000000000,
    "🔫" : 1/6150000000,
    "🏹" : 1/4210000000,
    "💣" : 1/771100000,
    "🔨" : 1/540000000,
    "🪓" : 1/82000000,
    "🪃" : 1/12210000,
    "🛡️" : 1/9980000,
    "📺" : 1/1,
},

doorLayer = {
    "☘️" : 1/33300000000000,
    "🗝️" : 1/42000000000,
    "🛎️" : 1/4730000000,
    "⛓️" : 1/345000000,
    "🔏" : 1/243800000,
    "🖇️" : 1/31337000,
    "🔑" : 1/12700000,
    "🔒" : 1/9900000,
    "🚪" : 1/1,
},

globeLayer = {
    "☘️" : 1/33300000000000,
    "💰" : 1/85700000000,
    "🚽" : 1/2240000000,
    "🔪" : 1/632000000,
    "💔" : 1/155000000,
    "🍆" : 1/69696969,
    "🖱️" : 1/11101000,
    "⌨️" : 1/10010000,
    "💻" : 1/6320000,
    "🌐" : 1/1,
}, 

chessLayer = {
    "☘️" : 1/33300000000000,
    "⚖️" : 1/123321000000,
    "📌" : 1/1230000000,
    "🖊️" : 1/165000000,
    "📚" : 1/48100000,
    "📐" : 1/34000000,
    "📖" : 1/16000000,
    "🧠" : 1/15500000,
    "✏️" : 1/8200000,
    "♟️" : 1/1,
},

barrierLayer = {
    "☘️" : 1/33300000000000,
    "✴️" : 1/200000,
    "✖️" : 1/1
},

borderLayer = {
    "☘️" : 1/33300000000000,
    "🚫" : 1/1000000000000,
    "💢" : 1/26000000000,
    "🛑" : 1/1000000000,
    "⭕" : 1/600000000,
    "🔕" : 1/225000000,
    "❌" : 1/1,
},  

worldTwoCommons = {
    "📘" : 1/1900000,
    "📙" : 1/1500500,
    "📕" : 1/1230560,
    "📗" : 1/854000,
    "⏏️" : 1/300000,
    "▶️" : 1/250000,
    "⏸️" : 1/200000,
    "⏯️" : 1/175000,
    "⏺️" : 1/100000,
    "⏭️" : 1/90000,
    "⏮️" : 1/75000,
    "⏩" : 1/70000,
    "⏪" : 1/60000,
    "⏬" : 1/50000,
    "⏫" : 1/25000,
    "◀️" : 1/20000,
    "🔼" : 1/17500,
    "🔽" : 1/15000,
    "➡️" : 1/10000,
    "↖️" : 1/9000,
    "↘️" : 1/5000,
    "⬇️" : 1/3000,
    "⬆️" : 1/2500,
    "⬅️" : 1/1750,
    "↪️" : 1/1500,
    "↩️" : 1/1250,
    "⤴️" : 1/1000,
    "⤵️" : 1/750,
    "🔀" : 1/500,
    "🔁" : 1/300,
    "🔂" : 1/250,
    "🔄" : 1/175,
    "🔃" : 1/100
};
let worldOneLayers = [dirtLayer, brickLayer, foggyLayer, waterLayer, rockLayer, radioactiveLayer, cactusLayer, paperLayer];
let worldTwoLayers = [cloudLayer, tvLayer, doorLayer, globeLayer, chessLayer];
let specialLayers = [sillyLayer, fluteLayer, dirtLayer2, barrierLayer, borderLayer];
let allLayers = [dirtLayer, brickLayer, foggyLayer, waterLayer, rockLayer, radioactiveLayer, cactusLayer, paperLayer];
//
const customMessages = {
    "🍀" : "",
    "🔕" : "",
    "⭕" : "",
    "🛑" : "",
    "💢" : "",
    "🚫" : "",
    "🖊️" : "",
    "📌" : "",
    "⚖️" : "",
    "🔪" : "",
    "🚽" : "",
    "💰" : "",
    "🔏" : "",
    "⛓️" : "",
    "🛎️" : "",
    "🗝️" : "",
    "🔨" : "",
    "💣" : "",
    "🏹" : "",
    "🔫" : "",
    "🌩️" : "",
    "🌦️" : "",
    "🪶" : "",
    "🪽" : "",
    "☘️" : "",
    "🌙": "Lunar rays of light dance upon your iris, captivating your adoring gaze..",
    "🫶": "A heartfelt gesture beckons you closer, both physically and mentally...",
    "💗": "A distant pulse resonates with your heart, synchronising its beat with yours...",
    "❤️‍🔥": "A compassionate warmth envelops your heart in a fiery yet comforting embrace...",
    "🧌": "WHAT ARE YOU DOING IN MY SWAMP?!!",
    "♾️": "life goes on and on and on and on and on and on and on and on...",
    "⚕️": "Gently materializing, a healing symbol radiates a serene energy, offering tranquility...",
    "💅": "GURLLLLLLL NO WAYYYYYYYY OMGGGGGGGGG...",
    "🌳": "CAKECORE13...",
    "💵": "MONEY MONEY KACHINGGGG JACKPOT...",
    "🏰": "An essence of royalty graces the air of majestic opulence...",
    "🪢": "Halfheartedly sauntering into existence, a lackluster piece of twine makes a feeble attempt at garnering attention, or not...",
    "🐋": "In the vast expanse of the ocean, where the horizon stretches endlessly and the waters teem with life, a beautiful whale emerges from the depths...",
    "🐪": "A camel walks across the huge Sahara...",
    "⚠️": "EXTREMELY LOUD INCORRECT BUZZER...",
    "🫃": "Why did I let someone convince me to add this...",
    "🚿": "A refreshing cascade rejuvenates the area...",
    "🏔️": "A tear comes to your eye as you gaze upon a beautiful landscape...",
    "😻": "holy shit is this a real cat??",
    "🌇": "The city shines bright as the rising sun illuminates it...",
    "💐": "From the depths of nature's embrace, a delicate bloom unfurls, casting a fragrant aura upon its surroundings...",
    "🪅": "Effervescently, festive confetti materializes bringing bursts of celebratory charm to the surroundings...",
    "🎆": "A sparkling burst appears as dazzling fireworks lights up the scene...",
    "🌈": "A vivid spectrum bursts forth, painting the surroundings with radiant color...",
    "🏵️": "A flower imparts a fleeting beauty to the terrain...",
    "🥬": "A leafy green surprise decides to join the vegetable party...",
    "💫": "Celestial bodies collide illuminating the depths with cosmic enchantment...",
    "👁️": "A cosmic anomaly of nothingness emerges past the boundaries of an unseen realm...",
    "🪩": "Your vision expands as your head spikes with an adrenaline rush...",
    "👀": "In this tumultuous symphony of the senses, time loses its meaning, and everything becomes a mere illusion...",
    "🥗": "A state of alignment with the natural rhythms of life, sings a harmony that resonates from the inside out...",
    "💸": "Softly descending, celestial radiance brings serenity to the infinite depths...",
    "👿": "Cosmic energies radiate from the depths, casting an enigmatic darkness...",
    "⌛": "The ticking of clocks halts, the rhythmic passage of seconds ceases...",
    "🪐": "Like tendrils of gentle embrace, a serene mist glides through the air...",
    "🧀": "As the scent envelops you, your mouth may water in anticipation of the delectable flavors that await...",
    "🌀": "A giant celestial body emerges, releasing cosmic energy that absorbs nearby quasars...",
    "🧊": "A frigid touch brings an icy embrace from the depths...",
    "🌌": "An infinite collection of galaxies converge creating an enchanting radiance...",
    "🥀": "With bated breath, you stand paralyzed, engulfed by the suffocating grip of fear as the terrible beast's gaze falls upon you...",
    "🥉": "turn the shower off...",
    "🪞": "You embrace the beauty of the grayscale world, where light and shadow dance in a timeless symphony of existence...",
    "🔩": "Your consciousness expands, transcending the limitations of mortal perception...",
    "❄️": "The world around you takes on a surreal quality as if draped in a cloak of frozen silence...",
    "💥": "Chaos reigns supreme as the forces of destruction sweep across the land...",
    "🏝️": "Huge, beaming crystals emerge from the ground, creating an ephemeral atmosphere...",
    "🌟": "In the cosmic theater of the universe, a mesmerizing spectacle unfolds...",
    "🌪️": "As the vortex descends from the heavens, the atmosphere trembles with its raw power...",
    "✨": "From every corner of festive depths, bursts of color erupt like fireworks against the velvet sky...",
    "🌏": "Ancient energies resonate in the depths with the essence of primordial earth...",
    "🧵": "A geometrical marvel adds an element of mathematical elegance...",
    "📝": "In this wondrous realm, the lines between fantasy and reality blur...",
    "⛄": "In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...",
    "💱": "Essences of exchange and trade fall through the depths, filling the cosmos with currency...",
    "💎": "Unearthed from the abyss, a dazzling gemstone emerges, casting a mesmerizing glow upon you...",
    "🔥": "oh wow 🔥🔥🔥",
    "🪔": "A lamp illuminates everything around you...",
    "🩺": "The heartbeats grow louder...",
    "🔭": "Unveiling cosmic wonders, an unknown gadget reveals the unseen...",
    "🎷": "A jazzed melody fills the room with rhythmic notes...",
    "🪘": "The bass of drums grow increasingly louder and louder...",
    "🥁": "The drums of liberation echo closer and closer...",
    "🪇": "Rhythmic and lively beats infuse the air with a festive atmosphere...",
    "🧫": "Under the watchful gaze, the bacteria undergo a myriad of transformations...",
    "🛸": "The sky becomes a canvas of extraterrestrial wonder as aliens fly everywhere...",
    "🍄": "A great fungus infects everything around it...",
    "🕸️": "As you struggle against the silken embrace of the web, you feel its delicate fibers tightening around you...",
    "🌡️": "As you stand amid an increasingly sweltering atmosphere, the air grows hotter and hotter...",
    "💊": "Taking this will for sure get you dizzy...",
    "🧬": "Mysteriously emerging, a double-helix subtly unveils the secrets encoded within the fabric of existence...",
}

//SETTING LAYERS

let lastLayerChange = 6000;
let currentLayer;
function setLayer(y) {
    if (currentWorld === 1) {
        let tempNum = y;
        if (tempNum < 16000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                let layerMaterial = Object.keys(allLayers[tempNum]);
                layerMaterial = layerMaterial[layerMaterial.length - 1];
                let craftedLayer = {...allLayers[tempNum]};
                delete craftedLayer[layerMaterial];
                Object.assign(craftedLayer, worldOneCommons);
                craftedLayer[layerMaterial] = 1/1;
                currentLayer = craftedLayer;
            }
        } else {
            if (tempNum > (lastLayerChange + 10000)) {
                lastLayerChange += 10000;
                if (Math.round(Math.random() * 77) === 33)
                    currentLayer = specialLayers[0];
                else if (Math.round(Math.random() * 40) === 20)
                    currentLayer = specialLayers[1];
                else {
                    let num = Math.floor(Math.random() * 8)
                    currentLayerNum = num;
                    let layerMaterial = Object.keys(allLayers[num]);
                    layerMaterial = layerMaterial[layerMaterial.length - 1];
                    let craftedLayer = {...allLayers[tempNum]};
                    delete craftedLayer[layerMaterial];
                    Object.assign(craftedLayer, worldOneCommons);
                    craftedLayer[layerMaterial] = 1/1;
                    currentLayer = craftedLayer;
                }
            }
        }
    } else {
        let tempNum = y;
        if (tempNum < 10000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                let layerMaterial = Object.keys(allLayers[tempNum]);
                layerMaterial = layerMaterial[layerMaterial.length - 1];
                let craftedLayer = {...allLayers[tempNum]};
                delete craftedLayer[layerMaterial];
                Object.assign(craftedLayer, worldTwoCommons);
                craftedLayer[layerMaterial] = 1/1;
                currentLayer = craftedLayer;
            }
        } else {
            if (currentLayer != borderLayer) {
                currentLayer = borderLayer;
                currentLayerNum = 5;
            }
        }
    }

}
/*
for (let propertyName in temp) {
    for (let j = 0; j < 4; j++) {
        oreList[propertyName][1][j] += temp[propertyName][j]
    }
}
*/