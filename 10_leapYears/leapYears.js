const leapYears = function(year) {

    let isDivisibleByFour = year % 4 === 0;
    let isDivisibleByHundred = year % 100 === 0;
    let isDivisibleByFourHundred = year % 400 === 0;

    return isDivisibleByFourHundred || (!isDivisibleByHundred && isDivisibleByFour);
};

// Do not edit below this line
module.exports = leapYears;
