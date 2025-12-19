const pascal = function(n) {

    if(n <= 0) return [];

    let currentRow = [1];
    if(n === 1) return currentRow;


    const previousRow = pascal(n - 1);
    for(let i = 0; i <= previousRow.length; i++){
        currentRow[i] = (previousRow[i] ?? 0) + (previousRow[i - 1] ?? 0);
    }

    return currentRow;
};
  
// Do not edit below this line
module.exports = pascal;
