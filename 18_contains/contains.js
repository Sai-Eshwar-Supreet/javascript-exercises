const contains = function(obj, target) {
    for(const key in obj){
        const val = obj[key];
        if(Object.is(val, target)) return true;
        if(val !== null && typeof(val) === 'object' && contains(val, target)) return true;
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
