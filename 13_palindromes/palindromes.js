const palindromes = function (str) {
    var replaced = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversed = [...replaced].reverse().join('');
    return reversed === replaced;
};

// Do not edit below this line
module.exports = palindromes;
