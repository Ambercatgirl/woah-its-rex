/* Copyright (C) Amber Blessing - All Rights Reserved
 
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Amber Blessing <ambwuwu@gmail.com>, January 2024
*/
async function rollAbilities() {
    let boost = 1;
    let m = 1;
    if (gears[1])
        boost *= 1.1;
    if (gears[5])
        boost *= 1.6;
    if (gears[8])
        m = 1.2;
    let temp;
    if (!resetting) {
        if (Math.random() < 1/750) {
            generateCave(curX, curY, 0, 0);
            displayArea();
            gearAbility3();
        }
    }
    switch (currentPickaxe) {
        case 1:
            if (Math.random() < (1/30 * m)) {
                canMine = await(pickaxeAbility3(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 2:
            if (Math.random() <= (1/35 * m)) {
                canMine = await(pickaxeAbility1(curX, curY, 3, 1.35, boost));
                updateActiveRecipe();
            }
            break;
        case 3:
            if (Math.random() <= (1/30 * m)) {
                canMine = await(pickaxeAbility2(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 4:
            if (Math.random() <= (1/25 * m)) {
                canMine = await(pickaxeAbility4(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 5:
            if (Math.random() <= (1/17 * m)) {
                canMine = await(pickaxeAbility5(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 6:
            if (Math.random() <= (1/60 * m)) {
                canMine = await(pickaxeAbility6(curX, curY, boost));
                updateActiveRecipe();
            } else if (Math.random() <= (1/40 * m)) {
                canMine = await(pickaxeAbility7(curX, curY, boost));
                updateActiveRecipe();
            }
            
            break;
        case 7:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility8(curX, curY, 0, boost));
                updateActiveRecipe();
            }
            break;
        case 8:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility9(curX, curY, 0, boost));
                updateActiveRecipe();
            }
            break;
        case 9:
            if (Math.random() <= (1/30 * m)) {
                canMine = await(pickaxeAbility10(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 10:
            if (Math.random() <= (1/50 * m)) {
                canMine = await(pickaxeAbility11(curX, curY, boost));
                updateActiveRecipe();
            }
            break;
        case 11:
            if (Math.random() <= (1/100 * m)) {
                temp = await(pickaxeAbility12(curX, curY, boost));
                if (!resetting)
                    canMine = temp;
                updateActiveRecipe();
            }
            break;
        case 12:
            if (Math.random() <= (1/150 * m)) {
                canMine = await(pickaxeAbility13(curX, curY, boost));
                updateActiveRecipe();
            }
    }
}

let ability1Active = false;
let ability1Timeout;
let energySiphonerSpeed;
let energySiphonerDirection;
function gearAbility1() {
    if (!ability1Active && !resetting) {
        ability1Active = true;
        energySiphonerSpeed = miningSpeed;
        energySiphonerDirection = curDirection;
        curDirection = "";
        clearInterval(loopTimer);
        goDirection(energySiphonerDirection, energySiphonerSpeed - 3);
        ability1Timeout = setTimeout(() => {
            miningSpeed = energySiphonerSpeed;
            clearInterval(loopTimer);
            curDirection = "";
            if (energySiphonerDirection != "") {
                goDirection(energySiphonerDirection);
            }
            ability1Active = false;
        }, 5000);
    }
}

function gearAbility2() {
    if (gears[9]) {
        currentLayer = sillyLayer;
    }
}

function gearAbility3() {
    if (gears[3] && loggedFinds.length > 0) {
        for (let i = 0; i < loggedFinds.length; i++) {
            if (mine[loggedFinds[i][0]] !== undefined && mine[loggedFinds[i][0]][loggedFinds[i][1]] !== undefined) {
                mineBlock(loggedFinds[i][1], loggedFinds[i][0], "ability", 1);
                loggedFinds.splice(i, 1);
            }
        }
    }
}
function pickaxeAbility1(x, y, size, customLuck, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = customLuck * boost;
    canMine = false;
    const constraints = getParams(size, size);
    for (let r = y - constraints[1]; r <= y + size; r++) {
        for (let c = x - constraints[0]; c <= x + size; c++) {
            if (mine[r][c] === undefined) {
                generated = generateBlock(thisLuck, [r, c]);
                mine[r][c] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(r, c);
            }
            if (mine[r][c] !== "⛏️")
                mineBlock(c, r, "ability", thisLuck);
        }
        displayArea();
        setTimeout(() => {
            resolve(true);
        }, 1);
    }
    });
}

function pickaxeAbility2(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 1.8 * boost;
    const constraints  = getParams(6, 6);
    canMine = false;
    const origin = [y, x];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints[0]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    for (let i = 0; i < constraints[1]; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    y = origin[0];
    if (constraints[1] < constraints[0])
        constraints[0] = constraints[1];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility3(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 1.2 * boost;
    const constraints  = getParams(6, 6, x, y);
    canMine = false;
    const origin = [y, x];
    for (let i = 0; i < 6; i++) {
        x++;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    for (let i = 0; i < constraints[0]; i++) {
        x--;
        mineBlock(x, y, "ability", thisLuck);
    }
    x = origin[1];
    for (let i = 0; i < 6; i++) {
        y++;
        mineBlock(x, y, "ability", thisLuck);
    }
    y = origin[0];
    for (let i = 0; i < constraints[1]; i++) {
        y--;
        mineBlock(x, y, "ability", thisLuck);
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility4(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 2 * boost;
    const constraints  = getParams(7, 7);
    const area1 = Math.round((Math.random() * (-(constraints[0]) - 7)) + 7);
    const area2 = Math.round((Math.random() * (-(constraints[1]) - 7)) + 7);
    pickaxeAbility1((x + area1), (y + area2), 4, thisLuck, 1);
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility5(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 5 * boost;
    const area1 = Math.round((Math.random() * 40) - 20);
    const area2 = Math.round((Math.random() * 40) - 20);
    let r = y + area2;
    let c = x + area1;
    for (let i = c; i < c + 5; i++) {
        if (mine[r] !== undefined && mine[r][i] === undefined) {
            generated = generateBlock(thisLuck, [r, i]);
                    mine[r][i] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(r, c);
        }
        if (mine[r] !== undefined && mine[r][i] !== "⛏️")
            mineBlock(i, r, "ability", thisLuck);
    }
    r++;
    for (let i = 0; i < 5; i++) {
        for (let j = c - 1; j < c+6; j++) {
            if (mine[r] !== undefined && mine[r][j] === undefined) {
                generated = generateBlock(thisLuck, [r, j]);
                    mine[r][j] = generated[0];
                if (generated[1])
                    verifiedOres.verifyLog(r, j);
            }
            if (mine[r] !== undefined && mine[r][j] !== "⛏️")
                mineBlock(j, r, "ability", thisLuck);
        }
        r++;
    }
    for (let i = c; i < c + 5; i++) {
        if (mine[r] !== undefined && mine[r][i] === undefined) {
            generated = generateBlock(thisLuck, [r, i]);
            mine[r][i] = generated[0];
            if (generated[1])
                verifiedOres.verifyLog(r, i);
        }
        if (mine[r] !== undefined && mine[r][i] !== "⛏️")
            mineBlock(i, r, "ability", thisLuck);
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility6(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 10 * boost;
    const constraints  = getParams(9, 9);
    let dist = 9;
    for (let r = y + 6; r >= y - constraints[1]; r--) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints[0]) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
        }
        dist--;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility7(x, y, boost) {
    return new Promise((resolve) => {
    let generated;
    const thisLuck  = 10 * boost;
    const constraints = getParams(4, 3);
    let reps = 1;
    for (let r = y - constraints[1]; r < y; r++) {
        for (let c = x - constraints[0]; c < x + 5; c++) {
            if (reps !== 4 && reps !== 6) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
            reps++; 
        }
    }
    reps = 1;
    let dist = 3;
    for (let r = y; r < y+4; r++) {
        for (let c = x - dist; c <= x + dist; c++) {
            if (c >= x - constraints[0]) {
                if (mine[r][c] === undefined) {
                    generated = generateBlock(thisLuck, [r, c]);
                    mine[r][c] = generated[0];
                    if (generated[1])
                        verifiedOres.verifyLog(r, c);
                }
                if (mine[r][c] !== "⛏️")
                    mineBlock(c, r, "ability", thisLuck);
            }
        }
        dist--;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility8(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const thisLuck  = 3 * boost;
        const constraints  = getParams(8, 8, x, y);
        const origin = [y, x];
        for (let i = 0; i < 8; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        for (let i = 0; i < 8; i++) {
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75) {
            procs[2] = [x, y, true]
        }
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility8(procs[i][0], procs[i][1], reps, boost);
        }
        resolve(true);
    } else {
        displayArea();
        resolve(true);
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility9(x, y, reps, boost) {
    return new Promise((resolve) => {
    canMine = false;
    if (reps < 4) {
        let procs = [
            [],
            [],
            [],
            []
        ];
        const thisLuck  = 4 * boost;
        const constraints  = getParams(6, 6, x, y);
        const origin = [y, x];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[0] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints[0]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y++;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[1] = [x, y, true];
        x = origin[1];
        y = origin[0];
        for (let i = 0; i < constraints[1]; i++) {
            x++;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[2] = [x, y, true];
        x = origin[1];
        y = origin[0];
        if (constraints[1] < constraints[0])
            constraints[0] = constraints[1];
        for (let i = 0; i < constraints[0]; i++) {
            x--;
            mineBlock(x, y, "ability", thisLuck);
            y--;
            mineBlock(x, y, "ability", thisLuck);
        }
        if (Math.random() <= 0.75)
            procs[3] = [x, y, true];
        reps++;
        for (let i = 0; i < procs.length; i++) {
            if (procs[i][1])
                pickaxeAbility9(procs[i][0], procs[i][1], reps, boost);
        }
        resolve(true);
    } else {
        displayArea();
        resolve(true);
    }
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility10(x, y, boost) {
    return new Promise((resolve) => {
    const thisLuck  = 20 * boost;
    let generated;
    let skips = [
        [0, 4, 12, 16],
        [5, 11],
        [6, 10],
        [0, 16],
        [0, 1, 15, 16],
        [0, 16],
        [6, 10],
        [5, 11],
        [0, 4, 12, 16]
    ];
    let i = 0;
    let reps = 0;
    for (let c = x - 4; c < x + 5; c++) {
        for (let r = y - 8; r < y + 9; r++) {
            if (mine[r] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    if (mine[r][c] !== "⛏️")
                        mineBlock(c, r, "ability", thisLuck);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    i = 0;
    reps = 0;
    for (let r = y - 4; r < y + 5; r++) {
        for (let c = x - 8; c < x + 9; c++) {
            if (mine[r] !== undefined) {
                if (!(skips[reps].includes(i))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    if (mine[r][c] !== "⛏️")
                        mineBlock(c, r, "ability", thisLuck);
                }
            }
            i++;
        }
        i = 0;
        reps++;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility11(x, y, boost) {
    const thisLuck = 17.5 * boost;
    return new Promise((resolve) => {
    for (let i = -3; i < 4; i++) {
        for (let j = -3; j < 4; j++) {
            if (!(i === 0 && j === 0) && Math.random() <= 0.5) {
                    for (let r = 7 * j; r < (7 * j + 7); r++) {
                        for (let c = 7 * i; c < (7 * i + 7); c++) {
                            if (mine[y + r] !== undefined) {
                                if (mine[y + r][x + c] === undefined) {
                                    generated = generateBlock(thisLuck, [y + r, x + c]);
                                    mine[y + r][x + c] = generated[0];
                                    if (generated[1])
                                        verifiedOres.verifyLog(r, c);
                                }
                                if (mine[y + r] !== undefined && mine[y + r][ x + c] !== undefined)
                                    mineBlock(x + c, y + r, "ability", thisLuck);
                            }
                        }
                    }
            }
        }
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility12(x, y, boost) {
    return new Promise((resolve) => {
    let direction;
    let dirNum = 0;
    const thisLuck = 30 * boost;
    const nums = [3, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 48, 50, 51, 53, 54];
    const dirs = ["down", "left", "up", "right"];
    for (let i = 0; i < nums.length; i++) {
        direction = dirs[dirNum];
        switch(direction) {
            case "down":
                for (let r = y; r <= y + nums[i]; r++) {
                    if (mine[r] != undefined) {
                        if (mine[r][x] === undefined) {
                            generated = generateBlock(thisLuck, [r, x]);
                            mine[r][x] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(r, x);
                        }
                        if (mine[r][x] != undefined) {
                            mineBlock(x, r, "ability", thisLuck);
                    }   
                    } 
            }
            y += nums[i];
            break;
            case "left":
                for (let c = x; c >= x - nums[i]; c--) {
                    if (mine[y] != undefined && mine[y][c] != undefined) {
                        if (mine[y][c] === undefined) {
                            generated = generateBlock(thisLuck, [y, c]);
                            mine[y][c] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(y, c);
                        }
                        mineBlock(c, y, "ability", thisLuck);
                        
                    }
                }
                x -= nums[i];
                break;
            case "up":
                for (let r = y; r >= y - nums[i]; r--) {
                    if (mine[r] != undefined) {
                        if (mine[r][x] === undefined) {
                            generated = generateBlock(thisLuck, [r, x]);
                            mine[r][x] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(r, x);
                        }
                        if (mine[r][x] != undefined) {
                            mineBlock(x, r, "ability", thisLuck);
                        }
                    }
                }
                y -= nums[i];
                break;
            case "right":
                for (let c = x; c <= x + nums[i]; c++) {
                    if (mine[y] != undefined && mine[y][c] != undefined) {
                        if (mine[y][c] === undefined) {
                            generated = generateBlock(thisLuck, [y, c]);
                            mine[y][c] = generated[0];
                            if (generated[1])
                                verifiedOres.verifyLog(y, c);
                        }
                        mineBlock(c, y, "ability", thisLuck); 
                    }
                }
                x += nums[i];
                break;
        }
        dirNum++;
        if (dirNum > 3)
            dirNum = 0;
    }
    
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

function pickaxeAbility13(x, y, boost) {
    return new Promise((resolve) => {
    let thisLuck = 75 * boost;
    let startNums = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4, 5, 6, 6];
    let endNums = [37, 36, 35, 34, 29, 31, 30, 29, 28, 27, 26, 24, 29, 28, 32, 31, 25, 24, 23, 16, 24, 23, 22, 24, 26, 28, 19, 31, 30, 24, 13, 20, 21];
    let numSkips = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [28], [27], [], [], [], [], [19, 20], [21, 22], [], [], [], [], [], [24], [12, 25], [13], [], [15], [16]];
    let i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (mine[r] != undefined) {
            for (let c = x + startNums[i]; c <= x + endNums[i]; c++) {
                if (!(numSkips[i].includes(c - x))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    mineBlock(c, r, "ability", thisLuck); 
                }
            }
        }
        i++;
    }
    i = 0;
    for (let r = y - 16; r < y + 17; r++) {
        if (mine[r] != undefined) {
            for (let c = x - startNums[i]; c >= x - endNums[i]; c--) {
                if (!(numSkips[i].includes(-(c - x)))) {
                    if (mine[r][c] === undefined) {
                        generated = generateBlock(thisLuck, [r, c]);
                        mine[r][c] = generated[0];
                        if (generated[1])
                            verifiedOres.verifyLog(r, c);
                    }
                    mineBlock(c, r, "ability", thisLuck); 
                }
            }
        }
        i++;
    }
    displayArea();
    setTimeout(() => {
        resolve(true);
    }, 1);
    });
}

