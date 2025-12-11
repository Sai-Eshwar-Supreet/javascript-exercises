const reverseString = function(str) {
    let result = new Array(str.length);
    for(let i = 0 - 1; i < str.length; i++) result[i] = str[str.length - 1 - i];

    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
