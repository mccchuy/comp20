function display() {
    var num1 = document.getElementById('fNum').value;
    var num2 = document.getElementById('sNum').value;

    factorArr1 = findFactors(num1);
    factorArr2 = findFactors(num2);

    factorsSum1 = sumFactors(factorArr1);
    factorsSum2 = sumFactors(factorArr2);

    checkIfAmicable(num1, num2, factorsSum1, factorsSum2);
    popUp(num1, num2, factorArr1, factorArr2);
}

function popUp(num1, num2, factorArr1, factorArr2) {
    message = "Your array for number " + num1 + " is: " + factorArr1 + "\n";
    message += "Your array for number " + num2 + " is: " + factorArr2 + "\n";
    window.alert(message);
}

function findFactors(number) {
    var factorArr = [];
    for(i = 1; i <= number; i++) {
        if ((number % i == 0) && (number/i != 1)) {
            factorArr.push(i);
        }
    }
    return factorArr;
}

function sumFactors(factorArr) {
    var factorsSum = 0;
    for(i = 0; i < factorArr.length; i++) {
        factorsSum += factorArr[i];
    }
    return factorsSum;
} 

function checkIfAmicable(num1, num2, sum1, sum2) {
    if ((num1 == sum2) && (num2 == sum1)) {
        document.getElementById('output').innerHTML = "The numbers " + num1 + " and " + num2 + " are amicable";
    } else {
        document.getElementById('output').innerHTML = "The numbers " + num1 + " and " + num2 + " are not amicable";
    }
}