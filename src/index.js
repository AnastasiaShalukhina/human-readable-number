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

    function getDecades(digit) {
        if (digit === "1") {
            return "ten";
        } else if (digit === "2") {
            return "twenty";
        } else if (digit === "3") {
            return "thirty";
        } else if (digit === "4") {
            return "forty";
        } else if (digit === "5") {
            return "fifty";
        } else if (digit === "6") {
            return "sixty";
        } else if (digit === "7") {
            return "seventy";
        } else if (digit === "8") {
            return "eighty";
        } else {
            return "ninety";
        }
    }

    function getFrom11To19(secondDigit) {
        if (secondDigit === "1") {
            return "eleven";
        } else if (secondDigit === "2") {
            return "twelve";
        } else if (secondDigit === "3") {
            return "thirteen";
        } else if (secondDigit === "4") {
            return "fourteen";
        } else if (secondDigit === "5") {
            return "fifteen";
        } else if (secondDigit === "6") {
            return "sixteen";
        } else if (secondDigit === "7") {
            return "seventeen";
        } else if (secondDigit === "8") {
            return "eighteen";
        } else {
            return "nineteen";
        }
    }

    function getTwoDigitNumber(firstDigit, secondDigit) {
        if (secondDigit === "0") {
            return getDecades(firstDigit);
        } else if (firstDigit === "1") {
            return getFrom11To19(secondDigit);
        } else {
            let firstPart = getDecades(firstDigit);
            let secondPart = getOneDigit(secondDigit);
            let result = firstPart + " " + secondPart;
            return result;
        }
    }

    function getThreeDigitNumber(firstDigit, secondDigit, thirdDigit) {
        let firstPart = getOneDigit(firstDigit);

        if (secondDigit === "0" && thirdDigit === "0") {
            return firstPart + " " + "hundred";
        } else if (secondDigit !== "0" && thirdDigit !== "0") {
            let secondPart = getTwoDigitNumber(firstDigit, secondDigit);
            return firstPart + " " + "hundred" + " " + secondPart;
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
