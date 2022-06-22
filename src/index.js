module.exports = function toReadable(number) {
    function getOneDigit(digit) {
        if (num === 0) {
            return "zero";
        } else if (digit === 1) {
            return "one";
        } else if (digit === 2) {
            return "two";
        } else if (digit === 3) {
            return "three";
        } else if (digit === 4) {
            return "four";
        } else if (digit === 5) {
            return "five";
        } else if (digit === 6) {
            return "six";
        } else if (digit === 7) {
            return "seven";
        } else if (digit === 8) {
            return "eight";
        } else {
            return "nine";
        }
    }

    function getDecades(digit) {
        if (digit === 1) {
            return "ten";
        } else if (digit === 2) {
            return "twenty";
        } else if (digit === 3) {
            return "thirty";
        } else if (digit === 4) {
            return "forty";
        } else if (digit === 5) {
            return "fifty";
        } else if (digit === 6) {
            return "sixty";
        } else if (digit === 7) {
            return "seventy";
        } else if (digit === 8) {
            return "eighty";
        } else {
            return "ninety";
        }
    }

    let str = String(number);
    if (str.length === 1) {
        let result = getOneDigit(number);
        return result;
    } else if (str.length === 2 && str.substring(1) == "0") {
        let decades = getDecades(str.substring(1));
        return decades;
    }
};
