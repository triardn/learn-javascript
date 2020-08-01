// Looping While
console.log("LOOPING PERTAMA");
let i = 2;
while(i <= 20) {
    console.log("%d - I love coding", i);
    i += 2;
}

console.log("LOOPING KEDUA");
let j = 20;
while (j >= 2) {
    console.log("%d - I will become a mobile developer", j);
    j -= 2;
}

console.log("");

// Looping For
for (let x = 1; x <=20; x++) {
    if (x % 3 == 0 && x % 2 != 0) {
        console.log("%d - I Love Coding", x);
    } else if (x % 2 != 0) {
        console.log("%d - Santai", x);
    } else {
        console.log("%d - Berkualitas", x);
    }
}

console.log("")

// Loop - rectangle #
for (let m = 0; m < 4; m++) {
    let rectangle = '';
    for (let n = 0; n < 8; n++) {
        rectangle += '#';
    }

    console.log(rectangle);
}

console.log("")

// Loop - Stairs
for (let k = 0; k < 7; k++) {
    let stairs = '';
    for (let l = 0; l < 8; l++) {
        if (l <= k) {
            stairs += '#';
        }
    }

    console.log(stairs);
}

console.log("")

// Loop - chess board
for (let a = 1; a <= 8; a++) {
    let chessboard = '';
    for (let b = 1; b <= 8; b++) {
        if (a % 2 != 0) { // odd line
            if (b % 2 != 0) {
                chessboard += ' ';
            } else {
                chessboard += '#';
            }
        } else { // even line
            if (b % 2 == 0) {
                chessboard += ' ';
            } else {
                chessboard += '#';
            }
        }
    }

    console.log(chessboard);
}