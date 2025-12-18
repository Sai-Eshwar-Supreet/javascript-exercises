const isObject = (val) => val !== null && typeof(val) === 'object';
const totalIntegers = function(obj) {
    if(!isObject(obj)) return;
    
    let count = 0;
    for(const key in obj){
        const val = obj[key];
        if(Number.isInteger(val)) count++;
        else count += (totalIntegers(val) ?? 0);
    }

    return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;
