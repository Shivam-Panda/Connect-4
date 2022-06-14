const obj = [
    [1, 2, 3, 4, 5, 6],
    [1, 8, 9, 10, 11, 12],
    [1, 14, 15, 16, 17, 18],
    [1, 20, 21, 22, 23, 24],
    [1, 26, 27, 28, 29, 30],
    [1, 32, 33, 34, 35, 36]
]

function getSs() {
    let arrs = []
    for(let i = 0; i < 6; i++) {
        let a = []
        for(let j = 0; j < 6; j++) {
            a.push(obj[j][i]);
        }
        arrs.push(a);
    }
    return arrs
}

function getStraights() {
    let straights = this.getSs(obj);
    let arrs = [];
    for(let i = 0; i < straights.length; i++) {
        for(let j = 0; j < 3; j++) {
            let arr = []
            for(let k = j; k < j + 4; k++) {
                arr.push(straights[i][k])
            }
            arrs.push(arr);
        }
    }
    return arrs;
}

function getHorizontals() {
    let arrs = [];
    for(let i = 0; i < obj.length; i++) {
        for(let j = 0; j < 3; j++) {
            let arr = []
            for(let k = j; k < j + 4; k++) {
                arr.push(obj[i][k])
            }
            arrs.push(arr);
        }
    }
    return arrs;
}

function checkWin(arr) {
    let first = arr[0]
    let checks = false;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] == first) {
            checks = true;
        } else {
            checks = false;
        }
    }
    if(checks) {
        return first;
    } else {
        return null;
    }
}

function getDiagonals() { 
    let sols = [];
    for(let k = 0; k < 3; k++) {
        for(let i = 0; i < 3; i++) {
            let cur = [];
            for(let j = 0; j < 4; j++) {
                cur.push(obj[j + k][j+i]); 
            }
            sols.push(cur);
        }
    }
    return sols;
}

console.log(obj);
console.log(getDiagonals());