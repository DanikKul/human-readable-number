module.exports = function toReadable (number) {
    let dictOnes = {0 : "zero",1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 6 : "six", 7 : "seven", 8 : "eight", 9 : "nine" };
    let dictTens = {1 : "ten", 2 : "twenty", 3 : "thirty", 4 : "forty", 5 : "fifty", 6 : "sixty", 7 : "seventy", 8 : "eighty", 9 : "ninety"};
    let dictEl = {0 : "ten", 1 : "eleven", 2 : "twelve", 3 : "thirteen", 4 : "fourteen", 5 : "fifteen", 6 : "sixteen", 7 : "seventeen", 8 : "eighteen", 9 : "nineteen"};
    let str = String(number);
    let result = "";
    if (str.length === 1){
        result = dictOnes[number];
    }
    if (str.length === 2){
        if (str[0] === "1"){
            result = dictEl[str[1]];
        } else if(str[1] === "0"){
            result = dictTens[str[0]];
        } else{
            result = dictTens[str[0]];
            result += " " + dictOnes[str[1]];
        }
    }
    if (str.length === 3){
        if(str[1] !== "1") {
            if (str[1] === "0" && str[2] !== "0") {
                result = dictOnes[str[0]] + " hundred ";
                result += dictOnes[str[2]];
            } else if (str[2] === "0" && str[1] !== "0") {
                result = dictOnes[str[0]] + " hundred ";
                result += dictTens[str[1]];
            } else if (str[2] === "0" && str[1] === "0") {
                result = dictOnes[str[0]] + " hundred";
            } else {
                result = dictOnes[str[0]] + " hundred ";
                result += dictTens[str[1]] + " ";
                result += dictOnes[str[2]];
            }
        } else {
            if (str[2] === "0"){
                result = dictOnes[str[0]] + " hundred ";
                result += dictEl[str[2]];
            } else if (str[2] === "0" && str[1] === "0"){
                result = dictOnes[str[0]] + " hundred";
            } else {
                result = dictOnes[str[0]] + " hundred ";
                result += dictEl[str[2]];
            }
        }
    }
    return result;
}

