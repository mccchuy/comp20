var userLotteryNum = prompt("Please enter your first 5 winning numbers (seperated by a space): ", "12 3 4 45 32");
var userluckyNum = prompt("Please enter your lucky ball number:", "6");

// Goal is to convert a string of numbers into an array of ints
// Splits the long string the user entered into an array of strings
var stringArray = userLotteryNum.split(" ");

//Sorts the array of strings
sortedStringArray = stringArray.sort(function(a,b){return a-b});

document.write("Your sorted number pick: " + sortedStringArray);
document.write("<br/>" + "Your lucky number: " + userluckyNum);

for (i = 0; i < sortedStringArray.length; i++) {
    sortedStringArray[i] = parseInt(sortedStringArray[i]);
}

// Set empty array for winning lottery numbers
intCPUNum = new Array(5);

// For loop to generate winning lottery numbers
// ?? Check w TA to see if this will always generate unique numbers ??
// DOESN'T ALWAYS PRODUCE UNIQUE NUMS
for (i=0; i < intCPUNum.length; i++) {
    var randNum = (Math.floor(Math.random(intCPUNum[i])*48)+1);
    while (intCPUNum.includes(randNum)) {
        randNum = (Math.floor(Math.random(intCPUNum[i])*48)+1);
    } 
    intCPUNum[i] = randNum;
}

// Generates lucky ball number
luckyBall = Math.round(Math.random()*18)
while (luckyBall == 0) {
    luckyBall = Math.round(Math.random()*18)
}

intCPUNum = intCPUNum.sort(function(a,b){return a-b});
document.write("<br/>" + "Winning Lottery Numbers sorted: " + intCPUNum);
document.write("<br/>"+"Winning Lucky Number: " + luckyBall);

numMatches = 0;
for (i=0; i < sortedStringArray.length; i++) {
    for (j=0; j < intCPUNum.length; j++) {
        if (sortedStringArray[i] == intCPUNum[j]) {
            numMatches++;
        }
    }
}

document.write("<hr/>");

document.write("<br/>" + "Number of Matches: " + numMatches);

if (luckyBall == userluckyNum) {
    document.write("<br/>" + "Lucky ball matches!" +"<br/>");
} else {
    document.write("<br/>" + "Lucky ball doesn't match" +"<br/>");
}

winnings = 0;
// Edit if statements later to use AND (not working currently)
if (numMatches == 0) {
    if (luckyBall == userluckyNum) {
        winnings = 4;
    }
}

if (numMatches == 1) {
    if (luckyBall == userluckyNum) {
        winnings = 6;
    }
}

if (numMatches == 2) {
    if (luckyBall == userluckyNum) {
        winnings = 25;
    } else {
        winnings = 3;
    }
}

if (numMatches == 3) {
    if (luckyBall == userluckyNum) {
        winnings = 150;
    } else {
        winnings = 20;
    }
}

if (numMatches == 4) {
    if (luckyBall == userluckyNum) {
        winnings = 5000;
    } else {
        winnings = 200;
    }
}

if ((numMatches == 0) || (numMatches == 1) || (numMatches == 2) || (numMatches == 3) || (numMatches == 4)) {
    document.write("Your winnings: $" + winnings);
}

if (numMatches == 5) {
    if (luckyBall == userluckyNum) {
        winnings = 7000;
        document.write("Your winnings: $" + winnings + "a WEEK for LIFE");

    } else {
        winnings = 2500;
        document.write("Your winnings: $" + winnings + "a YEAR for LIFE");

    }
}