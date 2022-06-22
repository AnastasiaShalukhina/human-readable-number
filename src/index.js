module.exports = function toReadable(number) {
    function getOneDigit(digit) {
        if (digit === "0") {
            return "zero";
        } else if (digit === "1") {
            return "one";
        } else if (digit === "2") {
            return "two";
        } else if (digit === "3") {
            return "three";
        } else if (digit === "4") {
            return "four";
        } else if (digit === "5") {
            return "five";
        } else if (digit === "6") {
            return "six";
        } else if (digit === "7") {
            return "seven";
        } else if (digit === "8") {
            return "eight";
        } else {
            return "nine";
        }
    }

    function getDecades(digitD) {
        if (digitD === "1") {
            return "ten";
        } else if (digitD === "2") {
            return "twenty";
        } else if (digitD === "3") {
            return "thirty";
        } else if (digitD === "4") {
            return "forty";
        } else if (digitD === "5") {
            return "fifty";
        } else if (digitD === "6") {
            return "sixty";
        } else if (digitD === "7") {
            return "seventy";
        } else if (digitD === "8") {
            return "eighty";
        } else {
            return "ninety";
        }
    }

    function getFrom11To19(digit1) {
        if (digit1 === "1") {
            return "eleven";
        } else if (digit1 === "2") {
            return "twelve";
        } else if (digit1 === "3") {
            return "thirteen";
        } else if (digit1 === "4") {
            return "fourteen";
        } else if (digit1 === "5") {
            return "fifteen";
        } else if (digit1 === "6") {
            return "sixteen";
        } else if (digit1 === "7") {
            return "seventeen";
        } else if (digit1 === "8") {
            return "eighteen";
        } else {
            return "nineteen";
        }
    }

    function getTwoDigitNumber(first, second) {
        if (second === "0") {
            return getDecades(first);
        } else if (first === "1") {
            return getFrom11To19(second);
        } else {
            let firstPart = getDecades(first);
            let secondPart = getOneDigit(second);
            let result = firstPart + " " + secondPart;
            return result;
        }
    }

    function getThreeDigitNumber(firstDigit, secondDigit, thirdDigit) {
        let firstPart = getOneDigit(firstDigit) + " " + "hundred";

        if (secondDigit === "0" && thirdDigit === "0") {
            return firstPart;
        } else if (secondDigit !== "0" && thirdDigit !== "0") {
            let secondPart = getTwoDigitNumber(secondDigit, thirdDigit);
            return firstPart + " " + secondPart;
        } else if (secondDigit === "0" && thirdDigit !== "0") {
            let secondPart = getOneDigit(thirdDigit);
            return firstPart + " " + secondPart;
        } else if (secondDigit !== "0" && thirdDigit === "0") {
            let secondPart = getDecades(secondDigit);
            return firstPart + " " + secondPart;
        }
    }

    let str = String(number);

    if (str.length === 1) {
        let result = getOneDigit(str);
        return result;
    } else if (str.length === 2) {
        let firstDigit = str.substring(0, 1);
        let secondDigit = str.substring(1);
        return getTwoDigitNumber(firstDigit, secondDigit);
    } else if (str.length === 3) {
        let firstDigit = str.substring(0, 1);
        let secondDigit = str.substring(1, 2);
        let thirdDigit = str.substring(2);
        return getThreeDigitNumber(firstDigit, secondDigit, thirdDigit);
    }
};
