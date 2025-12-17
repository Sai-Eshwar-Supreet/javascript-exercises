const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    let previous = 1;
    let result = 0;

    for(let i = 0; i < n; i++){
        let current = result;
        result = result + previous;
        previous = current;
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
